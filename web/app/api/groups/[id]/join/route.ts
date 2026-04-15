import { NextResponse } from "next/server";
import {
  getStudent,
  hasGroupAuth,
  normalizeName,
  setStudentCookie,
} from "@/lib/auth";
import { joinGroup } from "@/lib/db";

export async function POST(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  if (!(await hasGroupAuth())) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  const { id } = await params;
  const groupId = Number(id);
  if (!Number.isInteger(groupId) || groupId < 1 || groupId > 8) {
    return NextResponse.json({ error: "Groupe invalide" }, { status: 400 });
  }

  const body = (await req.json().catch(() => ({}))) as {
    firstName?: string;
    lastName?: string;
  };

  const existing = await getStudent();
  const firstName = (body.firstName ?? existing?.firstName ?? "").trim();
  const lastName = (body.lastName ?? existing?.lastName ?? "").trim();

  if (!firstName || !lastName) {
    return NextResponse.json(
      { error: "Prénom et nom requis" },
      { status: 400 },
    );
  }

  const key = normalizeName(firstName, lastName);
  const result = joinGroup({
    groupId,
    firstName,
    lastName,
    normalizedKey: key,
  });

  if (!result.ok) {
    return NextResponse.json({ error: result.error }, { status: 400 });
  }

  await setStudentCookie(key, firstName, lastName);
  return NextResponse.json({ ok: true });
}
