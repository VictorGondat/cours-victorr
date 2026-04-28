import Link from "next/link";

const jours = [
  {
    num: "J1",
    date: "15 avril 2026",
    duree: "7h",
    titre: "Théorie & cadrage",
    desc: "Comprendre l'IA, Claude Code, l'anatomie d'une app, Git. Former les groupes, choisir un micro-problème, poser les bases.",
    href: "/theorie",
    linkLabel: "Lire le cours théorique",
  },
  {
    num: "J2",
    date: "29 avril 2026",
    duree: "7h",
    titre: "Build",
    desc: "Setup complet, wireframes, design system, développement guidé avec Claude Code, premier déploiement sur Vercel.",
    href: "/j2",
    linkLabel: "Ouvrir le guide",
  },
  {
    num: "J3",
    date: "6 mai 2026",
    duree: "3h",
    titre: "Tests utilisateurs & itération",
    desc: "Méthodo de test, session avec de vrais utilisateurs, débrief, priorisation des retours, itération.",
    href: "/brief#j3",
    linkLabel: "Détails du planning",
  },
  {
    num: "J4",
    date: "20 mai 2026",
    duree: "4h",
    titre: "Finalisation & démos",
    desc: "Dernières corrections, polish. Démos en classe, notation selon le barème, débrief collectif.",
    href: "/brief#j4",
    linkLabel: "Détails du planning",
  },
];

export default function Home() {
  return (
    <article className="px-6 sm:px-10 pt-10 pb-6">
      <div className="mb-6">
        <span className="pill accent">Ynov &middot; 2026 &middot; 21h de cours</span>
      </div>

      <h1
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(2.5rem, 6vw, 3.75rem)",
          lineHeight: "1.05",
          letterSpacing: "0.005em",
          color: "#1A1714",
          marginBottom: "1.25rem",
        }}
      >
        PROTOTYPER UNE APP
        <br />
        <span style={{ color: "#F97316" }}>AVEC L'IA.</span>
      </h1>

      <p
        style={{
          fontFamily: "var(--font-body)",
          fontStyle: "italic",
          fontSize: "1.2rem",
          lineHeight: "1.6",
          color: "#4B4540",
          maxWidth: "640px",
          marginBottom: "2rem",
        }}
      >
        Quatre journées pour passer d'une idée à une application en ligne,
        testée par de vrais utilisateurs. Sans avoir jamais codé avant.
      </p>

      <div
        className="cours-prose"
        style={{ fontSize: "1.05rem", marginBottom: "2.5rem" }}
      >
        <p>
          Ce cours part d'un postulat simple : en 2026, n'importe qui peut
          construire une application fonctionnelle si l'outil avec lequel il
          travaille comprend ce qu'il veut faire. C'est ce que fait Claude Code.
          Il ne remplace pas le cerveau, il remplace la barrière technique. Ce
          qu'il reste à faire, et c'est ce qu'on va apprendre ensemble, c'est
          choisir un vrai problème, le comprendre, le découper, savoir quoi
          demander, savoir quoi garder, savoir quoi jeter.
        </p>
        <p>
          Le projet est le même pour tous, par groupe de 4 max :{" "}
          <strong>Campus Helper</strong>. Chaque groupe identifie un
          micro-problème de la vie étudiante à Ynov et livre une webapp
          déployée en ligne, testable directement par d'autres étudiants de
          l'école.
        </p>
      </div>

      <section className="mb-10">
        <h2 className="eyebrow mb-6">Les 4 journées</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {jours.map((j) => (
            <Link
              key={j.num}
              href={j.href}
              className="jour-card group block"
              style={{ textDecoration: "none" }}
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
                  {j.num}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "10px",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "#8C8680",
                  }}
                >
                  {j.date} &middot; {j.duree}
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
                {j.titre}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.98rem",
                  lineHeight: "1.55",
                  fontStyle: "italic",
                  color: "#4B4540",
                  marginBottom: "1rem",
                }}
              >
                {j.desc}
              </p>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "10px",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#8C8680",
                }}
              >
                {j.linkLabel} &rarr;
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="eyebrow mb-5">Démarrer tout de suite</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link
            href="/theorie"
            className="block p-5"
            style={{
              background: "#FAF7F1",
              border: "1px solid rgba(0,0,0,0.06)",
              textDecoration: "none",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#F97316",
                marginBottom: "0.5rem",
              }}
            >
              01 — Cours
            </div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.1rem",
                color: "#1A1714",
              }}
            >
              Le cours théorique
            </div>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontStyle: "italic",
                fontSize: "0.9rem",
                color: "#8C8680",
                marginTop: "0.5rem",
                lineHeight: "1.5",
              }}
            >
              IA, LLM, Claude Code, anatomie d'une app, Git, vibe coding.
            </p>
          </Link>
          <Link
            href="/brief"
            className="block p-5"
            style={{
              background: "#FAF7F1",
              border: "1px solid rgba(0,0,0,0.06)",
              textDecoration: "none",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#F97316",
                marginBottom: "0.5rem",
              }}
            >
              02 — Projet
            </div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.1rem",
                color: "#1A1714",
              }}
            >
              Brief Campus Helper
            </div>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontStyle: "italic",
                fontSize: "0.9rem",
                color: "#8C8680",
                marginTop: "0.5rem",
                lineHeight: "1.5",
              }}
            >
              Le projet, les contraintes, le planning détaillé, le barème.
            </p>
          </Link>
          <Link
            href="/ressources"
            className="block p-5"
            style={{
              background: "#FAF7F1",
              border: "1px solid rgba(0,0,0,0.06)",
              textDecoration: "none",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#F97316",
                marginBottom: "0.5rem",
              }}
            >
              03 — Setup
            </div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.1rem",
                color: "#1A1714",
              }}
            >
              Installation & comptes
            </div>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontStyle: "italic",
                fontSize: "0.9rem",
                color: "#8C8680",
                marginTop: "0.5rem",
                lineHeight: "1.5",
              }}
            >
              Claude Code, GitHub, Vercel, Mac & Windows, plan A et plan B.
            </p>
          </Link>
        </div>
      </section>

      <div
        className="callout"
        style={{ marginTop: "3rem", marginBottom: "1rem" }}
      >
        <span className="callout-label">Note</span>
        <p>
          Ce site est vivant. Il est mis à jour à chaque journée de cours.
          Entre deux sessions, reviens y chercher le support de la journée
          suivante, les liens utiles, les corrections d'exercice et les
          ressources complémentaires.
        </p>
      </div>
    </article>
  );
}
