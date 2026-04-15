import Link from "next/link";
import { hasAdminAuth } from "@/lib/auth";
import { listGroupsWithMembers, MAX_MEMBERS_PER_GROUP } from "@/lib/db";
import { AdminGate } from "./AdminGate";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  if (!(await hasAdminAuth())) return <AdminGate />;

  const groups = listGroupsWithMembers();
  const totalMembers = groups.reduce((sum, g) => sum + g.member_count, 0);
  const filledGroups = groups.filter((g) => g.member_count > 0).length;

  return (
    <article className="px-6 sm:px-10 pt-10 pb-12">
      <Link href="/groupes" className="retour-link">
        ← Retour aux groupes
      </Link>

      <div className="mt-6 mb-6 flex items-baseline justify-between flex-wrap gap-3">
        <span className="pill accent">Admin &middot; Vue prof</span>
        <a
          href="/api/admin/export"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "10px",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#8C8680",
            textDecoration: "underline",
            textUnderlineOffset: "3px",
          }}
        >
          Export JSON →
        </a>
      </div>

      <h1
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(2.2rem, 5.5vw, 3.25rem)",
          lineHeight: "1.05",
          color: "#1A1714",
          marginBottom: "0.75rem",
        }}
      >
        SUIVI DES GROUPES<span style={{ color: "#F97316" }}>.</span>
      </h1>

      <p
        style={{
          fontFamily: "var(--font-body)",
          fontStyle: "italic",
          fontSize: "1.1rem",
          color: "#4B4540",
          marginBottom: "2rem",
        }}
      >
        {totalMembers} étudiant{totalMembers > 1 ? "s" : ""} inscrit
        {totalMembers > 1 ? "s" : ""} · {filledGroups}/8 groupes actifs
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        {groups.map((g) => (
          <div
            key={g.id}
            style={{
              background: "#FFFFFF",
              border: "1px solid rgba(0,0,0,0.08)",
              borderLeft: "3px solid #F97316",
              padding: "1.5rem 1.75rem",
            }}
          >
            <div className="flex items-baseline justify-between mb-3 flex-wrap gap-2">
              <div style={{ display: "flex", alignItems: "baseline", gap: "1rem" }}>
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "2rem",
                    color: "#F97316",
                  }}
                >
                  G{g.id}
                </span>
                <h2
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.35rem",
                    color: "#1A1714",
                  }}
                >
                  {g.team_name || g.project_name || "(sans nom)"}
                </h2>
              </div>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "10px",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#8C8680",
                }}
              >
                {g.member_count}/{MAX_MEMBERS_PER_GROUP}
              </span>
            </div>

            <dl
              style={{
                display: "grid",
                gridTemplateColumns: "auto 1fr",
                gap: "0.35rem 1rem",
                fontFamily: "var(--font-body)",
                fontSize: "0.95rem",
                lineHeight: "1.55",
                marginTop: "0.75rem",
              }}
            >
              <AdminRow label="Membres">
                {g.members.length === 0 ? (
                  <em style={{ color: "#8C8680" }}>aucun</em>
                ) : (
                  g.members
                    .map((m) => `${m.first_name} ${m.last_name}`)
                    .join(" · ")
                )}
              </AdminRow>
              <AdminRow label="Projet">
                {g.project_name || <em style={{ color: "#8C8680" }}>—</em>}
              </AdminRow>
              <AdminRow label="Description">
                {g.description || <em style={{ color: "#8C8680" }}>—</em>}
              </AdminRow>
              <AdminRow label="Utilisateur">
                {g.target_user || <em style={{ color: "#8C8680" }}>—</em>}
              </AdminRow>
              <AdminRow label="Problème">
                {g.problem || <em style={{ color: "#8C8680" }}>—</em>}
              </AdminRow>
              <AdminRow label="App">
                {g.app_url ? (
                  <a
                    href={g.app_url}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      color: "#F97316",
                      textDecoration: "underline",
                      textUnderlineOffset: "3px",
                    }}
                  >
                    {g.app_url}
                  </a>
                ) : (
                  <em style={{ color: "#8C8680" }}>—</em>
                )}
              </AdminRow>
              <AdminRow label="Repo">
                {g.repo_url ? (
                  <a
                    href={g.repo_url}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      color: "#F97316",
                      textDecoration: "underline",
                      textUnderlineOffset: "3px",
                    }}
                  >
                    {g.repo_url}
                  </a>
                ) : (
                  <em style={{ color: "#8C8680" }}>—</em>
                )}
              </AdminRow>
              {g.updated_at && (
                <AdminRow label="MAJ">
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "10px",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "#8C8680",
                    }}
                  >
                    {new Date(g.updated_at).toLocaleString("fr-FR")}
                  </span>
                </AdminRow>
              )}
            </dl>
          </div>
        ))}
      </div>
    </article>
  );
}

function AdminRow({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <dt
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "10px",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "#8C8680",
          whiteSpace: "nowrap",
          paddingTop: "0.15rem",
        }}
      >
        {label}
      </dt>
      <dd style={{ margin: 0, color: "#1A1714", whiteSpace: "pre-wrap" }}>
        {children}
      </dd>
    </>
  );
}
