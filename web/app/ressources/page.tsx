import Link from "next/link";

export const metadata = {
  title: "Ressources — Cours YNOV",
  description:
    "Installation de Claude Code, comptes à créer, plan A et plan B pour les abonnements, setup Mac et Windows, liens utiles.",
};

export default function RessourcesPage() {
  return (
    <article className="px-6 sm:px-10 pt-10 pb-6">
      <Link href="/" className="retour-link">
        &larr; Retour
      </Link>

      <div className="mt-8 mb-4">
        <span className="pill accent">Setup &middot; Outils &middot; Plan A/B</span>
      </div>

      <h1
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(2.25rem, 5.5vw, 3.25rem)",
          lineHeight: "1.05",
          color: "#1A1714",
          marginBottom: "1rem",
        }}
      >
        LES RESSOURCES.
      </h1>
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontStyle: "italic",
          fontSize: "1.15rem",
          lineHeight: "1.6",
          color: "#4B4540",
          maxWidth: "640px",
          marginBottom: "2rem",
        }}
      >
        Tout ce qu'il faut installer et créer comme compte avant J2. Deux
        plans au choix selon le budget.
      </p>

      <div className="cours-prose">
        <section>
          <h2>Plan A ou plan B ?</h2>
          <p>
            Claude Code est, à ce jour, l'outil le plus abouti pour travailler
            avec une IA directement dans son projet. C'est celui qu'on
            recommande, et c'est celui sur lequel le cours est construit. Mais
            il est payant. Deux scénarios possibles selon votre budget :
          </p>

          <div className="grid sm:grid-cols-2 gap-4 my-6">
            <div
              className="p-5"
              style={{
                background: "#FAF7F1",
                border: "1px solid rgba(249, 115, 22, 0.35)",
                borderRadius: "2px",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "10px",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "#F97316",
                  marginBottom: "0.5rem",
                }}
              >
                Plan A &middot; recommandé
              </div>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.4rem",
                  letterSpacing: "0.01em",
                  color: "#1A1714",
                  marginBottom: "0.75rem",
                }}
              >
                CLAUDE CODE PAYANT
              </div>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.95rem",
                  color: "#4B4540",
                  lineHeight: "1.55",
                  fontStyle: "italic",
                }}
              >
                Au moins un Claude Pro (17€/mois) par groupe. Idéalement deux
                ou trois pour faire vraiment du pair programming. Résiliable
                au bout d'un mois, coût total pour le cours : environ 20€ par
                personne. C'est ce qui donne la meilleure expérience et ce
                qu'on utilisera en classe.
              </p>
            </div>

            <div
              className="p-5"
              style={{
                background: "#FFFFFF",
                border: "1px solid rgba(0,0,0,0.1)",
                borderRadius: "2px",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "10px",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "#8C8680",
                  marginBottom: "0.5rem",
                }}
              >
                Plan B &middot; tout gratuit
              </div>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.4rem",
                  letterSpacing: "0.01em",
                  color: "#1A1714",
                  marginBottom: "0.75rem",
                }}
              >
                ALTERNATIVES GRATUITES
              </div>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.95rem",
                  color: "#4B4540",
                  lineHeight: "1.55",
                  fontStyle: "italic",
                }}
              >
                Cursor free tier + GitHub Copilot gratuit pour les étudiants +
                Claude.ai version gratuite + ChatGPT free. Permet de livrer
                un projet, mais l'expérience est plus fragmentée : on alterne
                entre les outils selon la tâche.
              </p>
            </div>
          </div>

          <div className="callout">
            <span className="callout-label">Décision</span>
            <p>
              On tranchera en classe à la fin de J1. Chaque groupe décide en
              fonction de son budget. Les deux plans sont viables pour
              atteindre les livrables du cours.
            </p>
          </div>
        </section>

        {/* ── PLAN A DETAILS ── */}
        <section>
          <h2>Plan A — Claude Code payant</h2>

          <h3>Les comptes à créer</h3>
          <ol>
            <li>
              <strong>Compte Anthropic avec Claude Pro</strong> —{" "}
              <a href="https://claude.ai">claude.ai</a> → s'inscrire → passer
              au plan Pro (17€/mois). Au moins un par groupe. Idéalement 2 ou
              3 pour que plusieurs membres puissent coder en parallèle.
            </li>
            <li>
              <strong>Compte GitHub</strong> —{" "}
              <a href="https://github.com">github.com</a> → s'inscrire.
              Gratuit. Tous les membres du groupe doivent en avoir un.
            </li>
            <li>
              <strong>Compte Vercel</strong> —{" "}
              <a href="https://vercel.com">vercel.com</a> → s'inscrire avec
              le compte GitHub. Gratuit. Une seule personne par groupe peut
              créer le compte, les autres seront invités sur le projet.
            </li>
          </ol>

          <h3>Installation de Claude Code — macOS</h3>
          <p>
            Claude Code s'installe en une commande dans le terminal. Ouvre
            l'application <strong>Terminal</strong> (⌘ + espace → "Terminal")
            et colle :
          </p>
          <pre><code>{`curl -fsSL https://claude.ai/install.sh | bash`}</code></pre>
          <p>
            Puis lance <code>claude</code> dans ton terminal. La première fois,
            il te demande de te connecter avec ton compte Claude Pro. C'est
            tout.
          </p>

          <h3>Installation de Claude Code — Windows</h3>
          <p>
            Sur Windows, Claude Code passe par{" "}
            <strong>WSL (Windows Subsystem for Linux)</strong>, qui est un
            mini-Linux intégré dans Windows. Ça paraît compliqué mais c'est
            5 minutes.
          </p>
          <ol>
            <li>
              Ouvre <strong>PowerShell</strong> en mode administrateur (clic
              droit sur le menu démarrer → Windows Terminal (admin)).
            </li>
            <li>
              Tape <code>wsl --install</code> et valide. Ubuntu s'installe
              automatiquement. Redémarrer si demandé.
            </li>
            <li>
              Après redémarrage, ouvre <strong>Ubuntu</strong> depuis le menu
              démarrer. Crée un nom d'utilisateur et un mot de passe.
            </li>
            <li>
              Dans Ubuntu, tape :{" "}
              <code>curl -fsSL https://claude.ai/install.sh | bash</code>
            </li>
            <li>
              Lance <code>claude</code> et connecte-toi avec ton compte Pro.
            </li>
          </ol>
          <div className="callout">
            <span className="callout-label">Windows — important</span>
            <p>
              Tout ton travail se fera dans WSL, pas dans Windows classique.
              Ton code vivra dans un dossier du type{" "}
              <code>~/projets/campus-helper</code> (chemin Linux). Pour
              éditer visuellement les fichiers, installe{" "}
              <strong>VS Code</strong> avec l'extension <em>WSL</em> : tu
              pourras ouvrir ton projet Linux depuis Windows en une commande
              (<code>code .</code> dans Ubuntu).
            </p>
          </div>
        </section>

        {/* ── PLAN B DETAILS ── */}
        <section>
          <h2>Plan B — Tout gratuit</h2>
          <p>
            Si le budget ne permet pas Claude Pro, voici la combinaison
            d'outils gratuits qui permet de livrer le projet. Ce n'est pas
            aussi fluide que le plan A, mais c'est parfaitement jouable, et
            tous les étudiants qui sont passés par cette voie ont réussi à
            livrer.
          </p>

          <h3>Les outils du plan B</h3>
          <ul>
            <li>
              <strong><a href="https://cursor.sh">Cursor</a></strong> (gratuit)
              — un éditeur de code basé sur VS Code avec une IA intégrée. Le
              plan gratuit donne accès à GPT-4o-mini et Claude Haiku avec un
              quota mensuel. Suffisant pour un projet à 21h. Installation
              Mac et Windows, pas de WSL nécessaire.
            </li>
            <li>
              <strong>
                <a href="https://github.com/education">
                  GitHub Copilot pour étudiants
                </a>
              </strong>{" "}
              (gratuit avec preuve de statut étudiant) — un assistant IA
              directement dans VS Code. Donne Copilot Chat et des complétions
              de code. Vérifier l'éligibilité étudiante Ynov via GitHub
              Education Pack.
            </li>
            <li>
              <strong><a href="https://claude.ai">Claude.ai</a> gratuit</strong>{" "}
              — pour discuter avec le modèle et copier/coller du code. Moins
              pratique qu'un outil intégré, mais utile pour les questions de
              compréhension et la génération de briques complexes.
            </li>
            <li>
              <strong><a href="https://chat.openai.com">ChatGPT</a> gratuit</strong>{" "}
              — même logique. GPT-4o est dispo dans le plan gratuit avec un
              quota quotidien.
            </li>
          </ul>

          <h3>Comment les combiner</h3>
          <p>
            La stratégie qui marche le mieux : <strong>Cursor</strong> en
            outil principal (éditeur + IA intégrée) et{" "}
            <strong>Claude.ai</strong> pour les moments où l'IA de Cursor
            bloque (expliquer un concept, déboguer un problème récurrent,
            rédiger un prompt complexe). GitHub Copilot en bonus si tu as
            l'éligibilité étudiante.
          </p>

          <h3>Installation de Cursor</h3>
          <ol>
            <li>
              Télécharger depuis{" "}
              <a href="https://cursor.sh">cursor.sh</a> (Mac ou Windows).
            </li>
            <li>Installer comme n'importe quelle application.</li>
            <li>
              À la première ouverture, créer un compte gratuit (possible via
              GitHub).
            </li>
            <li>
              Ouvrir le dossier du projet et commencer à parler à l'IA via
              Cmd+K (Mac) ou Ctrl+K (Windows).
            </li>
          </ol>
        </section>

        {/* ── STACK ── */}
        <section>
          <h2>La stack imposée</h2>
          <p>
            Cette stack a été choisie pour une raison simple : c'est celle
            que Claude Code connaît le mieux en 2026, et celle qui permet
            d'aller le plus vite d'une idée à une app déployée.
          </p>
          <ul>
            <li>
              <strong>Next.js 16</strong> — framework React pour construire
              des apps web modernes. Fait front et back dans un seul projet.
            </li>
            <li>
              <strong>TypeScript</strong> — JavaScript typé. Aide l'IA à
              écrire du code plus propre et à éviter des erreurs courantes.
            </li>
            <li>
              <strong>Tailwind CSS</strong> — manière rapide d'écrire du CSS
              directement dans le HTML. Plus lisible en pratique.
            </li>
            <li>
              <strong>shadcn/ui</strong> — collection de composants prêts à
              l'emploi (boutons, cartes, modales, formulaires). Copie-colle,
              ne s'installe pas comme une librairie classique.
            </li>
            <li>
              <strong>Vercel</strong> — hébergement gratuit pour Next.js.
              Déploie à chaque push sur GitHub. URL publique en 30 secondes.
            </li>
            <li>
              <strong>SQLite</strong> (optionnel) — base de données en
              fichier unique, utilisable en dev sans configuration.{" "}
              <strong>Vercel Postgres</strong> (optionnel aussi) pour la prod
              si le projet a besoin d'utilisateurs persistants.
            </li>
          </ul>
        </section>

        <section>
          <h2>Liens de référence</h2>
          <ul>
            <li><a href="https://docs.claude.com/en/docs/claude-code/overview">Documentation Claude Code</a></li>
            <li><a href="https://nextjs.org/learn">Tutoriel officiel Next.js</a> — à survoler, pas à faire en entier</li>
            <li><a href="https://ui.shadcn.com">shadcn/ui — liste des composants</a></li>
            <li><a href="https://tailwindcss.com/docs">Docs Tailwind</a></li>
            <li><a href="https://vercel.com/docs/getting-started-with-vercel">Vercel — guide de démarrage</a></li>
            <li><a href="https://docs.github.com/en/get-started/quickstart/hello-world">GitHub — guide "hello world"</a></li>
          </ul>
        </section>

        <section>
          <h2>Check-list finale avant J2</h2>
          <ul>
            <li>[ ] Micro-problème choisi (pas d'hésitation)</li>
            <li>[ ] Plan A ou plan B décidé pour le groupe</li>
            <li>[ ] Au moins un compte Claude Pro actif (plan A) ou Cursor installé (plan B)</li>
            <li>[ ] Claude Code installé et testé sur au moins un ordi du groupe</li>
            <li>[ ] Dépôt GitHub créé, tous les membres en collaborateurs</li>
            <li>[ ] Compte Vercel créé et connecté à GitHub</li>
            <li>[ ] 2-3 écrans principaux dessinés (papier ou Figma)</li>
          </ul>
        </section>
      </div>

      <div className="mt-16 flex items-center justify-between">
        <Link href="/brief" className="retour-link">
          &larr; Brief projet
        </Link>
        <Link href="/" className="retour-link">
          Accueil &rarr;
        </Link>
      </div>
    </article>
  );
}
