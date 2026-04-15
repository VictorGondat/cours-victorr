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

  const allowed = [
    "team_name",
    "project_name",
    "description",
    "app_url",
    "repo_url",
    "target_user",
    "problem",
  ] as const;

  const fields: Record<string, string> = {};
  for (const k of allowed) {
    if (typeof body[k] === "string") fields[k] = (body[k] as string).slice(0, 4000);
  }

  updateGroupProject(groupId, fields);
  return NextResponse.json({ ok: true });
}
