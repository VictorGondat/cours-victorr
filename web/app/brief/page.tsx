import Link from "next/link";

export const metadata = {
  title: "Brief projet — Cours YNOV",
  description:
    "Le brief complet du projet Campus Helper : cadre, contraintes, planning des 4 journées, livrables et barème de notation.",
};

export default function BriefPage() {
  return (
    <article className="px-6 sm:px-10 pt-10 pb-6">
      <Link href="/" className="retour-link">
        &larr; Retour
      </Link>

      <div className="mt-8 mb-4">
        <span className="pill accent">Projet &middot; Campus Helper</span>
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
        LE BRIEF.
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
        Tout ce qu'il faut savoir sur le projet, la méthode, le planning et
        la notation. À lire en intégralité avant la fin de J1.
      </p>

      <div className="cours-prose">
        {/* ── INTRO ── */}
        <section>
          <h2>Le pitch</h2>
          <p>
            En 21 heures de cours réparties sur 4 journées, chaque groupe
            livre une webapp déployée en ligne qui résout un{" "}
            <strong>micro-problème réel de la vie étudiante à Ynov</strong>.
            Elle doit être utilisable par n'importe quel étudiant de l'école,
            sans installation, depuis une URL publique.
          </p>
          <p>
            Le projet s'appelle <strong>Campus Helper</strong>. C'est un thème,
            pas un produit précis : chaque groupe choisit son angle. Le seul
            critère : que le problème existe vraiment, et que les utilisateurs
            testeurs soient à portée de main dans l'école.
          </p>
        </section>

        <section>
          <h2>Exemples de micro-problèmes</h2>
          <p>
            Ces idées sont là pour débloquer, pas pour limiter. Un bon projet
            part d'une frustration concrète que quelqu'un dans le groupe a
            déjà vécue.
          </p>
          <ul>
            <li>
              <strong>Trouver un binôme de sport.</strong> App qui permet de
              poster un créneau et un sport, et qui match les étudiants dispos
              au même moment.
            </li>
            <li>
              <strong>Échange de notes de cours.</strong> Plateforme pour
              partager ses notes par matière, avec un système de "merci" ou
              d'upvote.
            </li>
            <li>
              <strong>Covoiturage campus.</strong> App qui liste les trajets
              quotidiens proposés par les étudiants vers et depuis Ynov.
            </li>
            <li>
              <strong>Entraide devoirs.</strong> "Je bloque sur cet exo, qui
              peut m'aider en 5 min ?" — plateforme de mise en relation rapide
              entre étudiants.
            </li>
            <li>
              <strong>Micro-services entre étudiants.</strong> Quelqu'un a
              besoin d'une relecture, d'un coup de main Photoshop, d'un test
              utilisateur : il poste, les autres répondent.
            </li>
            <li>
              <strong>Carte interactive du campus.</strong> Salles, machines
              libres, microondes dispo, fontaines, avec mises à jour
              crowdsourcées.
            </li>
            <li>
              <strong>Sondage éclair des pauses déj.</strong> "Où on va
              manger ?" — app qui liste les options autour de l'école et fait
              voter les gens en 30 secondes.
            </li>
            <li>
              <strong>Perdu/Trouvé du campus.</strong> Déclarer un objet perdu
              ou retrouvé, voir s'il y a un match.
            </li>
          </ul>
          <p>
            Vous pouvez aussi proposer le vôtre. Mais il doit rentrer dans ces
            contraintes : problème simple, utilisateurs dans l'école, scope
            atteignable en 21 heures avec l'aide d'une IA.
          </p>
        </section>

        <section>
          <h2>Contraintes</h2>

          <h3>Contraintes produit</h3>
          <ul>
            <li>
              <strong>Un seul problème, bien résolu.</strong> Pas dix
              fonctionnalités moyennes. Trois écrans maximum pour la v1.
            </li>
            <li>
              <strong>Webapp responsive.</strong> Ça doit marcher sur un
              téléphone dans un couloir. Pas d'app native.
            </li>
            <li>
              <strong>Utilisable par quelqu'un qui n'a rien lu.</strong> Si
              l'app nécessite une notice, ce n'est pas une bonne app.
            </li>
            <li>
              <strong>Testée par de vrais étudiants</strong> avant la fin de
              J3, avec retours écrits.
            </li>
            <li>
              <strong>Déployée publiquement</strong> sur une URL
              (Vercel gratuit) avant la fin de J4.
            </li>
          </ul>

          <h3>Contraintes techniques</h3>
          <ul>
            <li>
              Stack imposée : <strong>Next.js + TypeScript + Tailwind + shadcn/ui</strong>.
              Déploiement Vercel. Base de données optionnelle (SQLite ou
              Vercel Postgres selon le besoin).
            </li>
            <li>
              Au moins <strong>un compte Claude Code</strong> par groupe
              (plan A) ou une combinaison d'outils gratuits selon le{" "}
              <Link href="/ressources">plan B</Link>.
            </li>
            <li>
              Au moins <strong>un dépôt GitHub</strong> public par groupe,
              avec tous les membres en collaborateurs.
            </li>
            <li>
              Au moins <strong>deux branches</strong> distinctes utilisées
              pendant le cycle (pas tout sur main).
            </li>
            <li>
              Au moins <strong>une pull request</strong> mergée par chaque
              membre du groupe pendant les 4 jours.
            </li>
          </ul>

          <h3>Contraintes humaines</h3>
          <ul>
            <li>Groupes de 4 maximum (3 accepté si besoin).</li>
            <li>
              Tous les profils sont utiles : tech, marketing, PM. Celui qui
              connaît le mieux le problème n'est souvent pas celui qui
              "code" le plus.
            </li>
            <li>
              Chaque membre doit avoir utilisé Claude Code personnellement au
              moins une fois pendant les 4 jours.
            </li>
          </ul>
        </section>

        {/* ── PLANNING ── */}
        <section>
          <h2>Planning des 4 journées</h2>
          <p>
            Les horaires sont indicatifs. L'important, ce sont les livrables
            de fin de journée. Si vous êtes en retard sur un bloc, rattrapez
            entre les journées.
          </p>

          <JourBlock
            id="j1"
            num="J1"
            date="15 avril 2026"
            duree="7h"
            titre="Théorie & cadrage"
            blocks={[
              {
                time: "09h00 — 12h30",
                label: "Cours théorique",
                desc: "Les 7 chapitres du cours : IA, LLM, Claude Code, anatomie d'une app, Git, vibe coding. Questions/réponses. Pause 15 min incluse.",
              },
              {
                time: "12h30 — 13h30",
                label: "Déjeuner",
                desc: "",
              },
              {
                time: "13h30 — 14h30",
                label: "Brief projet + constitution des groupes",
                desc: "Lecture collective du brief, formation des groupes de 4, échange sur les idées de micro-problèmes.",
              },
              {
                time: "14h30 — 16h30",
                label: "Brainstorm produit",
                desc: "Choix du problème, identification des utilisateurs cibles, description de la v1 en 5 phrases max, croquis papier des 2-3 écrans principaux.",
              },
              {
                time: "16h30 — 17h30",
                label: "Setup & check-list J2",
                desc: "Création d'un GitHub par groupe, compte Vercel, plan d'achat des abonnements Claude Code (plan A/B), check-list d'installation pour J2.",
              },
            ]}
            livrables={[
              "Un Notion ou Google Doc par groupe avec : nom du projet, problème résolu en 3 phrases, 3 écrans en croquis, rôles dans le groupe.",
              "Un dépôt GitHub vide créé avec tous les membres en collaborateurs.",
              "La check-list d'installation lue et comprise (à exécuter avant J2).",
            ]}
          />

          <JourBlock
            id="j2"
            num="J2"
            date="29 avril 2026"
            duree="7h"
            titre="Build"
            blocks={[
              {
                time: "09h00 — 10h30",
                label: "Vérif setup + initialisation du projet",
                desc: "Tour de table : qui a Claude Code installé, qui bloque. Création du projet Next.js via Claude Code, premier commit, premier push sur GitHub.",
              },
              {
                time: "10h30 — 12h30",
                label: "Design system & wireframes",
                desc: "Mise en place de shadcn/ui, définition de la palette, construction des composants de base et des écrans en structure (sans vraies données).",
              },
              {
                time: "12h30 — 13h30",
                label: "Déjeuner",
                desc: "",
              },
              {
                time: "13h30 — 16h30",
                label: "Développement des fonctionnalités",
                desc: "Travail en pair programming distribué : chacun prend une feature, travaille dans sa branche, ouvre une PR, merge. Tests continus dans le navigateur.",
              },
              {
                time: "16h30 — 17h30",
                label: "Premier déploiement sur Vercel",
                desc: "Connexion du repo GitHub à Vercel, premier déploiement, URL publique partagée. Debug des erreurs de build si nécessaire.",
              },
            ]}
            livrables={[
              "URL publique Vercel qui affiche au moins la page d'accueil et un écran fonctionnel.",
              "Au moins 5 commits sur GitHub, 2 branches distinctes utilisées, au moins 1 PR mergée par membre.",
              "Une preuve vidéo (capture d'écran) de Claude Code en train de travailler, par groupe.",
            ]}
          />

          <JourBlock
            id="j3"
            num="J3"
            date="6 mai 2026"
            duree="3h (après-midi)"
            titre="Tests utilisateurs & itération"
            blocks={[
              {
                time: "14h00 — 14h45",
                label: "Méthodologie de test",
                desc: "Comment on observe un utilisateur sans l'influencer. Grille d'observation. Quelles questions poser, lesquelles éviter.",
              },
              {
                time: "14h45 — 16h15",
                label: "Session de test",
                desc: "Chaque groupe fait tester son app à au moins 5 étudiants qui ne sont pas dans le cours. Observation silencieuse, prise de notes. 10 min par testeur.",
              },
              {
                time: "16h15 — 17h00",
                label: "Débrief & priorisation",
                desc: "Retour en classe, synthèse des retours. Tri : ce qui est critique, ce qui est nice-to-have, ce qu'on ignore. Création d'une liste de 3 actions max pour J4.",
              },
            ]}
            livrables={[
              "Grille de retours utilisateurs remplie (au moins 5 testeurs).",
              "Liste des 3 actions prioritaires à faire pour J4, avec justification.",
              "Un commit ou une issue GitHub par action prioritaire.",
            ]}
          />

          <JourBlock
            id="j4"
            num="J4"
            date="20 mai 2026"
            duree="4h"
            titre="Finalisation & démos"
            blocks={[
              {
                time: "09h00 — 11h30",
                label: "Dernières corrections & polish",
                desc: "Implémentation des 3 actions prioritaires définies en J3. Fignolage visuel. Vérification que tout marche en ligne sur l'URL publique. Dernier push.",
              },
              {
                time: "11h30 — 12h00",
                label: "Préparation des démos",
                desc: "Chaque groupe prépare 10 min de présentation : problème, démarche, démo live, retours utilisateurs, démo, apprentissages, prochaine étape.",
              },
              {
                time: "12h00 — 13h00",
                label: "Démos en classe",
                desc: "10 min par groupe : 7 min de présentation + 3 min de questions. Notation en direct selon le barème.",
              },
            ]}
            livrables={[
              "URL publique finale de l'app déployée (capture dans le Notion du groupe).",
              "Présentation de 10 min en classe.",
              "Le repo GitHub propre avec README qui explique le projet et l'URL de démo.",
            ]}
          />
        </section>

        {/* ── BAREME ── */}
        <section>
          <h2>Barème de notation</h2>
          <p>
            Note sur 20. Six critères, pondérés selon leur importance. Le
            projet est noté en groupe. Une note individuelle peut moduler la
            note collective à la marge (&plusmn; 2 points) en cas de
            contribution notablement déséquilibrée, au jugement de
            l'enseignant.
          </p>

          <table className="bareme-table">
            <thead>
              <tr>
                <th>Critère</th>
                <th>Ce qu'on regarde</th>
                <th>/20</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Fonctionnalité</strong></td>
                <td>
                  L'app fait ce qu'elle annonce. Parcours principal sans bug.
                  Un vrai étudiant peut l'utiliser du début à la fin.
                </td>
                <td className="points">/6</td>
              </tr>
              <tr>
                <td><strong>Qualité UX/UI</strong></td>
                <td>
                  L'interface est claire, cohérente, agréable. Design system
                  respecté. Pas de texte placeholder en prod. Responsive mobile.
                </td>
                <td className="points">/3</td>
              </tr>
              <tr>
                <td><strong>Intégration des retours utilisateurs</strong></td>
                <td>
                  Traces d'une vraie session de test en J3. Les retours ont
                  été analysés et au moins deux d'entre eux ont été
                  implémentés avant J4.
                </td>
                <td className="points">/3</td>
              </tr>
              <tr>
                <td><strong>Usage de Claude Code & Git</strong></td>
                <td>
                  Pair programming effectif, branches utilisées, PR mergées,
                  historique de commits propre avec messages qui racontent
                  quelque chose.
                </td>
                <td className="points">/3</td>
              </tr>
              <tr>
                <td><strong>Démo orale</strong></td>
                <td>
                  Clarté de la présentation, capacité à expliquer pourquoi
                  tel choix plutôt qu'un autre, gestion du temps, réponses
                  aux questions.
                </td>
                <td className="points">/3</td>
              </tr>
              <tr>
                <td><strong>Bonus</strong></td>
                <td>
                  Originalité du problème, ambition raisonnable, déploiement
                  propre, README soigné, petit "wow" qui montre du soin.
                </td>
                <td className="points">/2</td>
              </tr>
            </tbody>
          </table>

          <div className="callout">
            <span className="callout-label">Notation philosophie</span>
            <p>
              Ce barème récompense un projet fini, honnête, testé. Un MVP
              fonctionnel de 3 écrans qui tourne vraiment en ligne et qui a
              reçu du feedback utilisateur vaudra toujours plus qu'un projet
              ambitieux mais cassé. La règle : livrer petit et propre plutôt
              que gros et bancal.
            </p>
          </div>
        </section>

        <section>
          <h2>Check-list à faire avant J2</h2>
          <p>
            Entre J1 et J2, vous avez 14 jours. Voici ce que chaque groupe
            doit avoir fait <strong>avant</strong> de revenir le 29 avril.
            La liste d'installation complète est sur la page{" "}
            <Link href="/ressources">ressources</Link>.
          </p>
          <ol>
            <li>Choisir définitivement le micro-problème (pas d'hésitation le jour J).</li>
            <li>Décider du plan d'abonnement : plan A (payant) ou plan B (gratuit). Au moins 1 compte Claude Code actif par groupe si plan A.</li>
            <li>Installer Claude Code sur l'ordinateur de la personne qui aura l'abonnement principal.</li>
            <li>Créer le compte GitHub pour les membres qui n'en ont pas, et créer le dépôt du projet avec tous les membres en collaborateurs.</li>
            <li>Créer un compte Vercel gratuit (par la personne qui déploiera), connecté au compte GitHub.</li>
            <li>Avoir fait un premier croquis papier ou Figma des 2-3 écrans principaux de l'app.</li>
          </ol>
        </section>
      </div>

      <div className="mt-16 flex items-center justify-between">
        <Link href="/theorie" className="retour-link">
          &larr; Cours théorique
        </Link>
        <Link href="/ressources" className="retour-link">
          Ressources &rarr;
        </Link>
      </div>
    </article>
  );
}

function JourBlock({
  id,
  num,
  date,
  duree,
  titre,
  blocks,
  livrables,
}: {
  id: string;
  num: string;
  date: string;
  duree: string;
  titre: string;
  blocks: { time: string; label: string; desc: string }[];
  livrables: string[];
}) {
  return (
    <div
      id={id}
      className="mb-10 mt-8"
      style={{
        border: "1px solid rgba(0,0,0,0.08)",
        padding: "1.75rem",
        background: "#FFFFFF",
      }}
    >
      <div className="flex items-baseline justify-between mb-4 flex-wrap gap-2">
        <div className="flex items-baseline gap-4">
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "2.25rem",
              color: "#F97316",
              letterSpacing: "0.02em",
              lineHeight: "1",
            }}
          >
            {num}
          </span>
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.4rem",
              color: "#1A1714",
              letterSpacing: "0.01em",
            }}
          >
            {titre.toUpperCase()}
          </span>
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
          {date} &middot; {duree}
        </span>
      </div>

      <div
        style={{
          borderTop: "1px solid rgba(0,0,0,0.06)",
          marginBottom: "1.25rem",
        }}
      />

      {blocks.map((b, i) => (
        <div key={i} className="mb-3" style={{ display: "flex", gap: "1.25rem" }}>
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              letterSpacing: "0.08em",
              color: "#F97316",
              whiteSpace: "nowrap",
              flexShrink: 0,
              paddingTop: "3px",
              width: "110px",
            }}
          >
            {b.time}
          </div>
          <div style={{ flex: 1 }}>
            <div
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1rem",
                fontWeight: 600,
                color: "#1A1714",
                marginBottom: b.desc ? "0.15rem" : 0,
              }}
            >
              {b.label}
            </div>
            {b.desc && (
              <div
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.95rem",
                  fontStyle: "italic",
                  color: "#4B4540",
                  lineHeight: "1.55",
                }}
              >
                {b.desc}
              </div>
            )}
          </div>
        </div>
      ))}

      <div
        className="mt-5 pt-4"
        style={{ borderTop: "1px dashed rgba(0,0,0,0.12)" }}
      >
        <div
          className="eyebrow no-line mb-2"
          style={{ fontSize: "10px" }}
        >
          Livrables fin de journée
        </div>
        <ul
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.95rem",
            color: "#2D2926",
            paddingLeft: "1.25rem",
            lineHeight: "1.6",
          }}
        >
          {livrables.map((l, i) => (
            <li key={i} style={{ marginBottom: "0.3rem" }}>
              {l}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
