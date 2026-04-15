import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { hasGroupAuth, getStudent } from "@/lib/auth";
import { getGroupWithMembers, MAX_MEMBERS_PER_GROUP } from "@/lib/db";
import { JoinForm } from "./JoinForm";
import { ProjectEditor } from "./ProjectEditor";

export const dynamic = "force-dynamic";

export default async function GroupDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  if (!(await hasGroupAuth())) redirect("/groupes");

  const { id } = await params;
  const groupId = Number(id);
  if (!Number.isInteger(groupId) || groupId < 1 || groupId > 8) notFound();

  const group = getGroupWithMembers(groupId);
  if (!group) notFound();

  const student = await getStudent();
  const isMember = student
    ? group.members.some((m) => m.normalized_key === student.key)
    : false;
  const full = group.member_count >= MAX_MEMBERS_PER_GROUP;

  return (
    <article className="px-6 sm:px-10 pt-10 pb-12">
      <Link href="/groupes" className="retour-link">
        ← Retour aux groupes
      </Link>

      <div className="mt-6 mb-4 flex items-baseline justify-between gap-4 flex-wrap">
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(3rem, 8vw, 4.5rem)",
            color: "#F97316",
            letterSpacing: "0.02em",
            lineHeight: "1",
          }}
        >
          G{group.id}
        </span>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#8C8680",
          }}
        >
          {group.member_count}/{MAX_MEMBERS_PER_GROUP} membres
        </span>
      </div>

      <h1
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(1.8rem, 4.5vw, 2.5rem)",
          lineHeight: "1.1",
          color: "#1A1714",
          marginBottom: "2rem",
          letterSpacing: "0.005em",
        }}
      >
        {group.team_name || group.project_name || `Groupe ${group.id}`}
      </h1>

      <section style={{ marginBottom: "2.5rem" }}>
        <h2 className="eyebrow mb-4">Membres</h2>
        {group.members.length === 0 ? (
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontStyle: "italic",
              color: "#8C8680",
            }}
          >
            Personne n&apos;a encore rejoint ce groupe.
          </p>
        ) : (
          <ul
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.5rem",
              listStyle: "none",
              padding: 0,
            }}
          >
            {group.members.map((m) => (
              <li
                key={m.id}
                className="pill"
                style={{
                  borderColor:
                    student?.key === m.normalized_key
                      ? "rgba(249, 115, 22, 0.5)"
                      : undefined,
                  color:
                    student?.key === m.normalized_key ? "#F97316" : "#1A1714",
                  textTransform: "none",
                  letterSpacing: "0.02em",
                  fontSize: "12px",
                }}
              >
                {m.first_name} {m.last_name}
                {student?.key === m.normalized_key ? " · toi" : ""}
              </li>
            ))}
          </ul>
        )}
      </section>

      {!isMember && (
        <JoinForm groupId={group.id} full={full} hasStudent={!!student} />
      )}

      {isMember && <ProjectEditor group={group} />}
    </article>
  );
}
