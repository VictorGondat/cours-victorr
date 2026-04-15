import Link from "next/link";
import { hasGroupAuth, getStudent } from "@/lib/auth";
import { listGroupsWithMembers, MAX_MEMBERS_PER_GROUP } from "@/lib/db";
import { GroupAuthGate } from "./GroupAuthGate";

export const dynamic = "force-dynamic";

export default async function GroupesPage() {
  const authed = await hasGroupAuth();
  if (!authed) return <GroupAuthGate />;

  const groups = listGroupsWithMembers();
  const student = await getStudent();
  const myGroupId = student
    ? groups.find((g) => g.members.some((m) => m.normalized_key === student.key))
        ?.id ?? null
    : null;

  return (
    <article className="px-6 sm:px-10 pt-10 pb-12">
      <div className="mb-6">
        <span className="pill accent">Ynov &middot; 2026 &middot; Suivi groupes</span>
      </div>

      <h1
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(2.2rem, 5.5vw, 3.25rem)",
          lineHeight: "1.05",
          color: "#1A1714",
          marginBottom: "1rem",
        }}
      >
        LES 8 GROUPES<span style={{ color: "#F97316" }}>.</span>
      </h1>

      <p
        style={{
          fontFamily: "var(--font-body)",
          fontStyle: "italic",
          fontSize: "1.15rem",
          lineHeight: "1.6",
          color: "#4B4540",
          maxWidth: "640px",
          marginBottom: "2.5rem",
        }}
      >
        Mettez-vous d&apos;accord à l&apos;oral sur le numéro de groupe,
        cliquez, rejoignez. Maximum {MAX_MEMBERS_PER_GROUP} par groupe.
      </p>

      {student && (
        <div
          className="callout"
          style={{ marginTop: "0", marginBottom: "2rem" }}
        >
          <span className="callout-label">Salut {student.firstName}</span>
          <p>
            {myGroupId
              ? `Tu es dans le Groupe ${myGroupId}. Clique dessus pour voir ou éditer les infos du projet.`
              : "Tu n'es dans aucun groupe pour l'instant — clique sur l'un des 8 ci-dessous pour rejoindre."}
          </p>
        </div>
      )}

      <section>
        <h2 className="eyebrow mb-6">Choisissez votre groupe</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {groups.map((g) => {
            const full = g.member_count >= MAX_MEMBERS_PER_GROUP;
            const mine = g.id === myGroupId;
            return (
              <Link
                key={g.id}
                href={`/groupes/${g.id}`}
                className="jour-card group block"
                style={{
                  textDecoration: "none",
                  borderColor: mine ? "#F97316" : undefined,
                }}
              >
                <div className="flex items-baseline justify-between mb-3">
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "2rem",
                      color: "#F97316",
                      letterSpacing: "0.02em",
                    }}
                  >
                    G{g.id}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "10px",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: full ? "#F97316" : "#8C8680",
                    }}
                  >
                    {g.member_count}/{MAX_MEMBERS_PER_GROUP}{" "}
                    {full ? "· complet" : ""}
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.35rem",
                    color: "#1A1714",
                    marginBottom: "0.5rem",
                    letterSpacing: "0.01em",
                  }}
                >
                  {g.team_name || g.project_name || `Groupe ${g.id}`}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.95rem",
                    lineHeight: "1.55",
                    fontStyle: "italic",
                    color: "#4B4540",
                    marginBottom: "1rem",
                    minHeight: "2.6em",
                  }}
                >
                  {g.description
                    ? g.description.slice(0, 140) +
                      (g.description.length > 140 ? "…" : "")
                    : "Pas encore de description — à compléter par les membres du groupe."}
                </p>
                {g.members.length > 0 ? (
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "10px",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "#8C8680",
                      lineHeight: "1.6",
                    }}
                  >
                    {g.members
                      .map((m) => `${m.first_name} ${m.last_name}`)
                      .join(" · ")}
                  </div>
                ) : (
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "10px",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "#8C8680",
                    }}
                  >
                    Personne encore &rarr;
                  </span>
                )}
              </Link>
            );
          })}
        </div>
      </section>
    </article>
  );
}
