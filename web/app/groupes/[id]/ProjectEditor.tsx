"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import type { GroupWithMembers } from "@/lib/db";

type TextKey =
  | "team_name"
  | "project_name"
  | "description"
  | "app_url"
  | "repo_url"
  | "target_user"
  | "problem"
  | "notes"
  | "llm_other_name";

type Field = {
  key: TextKey;
  label: string;
  placeholder: string;
  multiline?: boolean;
};

const FIELDS: Field[] = [
  {
    key: "team_name",
    label: "Nom de l'équipe",
    placeholder: "Les Croissants, Team Machin…",
  },
  {
    key: "project_name",
    label: "Nom du projet",
    placeholder: "Campus Helper, LostFound, etc.",
  },
  {
    key: "description",
    label: "Description",
    placeholder: "En deux phrases, qu'est-ce que fait votre app ?",
    multiline: true,
  },
  {
    key: "target_user",
    label: "Utilisateur cible",
    placeholder: "Qui va l'utiliser concrètement ?",
    multiline: true,
  },
  {
    key: "problem",
    label: "Problème résolu",
    placeholder: "Quel vrai problème vous résolvez ?",
    multiline: true,
  },
  {
    key: "app_url",
    label: "Lien de l'app (déploiement)",
    placeholder: "https://…",
  },
  {
    key: "repo_url",
    label: "Lien du repo",
    placeholder: "https://github.com/…",
  },
];

const LLM_OPTIONS: Array<{ key: string; label: string }> = [
  { key: "claude-code", label: "Claude Code" },
  { key: "codex", label: "Codex (OpenAI)" },
  { key: "other", label: "Autre" },
];

function parseLlmList(raw: string): Set<string> {
  return new Set(
    raw
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean),
  );
}

export function ProjectEditor({ group }: { group: GroupWithMembers }) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const [state, setState] = useState(() => ({
    team_name: group.team_name,
    project_name: group.project_name,
    description: group.description,
    target_user: group.target_user,
    problem: group.problem,
    app_url: group.app_url,
    repo_url: group.repo_url,
    vercel_ready: Boolean(group.vercel_ready),
    github_ready: Boolean(group.github_ready),
    llm_used: group.llm_used,
    llm_other_name: group.llm_other_name,
    notes: group.notes,
  }));
  const [savedAt, setSavedAt] = useState<string | null>(group.updated_at);
  const [error, setError] = useState<string | null>(null);
  const [leaving, setLeaving] = useState(false);

  const llmSet = parseLlmList(state.llm_used);

  function onText(k: TextKey, v: string) {
    setState((s) => ({ ...s, [k]: v }));
  }

  function onBool(k: "vercel_ready" | "github_ready", v: boolean) {
    setState((s) => ({ ...s, [k]: v }));
  }

  function onLlmToggle(key: string) {
    const next = new Set(llmSet);
    if (next.has(key)) next.delete(key);
    else next.add(key);
    setState((s) => ({ ...s, llm_used: Array.from(next).join(",") }));
  }

  async function onSave(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    const res = await fetch(`/api/groups/${group.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(state),
    });
    if (!res.ok) {
      const j = await res.json().catch(() => ({}));
      setError(j.error ?? "Erreur");
      return;
    }
    setSavedAt(new Date().toISOString());
    startTransition(() => router.refresh());
  }

  async function onLeave() {
    if (!confirm("Quitter ce groupe ? Tu pourras en rejoindre un autre ensuite.")) return;
    setLeaving(true);
    await fetch("/api/groups/leave", { method: "POST" });
    startTransition(() => router.refresh());
  }

  return (
    <section style={{ marginBottom: "2rem" }}>
      <h2 className="eyebrow mb-4">Infos du projet</h2>

      <p
        style={{
          fontFamily: "var(--font-body)",
          fontStyle: "italic",
          fontSize: "1rem",
          color: "#4B4540",
          marginBottom: "1.5rem",
        }}
      >
        Tout le monde du groupe peut éditer ces infos. Pense à sauvegarder.
      </p>

      <form
        onSubmit={onSave}
        style={{
          background: "#FAF7F1",
          border: "1px solid rgba(0,0,0,0.06)",
          padding: "1.75rem",
          display: "flex",
          flexDirection: "column",
          gap: "1.1rem",
        }}
      >
        {FIELDS.map((f) => (
          <div key={f.key}>
            <label style={labelStyle}>{f.label}</label>
            {f.multiline ? (
              <textarea
                value={state[f.key]}
                onChange={(e) => onText(f.key, e.target.value)}
                placeholder={f.placeholder}
                rows={3}
                style={{ ...inputStyle, resize: "vertical", minHeight: "80px" }}
              />
            ) : (
              <input
                type={f.key.endsWith("_url") ? "url" : "text"}
                value={state[f.key]}
                onChange={(e) => onText(f.key, e.target.value)}
                placeholder={f.placeholder}
                style={inputStyle}
              />
            )}
          </div>
        ))}

        <div
          style={{
            borderTop: "1px dashed rgba(0,0,0,0.12)",
            margin: "0.5rem 0",
            paddingTop: "1.25rem",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#F97316",
              marginBottom: "0.35rem",
            }}
          >
            Setup &amp; suivi
          </div>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontStyle: "italic",
              fontSize: "0.95rem",
              color: "#8C8680",
              marginBottom: "1rem",
            }}
          >
            Checklist technique + contexte que Victor voit depuis son dashboard.
          </p>
        </div>

        <div>
          <label style={labelStyle}>Checklist</label>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.55rem" }}>
            <Checkbox
              checked={state.github_ready}
              onChange={(v) => onBool("github_ready", v)}
              label="Compte GitHub créé"
            />
            <Checkbox
              checked={state.vercel_ready}
              onChange={(v) => onBool("vercel_ready", v)}
              label="Compte Vercel créé"
            />
          </div>
        </div>

        <div>
          <label style={labelStyle}>Outils IA utilisés</label>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.55rem 1.25rem" }}>
            {LLM_OPTIONS.map((opt) => (
              <Checkbox
                key={opt.key}
                checked={llmSet.has(opt.key)}
                onChange={() => onLlmToggle(opt.key)}
                label={opt.label}
              />
            ))}
          </div>
          {llmSet.has("other") && (
            <input
              value={state.llm_other_name}
              onChange={(e) => onText("llm_other_name", e.target.value)}
              placeholder="Précise lequel (Cursor, Gemini, v0…)"
              style={{ ...inputStyle, marginTop: "0.6rem" }}
            />
          )}
        </div>

        <div>
          <label style={labelStyle}>Commentaire / contexte pour Victor</label>
          <textarea
            value={state.notes}
            onChange={(e) => onText("notes", e.target.value)}
            placeholder="Ce que tu veux partager : difficultés, choix, avancée, besoins…"
            rows={4}
            style={{ ...inputStyle, resize: "vertical", minHeight: "100px" }}
          />
        </div>

        {error && (
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              color: "#F97316",
              letterSpacing: "0.04em",
            }}
          >
            {error}
          </p>
        )}

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          <button type="submit" disabled={pending} style={buttonStyle(pending)}>
            {pending ? "Enregistrement…" : "Enregistrer →"}
          </button>
          {savedAt && (
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#8C8680",
              }}
            >
              Dernière sauvegarde : {new Date(savedAt).toLocaleString("fr-FR")}
            </span>
          )}
        </div>
      </form>

      <div style={{ marginTop: "1.5rem" }}>
        <button
          type="button"
          onClick={onLeave}
          disabled={leaving}
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "10px",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#8C8680",
            background: "transparent",
            border: "1px solid rgba(0,0,0,0.12)",
            padding: "0.55rem 0.95rem",
            borderRadius: "4px",
            cursor: leaving ? "wait" : "pointer",
          }}
        >
          {leaving ? "En cours…" : "Quitter ce groupe"}
        </button>
      </div>
    </section>
  );
}

function Checkbox({
  checked,
  onChange,
  label,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  label: string;
}) {
  return (
    <label
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.55rem",
        cursor: "pointer",
        fontFamily: "var(--font-body)",
        fontSize: "1rem",
        color: "#1A1714",
      }}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        style={{
          width: "18px",
          height: "18px",
          accentColor: "#F97316",
          cursor: "pointer",
        }}
      />
      {label}
    </label>
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
  fontSize: "1.02rem",
  padding: "0.65rem 0.85rem",
  background: "#FFFFFF",
  border: "1px solid rgba(0,0,0,0.12)",
  borderRadius: "4px",
  color: "#1A1714",
  outline: "none",
};

const buttonStyle = (loading: boolean): React.CSSProperties => ({
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
