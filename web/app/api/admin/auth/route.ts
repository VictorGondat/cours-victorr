import { NextResponse } from "next/server";
import { checkAdminPassword, setAdminAuth } from "@/lib/auth";

export async function POST(req: Request) {
  const { password } = (await req.json().catch(() => ({}))) as {
    password?: string;
  };
  if (typeof password !== "string" || !checkAdminPassword(password)) {
    return NextResponse.json(
      { error: "Mot de passe admin incorrect" },
      { status: 401 },
    );
  }
  await setAdminAuth();
  return NextResponse.json({ ok: true });
}
