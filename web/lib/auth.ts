import { createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

const GROUP_COOKIE = "cours_auth";
const STUDENT_COOKIE = "cours_student";
const ADMIN_COOKIE = "cours_admin";

const COOKIE_MAX_AGE = 60 * 60 * 24 * 60;

function getSecret(): string {
  return (
    process.env.COURS_COOKIE_SECRET ??
    "dev-secret-change-me-in-prod-xxxxxxxxxxxxxx"
  );
}

function sign(value: string): string {
  return createHmac("sha256", getSecret()).update(value).digest("hex");
}

function pack(value: string): string {
  return `${value}.${sign(value)}`;
}

function unpack(raw: string | undefined): string | null {
  if (!raw) return null;
  const idx = raw.lastIndexOf(".");
  if (idx === -1) return null;
  const value = raw.slice(0, idx);
  const sig = raw.slice(idx + 1);
  const expected = sign(value);
  if (sig.length !== expected.length) return null;
  try {
    if (!timingSafeEqual(Buffer.from(sig), Buffer.from(expected))) return null;
  } catch {
    return null;
  }
  return value;
}

export function normalizeName(firstName: string, lastName: string): string {
  const clean = (s: string) =>
    s
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, " ")
      .trim()
      .replace(/\s+/g, "-");
  return `${clean(firstName)}-${clean(lastName)}`;
}

export function displayName(firstName: string, lastName: string): string {
  const cap = (s: string) =>
    s
      .trim()
      .split(/\s+/)
      .map((w) => (w ? w[0].toUpperCase() + w.slice(1).toLowerCase() : ""))
      .join(" ");
  return `${cap(firstName)} ${cap(lastName)}`;
}

const baseCookieOptions = {
  httpOnly: true,
  sameSite: "lax" as const,
  path: "/",
  maxAge: COOKIE_MAX_AGE,
  secure: process.env.NODE_ENV === "production",
};

export async function setGroupAuth(): Promise<void> {
  const c = await cookies();
  c.set(GROUP_COOKIE, pack("ok"), baseCookieOptions);
}

export async function hasGroupAuth(): Promise<boolean> {
  const c = await cookies();
  return unpack(c.get(GROUP_COOKIE)?.value) === "ok";
}

export async function setStudentCookie(
  key: string,
  first: string,
  last: string,
): Promise<void> {
  const c = await cookies();
  const payload = JSON.stringify({ k: key, f: first, l: last });
  c.set(STUDENT_COOKIE, pack(payload), baseCookieOptions);
}

export type StudentSession = { key: string; firstName: string; lastName: string };

export async function getStudent(): Promise<StudentSession | null> {
  const c = await cookies();
  const raw = unpack(c.get(STUDENT_COOKIE)?.value);
  if (!raw) return null;
  try {
    const p = JSON.parse(raw) as { k: string; f: string; l: string };
    return { key: p.k, firstName: p.f, lastName: p.l };
  } catch {
    return null;
  }
}

export async function clearStudentCookie(): Promise<void> {
  const c = await cookies();
  c.delete(STUDENT_COOKIE);
}

export async function setAdminAuth(): Promise<void> {
  const c = await cookies();
  c.set(ADMIN_COOKIE, pack("ok"), baseCookieOptions);
}

export async function hasAdminAuth(): Promise<boolean> {
  const c = await cookies();
  return unpack(c.get(ADMIN_COOKIE)?.value) === "ok";
}

export function checkGroupPassword(input: string): boolean {
  const expected = process.env.COURS_GROUP_PASSWORD ?? "ynov123";
  if (input.length !== expected.length) return false;
  try {
    return timingSafeEqual(Buffer.from(input), Buffer.from(expected));
  } catch {
    return false;
  }
}

export function checkAdminPassword(input: string): boolean {
  const expected = process.env.COURS_ADMIN_PASSWORD;
  if (!expected) return false;
  if (input.length !== expected.length) return false;
  try {
    return timingSafeEqual(Buffer.from(input), Buffer.from(expected));
  } catch {
    return false;
  }
}
