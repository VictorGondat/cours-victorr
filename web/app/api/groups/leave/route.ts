import { NextResponse } from "next/server";
import { clearStudentCookie, getStudent, hasGroupAuth } from "@/lib/auth";
import { leaveGroup } from "@/lib/db";

export async function POST() {
  if (!(await hasGroupAuth())) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }
  const s = await getStudent();
  if (s) leaveGroup(s.key);
  await clearStudentCookie();
  return NextResponse.json({ ok: true });
}
