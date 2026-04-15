"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function JoinForm({
  groupId,
  full,
  hasStudent,
}: {
  groupId: number;
  full: boolean;
  hasStudent: boolean;
}) {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const res = await fetch(`/api/groups/${groupId}/join`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ firstName, lastName }),
    });
    const j = await res.json().catch(() => ({}));
    if (!res.ok) {
      setError(j.error ?? "Erreur");
      setLoading(false);
      return;
    }
    router.refresh();
  }

  return (
    <section style={{ marginBottom: "2.5rem" }}>
      <h2 className="eyebrow mb-4">Rejoindre ce groupe</h2>

      {full ? (
        <div
          className="callout"
          style={{ marginTop: 0 }}
        >
          <span className="callout-label">Complet</span>
          <p>
            Ce groupe a déjà 6 membres. Retourne à la liste et choisis-en
            un autre.
          </p>
        </div>
      ) : (
        <form
          onSubmit={onSubmit}
          style={{
            background: "#FAF7F1",
            border: "1px solid rgba(0,0,0,0.06)",
            padding: "1.75rem",
          }}
        >
          {hasStudent && (
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontStyle: "italic",
                fontSize: "0.95rem",
                color: "#4B4540",
                marginBottom: "1rem",
              }}
            >
              Tu vas quitter ton groupe actuel et rejoindre celui-ci.
            </p>
          )}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "0.9rem",
            }}
          >
            <div>
              <label style={labelStyle}>Prénom</label>
              <input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                style={inputStyle}
              />
            </div>
            <div>
              <label style={labelStyle}>Nom</label>
              <input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                style={inputStyle}
              />
            </div>
          </div>

          {error && (
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                color: "#F97316",
                marginTop: "0.8rem",
                letterSpacing: "0.04em",
              }}
            >
              {error}
            </p>
          )}

          <button type="submit" disabled={loading} style={buttonStyle(loading)}>
            {loading ? "En cours…" : "Rejoindre le groupe →"}
          </button>
        </form>
      )}
    </section>
  );
}

const labelStyle: React.CSSProperties = {
  fontFamily: "var(--font-mono)",
  fontSize: "10px",
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  color: "#F97316",
  display: "block",
  marginBottom: "0.45rem",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  fontFamily: "var(--font-body)",
  fontSize: "1.05rem",
  padding: "0.65rem 0.85rem",
  background: "#FFFFFF",
  border: "1px solid rgba(0,0,0,0.12)",
  borderRadius: "4px",
  color: "#1A1714",
  outline: "none",
};

const buttonStyle = (loading: boolean): React.CSSProperties => ({
  marginTop: "1.2rem",
  fontFamily: "var(--font-mono)",
  fontSize: "11px",
  letterSpacing: "0.14em",
  textTransform: "uppercase",
  padding: "0.8rem 1.4rem",
  background: "#1A1714",
  color: "#EAE5DC",
  border: "none",
  borderRadius: "4px",
  cursor: loading ? "wait" : "pointer",
  opacity: loading ? 0.6 : 1,
});
