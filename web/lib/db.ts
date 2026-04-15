import Database from "better-sqlite3";
import { mkdirSync } from "node:fs";
import { dirname } from "node:path";

const DB_PATH = process.env.COURS_DB_PATH ?? ".data/cours.db";

let _db: Database.Database | null = null;

export function getDb(): Database.Database {
  if (_db) return _db;

  mkdirSync(dirname(DB_PATH), { recursive: true });

  const db = new Database(DB_PATH);
  db.pragma("journal_mode = WAL");
  db.pragma("foreign_keys = ON");

  db.exec(`
    CREATE TABLE IF NOT EXISTS groups (
      id INTEGER PRIMARY KEY,
      team_name TEXT NOT NULL DEFAULT '',
      project_name TEXT NOT NULL DEFAULT '',
      description TEXT NOT NULL DEFAULT '',
      app_url TEXT NOT NULL DEFAULT '',
      repo_url TEXT NOT NULL DEFAULT '',
      target_user TEXT NOT NULL DEFAULT '',
      problem TEXT NOT NULL DEFAULT '',
      updated_at TEXT
    );

    CREATE TABLE IF NOT EXISTS members (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      group_id INTEGER NOT NULL,
      first_name TEXT NOT NULL,
      last_name TEXT NOT NULL,
      normalized_key TEXT NOT NULL UNIQUE,
      joined_at TEXT NOT NULL,
      FOREIGN KEY (group_id) REFERENCES groups(id) ON DELETE CASCADE
    );

    CREATE INDEX IF NOT EXISTS idx_members_group ON members(group_id);
  `);

  const existingCols = db
    .prepare("PRAGMA table_info(groups)")
    .all() as { name: string }[];
  const colNames = new Set(existingCols.map((c) => c.name));
  const additions: Array<[string, string]> = [
    ["vercel_ready", "INTEGER NOT NULL DEFAULT 0"],
    ["github_ready", "INTEGER NOT NULL DEFAULT 0"],
    ["llm_used", "TEXT NOT NULL DEFAULT ''"],
    ["llm_other_name", "TEXT NOT NULL DEFAULT ''"],
    ["notes", "TEXT NOT NULL DEFAULT ''"],
  ];
  for (const [name, def] of additions) {
    if (!colNames.has(name)) {
      db.exec(`ALTER TABLE groups ADD COLUMN ${name} ${def}`);
    }
  }

  const seed = db.prepare("INSERT OR IGNORE INTO groups (id) VALUES (?)");
  const seedAll = db.transaction(() => {
    for (let i = 1; i <= 8; i++) seed.run(i);
  });
  seedAll();

  _db = db;
  return db;
}

export type GroupRow = {
  id: number;
  team_name: string;
  project_name: string;
  description: string;
  app_url: string;
  repo_url: string;
  target_user: string;
  problem: string;
  vercel_ready: number;
  github_ready: number;
  llm_used: string;
  llm_other_name: string;
  notes: string;
  updated_at: string | null;
};

export type MemberRow = {
  id: number;
  group_id: number;
  first_name: string;
  last_name: string;
  normalized_key: string;
  joined_at: string;
};

export type GroupWithMembers = GroupRow & {
  members: MemberRow[];
  member_count: number;
};

export const MAX_MEMBERS_PER_GROUP = 6;

export function listGroupsWithMembers(): GroupWithMembers[] {
  const db = getDb();
  const groups = db.prepare("SELECT * FROM groups ORDER BY id").all() as GroupRow[];
  const members = db
    .prepare("SELECT * FROM members ORDER BY joined_at")
    .all() as MemberRow[];

  return groups.map((g) => {
    const gm = members.filter((m) => m.group_id === g.id);
    return { ...g, members: gm, member_count: gm.length };
  });
}

export function getGroupWithMembers(id: number): GroupWithMembers | null {
  const db = getDb();
  const g = db.prepare("SELECT * FROM groups WHERE id = ?").get(id) as
    | GroupRow
    | undefined;
  if (!g) return null;
  const gm = db
    .prepare("SELECT * FROM members WHERE group_id = ? ORDER BY joined_at")
    .all(id) as MemberRow[];
  return { ...g, members: gm, member_count: gm.length };
}

export function findMemberByKey(key: string): MemberRow | null {
  const db = getDb();
  return (
    (db
      .prepare("SELECT * FROM members WHERE normalized_key = ?")
      .get(key) as MemberRow | undefined) ?? null
  );
}

export function joinGroup(params: {
  groupId: number;
  firstName: string;
  lastName: string;
  normalizedKey: string;
}): { ok: true } | { ok: false; error: string } {
  const db = getDb();
  const group = db
    .prepare("SELECT id FROM groups WHERE id = ?")
    .get(params.groupId);
  if (!group) return { ok: false, error: "Groupe introuvable" };

  const count = db
    .prepare("SELECT COUNT(*) as c FROM members WHERE group_id = ?")
    .get(params.groupId) as { c: number };

  const existing = findMemberByKey(params.normalizedKey);

  if (existing) {
    if (existing.group_id === params.groupId) return { ok: true };
    if (count.c >= MAX_MEMBERS_PER_GROUP)
      return { ok: false, error: "Ce groupe est complet (6 max)" };
    db.prepare("UPDATE members SET group_id = ? WHERE id = ?").run(
      params.groupId,
      existing.id,
    );
    return { ok: true };
  }

  if (count.c >= MAX_MEMBERS_PER_GROUP)
    return { ok: false, error: "Ce groupe est complet (6 max)" };

  db.prepare(
    `INSERT INTO members (group_id, first_name, last_name, normalized_key, joined_at)
     VALUES (?, ?, ?, ?, ?)`,
  ).run(
    params.groupId,
    params.firstName,
    params.lastName,
    params.normalizedKey,
    new Date().toISOString(),
  );
  return { ok: true };
}

export function leaveGroup(normalizedKey: string): void {
  const db = getDb();
  db.prepare("DELETE FROM members WHERE normalized_key = ?").run(normalizedKey);
}

export type ProjectUpdate = Partial<{
  team_name: string;
  project_name: string;
  description: string;
  app_url: string;
  repo_url: string;
  target_user: string;
  problem: string;
  vercel_ready: number;
  github_ready: number;
  llm_used: string;
  llm_other_name: string;
  notes: string;
}>;

const TEXT_FIELDS = [
  "team_name",
  "project_name",
  "description",
  "app_url",
  "repo_url",
  "target_user",
  "problem",
  "llm_used",
  "llm_other_name",
  "notes",
] as const;

const INT_FIELDS = ["vercel_ready", "github_ready"] as const;

export function updateGroupProject(
  groupId: number,
  fields: ProjectUpdate,
): void {
  const db = getDb();
  const sets: string[] = [];
  const values: (string | number)[] = [];

  for (const k of TEXT_FIELDS) {
    const v = fields[k];
    if (v !== undefined) {
      sets.push(`${k} = ?`);
      values.push(v);
    }
  }
  for (const k of INT_FIELDS) {
    const v = fields[k];
    if (v !== undefined) {
      sets.push(`${k} = ?`);
      values.push(v ? 1 : 0);
    }
  }

  if (sets.length === 0) return;

  sets.push("updated_at = ?");
  values.push(new Date().toISOString());
  values.push(groupId);

  db.prepare(`UPDATE groups SET ${sets.join(", ")} WHERE id = ?`).run(...values);
}
