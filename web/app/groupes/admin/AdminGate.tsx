"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function AdminGate() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const res = await fetch("/api/admin/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    if (!res.ok) {
      const j = await res.json().catch(() => ({}));
      setError(j.error ?? "Erreur");
      setLoading(false);
      return;
    }
    router.refresh();
  }

  return (
    <article className="px-6 sm:px-10 pt-10 pb-12">
      <div className="mb-6">
        <span className="pill accent">Admin</span>
      </div>

      <h1
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(2rem, 5vw, 3rem)",
          lineHeight: "1.05",
          color: "#1A1714",
          marginBottom: "1rem",
        }}
      >
        ACCÈS PROF<span style={{ color: "#F97316" }}>.</span>
      </h1>

      <p
        style={{
          fontFamily: "var(--font-body)",
          fontStyle: "italic",
          fontSize: "1.1rem",
          color: "#4B4540",
          marginBottom: "2rem",
          maxWidth: "560px",
        }}
      >
        Espace réservé à Victor pour suivre les projets et noter.
      </p>

      <form
        onSubmit={onSubmit}
        style={{
          background: "#FAF7F1",
          border: "1px solid rgba(0,0,0,0.06)",
          padding: "1.75rem",
          maxWidth: "440px",
        }}
      >
        <label
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "10px",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#F97316",
            display: "block",
            marginBottom: "0.6rem",
          }}
        >
          Mot de passe admin
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoFocus
          style={{
            width: "100%",
            fontFamily: "var(--font-body)",
            fontSize: "1.1rem",
            padding: "0.75rem 0.9rem",
            background: "#FFFFFF",
            border: "1px solid rgba(0,0,0,0.12)",
            borderRadius: "4px",
            color: "#1A1714",
            outline: "none",
          }}
        />
        {error && (
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              color: "#F97316",
              marginTop: "0.6rem",
              letterSpacing: "0.04em",
            }}
          >
            {error}
          </p>
        )}
        <button
          type="submit"
          disabled={loading}
          style={{
            marginTop: "1.1rem",
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
          }}
        >
          {loading ? "Vérif…" : "Entrer →"}
        </button>
      </form>
    </article>
  );
}
