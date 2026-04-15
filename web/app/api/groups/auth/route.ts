import { NextResponse } from "next/server";
import { checkGroupPassword, setGroupAuth } from "@/lib/auth";

export async function POST(req: Request) {
  const { password } = (await req.json().catch(() => ({}))) as {
    password?: string;
  };
  if (typeof password !== "string" || !checkGroupPassword(password)) {
    return NextResponse.json(
      { error: "Mot de passe incorrect" },
      { status: 401 },
    );
  }
  await setGroupAuth();
  return NextResponse.json({ ok: true });
}
