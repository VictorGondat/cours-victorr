import { NextResponse } from "next/server";
import { getStudent, hasGroupAuth } from "@/lib/auth";
import { findMemberByKey, updateGroupProject } from "@/lib/db";

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  if (!(await hasGroupAuth())) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  const student = await getStudent();
  if (!student) {
    return NextResponse.json(
      { error: "Rejoins d'abord un groupe" },
      { status: 403 },
    );
  }

  const member = findMemberByKey(student.key);
  if (!member) {
    return NextResponse.json(
      { error: "Membre introuvable" },
      { status: 403 },
    );
  }

  const { id } = await params;
  const groupId = Number(id);
  if (member.group_id !== groupId) {
    return NextResponse.json(
      { error: "Tu n'appartiens pas à ce groupe" },
      { status: 403 },
    );
  }

  const body = (await req.json().catch(() => ({}))) as Record<string, unknown>;

  const textFields = [
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

  const boolFields = ["vercel_ready", "github_ready"] as const;

  const update: Record<string, string | number> = {};
  for (const k of textFields) {
    if (typeof body[k] === "string") update[k] = (body[k] as string).slice(0, 4000);
  }
  for (const k of boolFields) {
    if (typeof body[k] === "boolean") update[k] = body[k] ? 1 : 0;
  }

  updateGroupProject(groupId, update);
  return NextResponse.json({ ok: true });
}
