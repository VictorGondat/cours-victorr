import { NextResponse } from "next/server";
import { hasAdminAuth } from "@/lib/auth";
import { listGroupsWithMembers } from "@/lib/db";

export async function GET() {
  if (!(await hasAdminAuth())) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }
  return NextResponse.json({
    exported_at: new Date().toISOString(),
    groups: listGroupsWithMembers(),
  });
}
