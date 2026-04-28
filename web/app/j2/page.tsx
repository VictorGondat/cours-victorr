import Link from "next/link";

export const metadata = {
  title: "Guide J2 — Cours YNOV",
  description:
    "Guide pratique du jour 2 : Git expliqué simplement, Claude Design, Claude Code, GitHub, premier déploiement. Avec prompts copy-paste prêts à l'emploi.",
};

export default function J2Page() {
  return (
    <article className="px-6 sm:px-10 pt-10 pb-6">
      <Link href="/" className="retour-link">
        &larr; Retour
      </Link>

      <div className="mt-8 mb-4">
        <span className="pill accent">
          Jour 2 &middot; 29 avril 2026 &middot; Guide pratique
        </span>
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
        LANCER LE PROJET.
      </h1>

      <p
        style={{
          fontFamily: "var(--font-body)",
          fontStyle: "italic",
          fontSize: "1.15rem",
          lineHeight: "1.6",
          color: "#4B4540",
          maxWidth: "640px",
          marginBottom: "1.5rem",
        }}
      >
        De l'idée à un repo qui tourne, sans se planter dès le premier prompt.
        Tout ce qu'il faut faire dans la journée, dans l'ordre, avec les
        prompts prêts à copier.
      </p>

      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "0.95rem",
          color: "#8C8680",
          maxWidth: "640px",
          marginBottom: "2rem",
        }}
      >
        Le planning détaillé de la journée reste sur le{" "}
        <Link
          href="/brief#j2"
          style={{ color: "#F97316", textDecoration: "underline" }}
        >
          brief
        </Link>
        . Cette page est le guide d'exécution, pas le programme.
      </p>

      <nav
        className="mb-12 p-5"
        style={{
          background: "#FAF7F1",
          border: "1px solid rgba(0,0,0,0.06)",
        }}
      >
        <div className="eyebrow no-line mb-3" style={{ fontSize: "10px" }}>
          Sommaire
        </div>
        <ol
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "1rem",
            lineHeight: "1.85",
            color: "#2D2926",
            paddingLeft: "1.25rem",
          }}
        >
          <li>
            <a href="#git" style={{ color: "inherit" }}>
              Git, en 5 minutes (vraiment)
            </a>
          </li>
          <li>
            <a href="#tokens" style={{ color: "inherit" }}>
              Attention à votre crédit Claude
            </a>
          </li>
          <li>
            <a href="#design" style={{ color: "inherit" }}>
              Étape 1 — Mocker l'UI dans Claude Design
            </a>
          </li>
          <li>
            <a href="#repo" style={{ color: "inherit" }}>
              Étape 2 — Créer le repo GitHub
            </a>
          </li>
          <li>
            <a href="#init" style={{ color: "inherit" }}>
              Étape 3 — Lancer Claude Code et écrire le CLAUDE.md
            </a>
          </li>
          <li>
            <a href="#premier-prompt" style={{ color: "inherit" }}>
              Étape 4 — Premier prompt : laisser l'IA poser les questions
            </a>
          </li>
          <li>
            <a href="#cycle" style={{ color: "inherit" }}>
              Étape 5 — Le cycle quotidien (branche → PR → merge)
            </a>
          </li>
          <li>
            <a href="#pieges" style={{ color: "inherit" }}>
              Les 7 pièges à éviter
            </a>
          </li>
        </ol>
      </nav>

      <div className="cours-prose">
        {/* ── INTRO ── */}
        <section>
          <h2>Avant de toucher au clavier</h2>
          <p>
            J2, c'est la journée où une idée devient une vraie app. Le piège
            du jour : aller trop vite. Demander à Claude de "construire l'appli"
            d'un coup, accepter le premier mockup venu, pousser sur main parce
            que c'est plus simple. Vous allez le payer cher.
          </p>
          <p>
            La page est organisée dans l'ordre exact à suivre. Lisez le
            chapitre Git en premier, même si vous pensez avoir compris en J1.
            Puis le warning sur le crédit. Ensuite vous pouvez attaquer les
            étapes 1 à 5.
          </p>
          <div className="callout">
            <span className="callout-label">La règle d'or de la journée</span>
            <p>
              Avant de coder, l'IA doit comprendre. Avant qu'elle comprenne,
              vous devez la laisser poser des questions. Et avant qu'elle
              touche un fichier, elle doit vous montrer son plan.
            </p>
          </div>
        </section>

        {/* ── 1. GIT VULGARISÉ ── */}
        <section id="git">
          <h2>01 — Git, en 5 minutes</h2>
          <h3>Vraiment, cette fois</h3>
          <p>
            Si J1 vous a perdus sur Git, c'est normal et c'est pas grave.
            Personne ne comprend Git en une heure. Voici la version qu'il
            vous faut pour J2, ni plus ni moins.
          </p>

          <h4>La métaphore qui marche</h4>
          <p>
            Git, c'est un Google Docs avec un historique infini, sauf que
            c'est <strong>vous qui choisissez quand sauvegarder</strong>. Et
            au lieu d'écrire à plusieurs sur le même document en même temps
            (catastrophe), chacun travaille sur sa propre copie en parallèle,
            puis on assemble proprement.
          </p>
          <p>
            Sur GitHub, le projet vit dans un <em>repo</em> (raccourci pour
            "repository", le dossier de référence). Tout le monde dans le
            groupe a sa copie locale, et on synchronise via GitHub.
          </p>

          <div className="figure">
            <GitVulgarise />
            <div className="figure-caption">
              Main = la vraie appli. Branches = des brouillons isolés. PR =
              "tu valides ?". Merge = "OK c'est intégré".
            </div>
          </div>

          <h4>Le vocabulaire en 6 mots</h4>
          <ul>
            <li>
              <strong>repo</strong> — le dossier du projet sur GitHub. Un
              seul par groupe.
            </li>
            <li>
              <strong>branche</strong> — une copie parallèle où vous bossez
              sans toucher la version qui marche. Une branche par feature.
            </li>
            <li>
              <strong>commit</strong> — une sauvegarde, avec un petit
              message qui dit ce qui change. Comme un point dans l'historique.
            </li>
            <li>
              <strong>push</strong> — envoyer vos commits sur GitHub.
            </li>
            <li>
              <strong>pull request (PR)</strong> — demander à intégrer votre
              branche dans la version principale. Un binôme du groupe relit
              avant.
            </li>
            <li>
              <strong>merge</strong> — la PR est validée, votre travail est
              intégré dans <code>main</code>. Bravo.
            </li>
          </ul>

          <div className="callout">
            <span className="callout-label">Rassurez-vous</span>
            <p>
              Claude Code va taper 95% des commandes Git pour vous. Vous lui
              direz <em>"crée une branche, ajoute mes changements, pousse,
              ouvre une PR"</em> et il le fera. Mais comprendre ce qui se
              passe vous évitera la panique quand un message d'erreur rouge
              tombera. Et il en tombera.
            </p>
          </div>

          <h4>Le rituel à apprendre par cœur</h4>
          <p>
            Ce mini-protocole, vous allez le répéter 10 fois dans la journée.
            Apprenez-le maintenant, ça paye toute la suite.
          </p>

          <div
            className="p-5 my-6"
            style={{
              background: "#FFFFFF",
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
                marginBottom: "0.75rem",
              }}
            >
              Avant chaque nouvelle feature
            </div>
            <ol
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.98rem",
                lineHeight: "1.7",
                color: "#2D2926",
                paddingLeft: "1.25rem",
                marginBottom: "1.25rem",
              }}
            >
              <li>
                Je récupère ce que les autres ont fait :{" "}
                <code>git pull --ff-only</code>
              </li>
              <li>
                Je crée ma branche :{" "}
                <code>git checkout -b feature/relay-page-publication</code>
              </li>
              <li>
                Je lance Claude Code, je décris la feature, je demande un
                plan, je valide, on code.
              </li>
            </ol>

            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#F97316",
                marginBottom: "0.75rem",
              }}
            >
              Quand la feature est finie
            </div>
            <ol
              start={4}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.98rem",
                lineHeight: "1.7",
                color: "#2D2926",
                paddingLeft: "1.25rem",
              }}
            >
              <li>
                Je relis ce que Claude a écrit. Vraiment, je relis.
              </li>
              <li>
                Claude commit et pousse pour moi (<code>git add</code>,{" "}
                <code>commit</code>, <code>push</code>).
              </li>
              <li>
                J'ouvre la PR : <code>gh pr create</code> (Claude le fait
                aussi).
              </li>
              <li>Un binôme du groupe relit la PR et merge.</li>
            </ol>
          </div>

          <div className="callout">
            <span className="callout-label">La règle absolue</span>
            <p>
              Personne ne push sur <code>main</code>. Jamais. Toujours via
              une branche + une PR. Si ça casse en ligne, c'est parce que
              quelqu'un n'a pas respecté cette règle.
            </p>
          </div>
        </section>

        {/* ── 2. TOKENS ── */}
        <section id="tokens">
          <h2>02 — Attention à votre crédit</h2>
          <h3>Le piège du compte partagé</h3>
          <p>
            Vous avez tous Claude Pro à 20€ par mois. C'est largement
            suffisant pour le cours, mais il y a une limite par tranche de 5
            heures (45 messages environ sur Sonnet, beaucoup moins sur Opus
            ou en multimodal). Et Claude Design consomme beaucoup plus de
            tokens qu'une conversation texte, parce qu'il génère et raisonne
            sur des images.
          </p>

          <div className="callout">
            <span className="callout-label">Cas concret</span>
            <p>
              Un groupe partage un seul compte Claude Pro. Quelqu'un grille
              la limite à 11h en lançant 8 brouillons Claude Design. Plus
              personne ne peut bosser jusqu'à 16h. Ça s'est déjà vu. Plein
              de fois.
            </p>
          </div>

          <h4>Si vous partagez un compte à plusieurs</h4>
          <ul>
            <li>
              <strong>Un seul actif à la fois</strong> sur Claude Code.
              Jamais en parallèle, sinon vous brûlez le quota deux fois plus
              vite.
            </li>
            <li>
              <strong>Tour de rôle clair</strong> : un binôme bosse 1h,
              l'autre relit le code, planifie la suite, écrit le prochain
              prompt sur papier. Puis on échange.
            </li>
            <li>
              <strong>À la fin d'un tour</strong> : <code>/clear</code> dans
              Claude Code, déconnexion. Pas de session zombie qui consomme
              en arrière-plan.
            </li>
          </ul>

          <h4>Les 5 réflexes anti-gaspillage</h4>
          <ol>
            <li>
              <strong>Mode plan systématique</strong> sur les changements qui
              touchent plus d'un fichier. Mieux vaut 50 tokens à planifier
              que 5000 à refaire. <code>Shift+Tab</code> dans Claude Code
              pour activer.
            </li>
            <li>
              <strong>
                <code>/clear</code> entre deux features
              </strong>
              . Une session = une tâche. Le contexte qui traîne coûte plus
              cher à chaque message qu'on envoie.
            </li>
            <li>
              <strong>
                <code>/compact</code> quand la conversation devient longue
              </strong>{" "}
              mais que vous voulez garder le fil. Claude résume au lieu de
              tout garder.
            </li>
            <li>
              <strong>Pas de "regarde tout le projet"</strong>. Demandez des
              fichiers précis. Charger 30 fichiers en contexte = 30 fichiers
              comptés à chaque message qui suit.
            </li>
            <li>
              <strong>Sur Claude Design : pas de 10 brouillons</strong>.
              Brief précis dès le départ, 2-3 itérations ciblées. Chaque
              génération multimodale coûte cher.
            </li>
          </ol>
        </section>

        {/* ── 3. CLAUDE DESIGN ── */}
        <section id="design">
          <h2>03 — Étape 1 : mocker l'UI</h2>
          <h3>Avec Claude Design (claude.ai/design)</h3>
          <p>
            Avant de coder, on dessine. C'est contre-intuitif quand on a
            une IA qui code en quelques secondes, mais c'est la chose qui
            sauve le plus de temps dans la journée. Mocker, c'est forcer
            votre groupe à se mettre d'accord sur ce qu'on construit
            réellement, avant que Claude ne génère 200 lignes de code qu'il
            faudra jeter.
          </p>

          <p>
            Allez sur{" "}
            <a href="https://claude.ai/design">claude.ai/design</a>. C'est
            inclus dans votre plan Pro. C'est un canvas où vous décrivez
            votre UI en langage naturel et où Claude génère un mockup
            interactif, exportable directement vers Claude Code.
          </p>

          <div
            className="p-5 my-5"
            style={{
              background: "#FFFFFF",
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
              Prompt — Brief design (exemple Relay)
            </div>
            <pre
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.85rem",
                lineHeight: "1.55",
                color: "#1A1714",
                whiteSpace: "pre-wrap",
                margin: 0,
              }}
            >{`On va concevoir l'écran principal de Relay, une appli d'entraide
entre étudiants Ynov. Quelqu'un a un besoin urgent (matériel, avis
sur un projet, test utilisateur), il publie une demande, et un
autre étudiant à proximité y répond en moins de 5 minutes.

Avant de proposer un mockup, pose-moi 5 questions max pour
clarifier : la cible, les actions clés sur l'écran, ce qui doit
sauter aux yeux, le style visuel souhaité.

Ne génère rien tant que tu n'as pas mes réponses.`}</pre>
          </div>

          <p>
            Pourquoi forcer les questions : sans ça, Claude va générer un
            mockup générique qui ressemble à toutes les apps étudiantes du
            marché. Avec ça, il pose les bonnes questions, et le mockup
            qui sort colle vraiment à votre projet.
          </p>

          <h4>Itérer 2-3 fois max</h4>
          <p>
            Une fois le mockup généré, vous itérez sur des points précis,
            pas sur "tout refaire". Exemple :
          </p>

          <div
            className="p-5 my-5"
            style={{
              background: "#FFFFFF",
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
              Prompt — Itération ciblée (exemple Fix My Slide)
            </div>
            <pre
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.85rem",
                lineHeight: "1.55",
                color: "#1A1714",
                whiteSpace: "pre-wrap",
                margin: 0,
              }}
            >{`Le mockup est presque bon. Trois changements précis :
1. Le bouton "Importer mes slides" doit être beaucoup plus visible,
   c'est l'action principale.
2. Les commentaires anonymes doivent apparaître sous chaque slide,
   pas dans une colonne séparée.
3. Plus de gris, moins de bleu — on veut un truc qui rassure, pas
   qui ressemble à LinkedIn.

Garde tout le reste identique.`}</pre>
          </div>

          <div className="callout">
            <span className="callout-label">Économie de tokens</span>
            <p>
              Une génération Claude Design ≈ 5 messages texte en coût.
              Réfléchissez à votre prompt avant de cliquer. Mieux vaut 30
              secondes à reformuler qu'une nouvelle génération qui ne
              répond pas tout à fait.
            </p>
          </div>

          <h4>Le handoff vers Claude Code</h4>
          <p>
            Quand le mockup vous va : bouton{" "}
            <strong>Send to Claude Code</strong> en haut à droite. Ça
            exporte un bundle structuré (composants, tokens, layout) que
            Claude Code lira directement. Si l'option n'est pas dispo
            (selon les versions), copiez le code généré + faites une
            capture d'écran, et collez les deux dans Claude Code en local
            avec un prompt d'adaptation (on y vient à l'étape 4).
          </p>
        </section>

        {/* ── 4. REPO GITHUB ── */}
        <section id="repo">
          <h2>04 — Étape 2 : créer le repo</h2>
          <h3>Sur GitHub, en 10 minutes</h3>
          <p>
            Un repo par groupe, hébergé sur GitHub. Le naming convenu :
            <code>campus-helper-gX</code> où X est votre numéro de groupe.
            Une seule personne crée le repo, elle invite ensuite les autres
            comme collaborators.
          </p>

          <h4>Avec gh CLI (recommandé, plus rapide)</h4>
          <pre><code>{`# Authentification (une fois)
gh auth login

# Créer le repo et le cloner localement
gh repo create campus-helper-g1 --public --clone
cd campus-helper-g1

# Inviter les autres membres (à faire 3 fois)
gh repo edit --add-collaborator pseudo-github-membre`}</code></pre>

          <h4>Avec l'interface GitHub (plan B si gh CLI rame)</h4>
          <ol>
            <li>
              Aller sur <a href="https://github.com/new">github.com/new</a>
            </li>
            <li>
              Repository name : <code>campus-helper-g1</code> (votre numéro)
            </li>
            <li>
              Public, ne pas cocher README ou .gitignore (Next.js le fera)
            </li>
            <li>
              <strong>Settings → Collaborators</strong> : ajouter les 3
              autres membres avec leur pseudo GitHub
            </li>
            <li>
              Cloner en local :{" "}
              <code>git clone https://github.com/votre-pseudo/campus-helper-g1.git</code>
            </li>
          </ol>

          <div className="callout">
            <span className="callout-label">Protégez main tout de suite</span>
            <p>
              <strong>Settings → Branches → Add branch protection rule</strong>{" "}
              pour <code>main</code>. Cocher "Require a pull request before
              merging". Comme ça, même si quelqu'un essaye un{" "}
              <code>git push origin main</code> par accident, GitHub refuse.
              Filet de sécurité gratuit.
            </p>
          </div>
        </section>

        {/* ── 5. INIT + CLAUDE.md ── */}
        <section id="init">
          <h2>05 — Étape 3 : Claude Code + CLAUDE.md</h2>
          <h3>Le fichier qui change tout</h3>

          <h4>Lancer Claude Code dans le repo</h4>
          <pre><code>{`cd campus-helper-g1
claude
# Dans l'interface, taper :
/init`}</code></pre>
          <p>
            <code>/init</code> analyse la structure du projet et génère un{" "}
            <code>CLAUDE.md</code> de base. C'est le point de départ, pas
            le résultat final. Vous allez le compléter dans la foulée avec
            les règles spécifiques à votre groupe.
          </p>

          <h4>Le CLAUDE.md de votre groupe</h4>
          <p>
            Ce fichier est lu par Claude à chaque session, dans n'importe
            quelle conversation, par n'importe qui dans votre groupe. C'est
            la "constitution" de votre projet. Court et précis &gt;
            encyclopédique. Voici un template prêt à copier dans votre{" "}
            <code>CLAUDE.md</code>, à adapter aux 5 endroits marqués{" "}
            <code>[À REMPLIR]</code>.
          </p>

          <pre><code>{`# Campus Helper — [NOM DU PROJET]

## Le projet
[À REMPLIR : 1 phrase claire de ce que fait l'app]

## Cible utilisateur
[À REMPLIR : qui exactement, en 1-2 lignes]

## Le problème résolu
[À REMPLIR : 2-3 phrases sur le problème concret qu'on résout]

## Stack imposée par le cours
- Next.js 16 (App Router) + TypeScript + Tailwind CSS
- shadcn/ui pour les composants
- SQLite en dev, Vercel Postgres en prod si besoin
- Déploiement Vercel via push sur main

## DA (direction artistique)
[À REMPLIR : palette de couleurs, ambiance — sortir du mockup
Claude Design une fois validé]

## Git — règles absolues
- Branches : feature/<scope>-<court> ou fix/<scope>-<court>
- Commits : conventional (feat:, fix:, chore:, docs:)
- Jamais de push direct sur main, toujours via PR
- 1 PR = 1 binôme la review avant merge

## Comportement attendu de l'IA
- Pose des questions si la demande est ambiguë (max 5)
- Propose un plan avant de toucher au code dès que ça touche
  plus d'un fichier
- Ne modifie pas plus de 3 fichiers sans validation explicite
- N'invente pas de librairies. Vérifie que les imports existent
- Quand un test rate, fixe la cause, ne supprime pas le test`}</code></pre>

          <div className="callout">
            <span className="callout-label">Le piège à éviter</span>
            <p>
              Un <code>CLAUDE.md</code> de 200 lignes, avec toutes les
              conventions imaginables, "au cas où". Claude finit par ignorer
              les règles du milieu. Mieux vaut 30 lignes lues à chaque fois
              que 200 lignes survolées. Vous le ferez grossir au besoin
              quand vous repérerez des erreurs récurrentes.
            </p>
          </div>
        </section>

        {/* ── 6. PREMIER PROMPT ── */}
        <section id="premier-prompt">
          <h2>06 — Étape 4 : premier prompt</h2>
          <h3>Mode plan + laisser l'IA poser les questions</h3>
          <p>
            Vous avez le repo, le <code>CLAUDE.md</code>, le mockup. C'est
            maintenant que tout se joue. La tentation : taper "construis
            l'app". Le réflexe à ancrer : faire l'inverse.
          </p>

          <h4>Activer le mode plan</h4>
          <p>
            Dans Claude Code, appuyez sur <code>Shift+Tab</code> pour passer
            en <strong>mode plan</strong>. Dans ce mode, Claude lit, réfléchit,
            propose, mais <strong>ne touche aucun fichier</strong>. Vous
            voyez son plan, vous validez, et seulement après il code.
          </p>

          <div
            className="p-5 my-5"
            style={{
              background: "#FFFFFF",
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
              Prompt — Kick-off projet (exemple Relay)
            </div>
            <pre
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.85rem",
                lineHeight: "1.55",
                color: "#1A1714",
                whiteSpace: "pre-wrap",
                margin: 0,
              }}
            >{`On va construire Relay, une appli d'entraide entre étudiants
Ynov pour publier une demande d'aide rapide (matériel, avis,
test utilisateur) et y répondre en moins de 5 minutes.

Voici le mockup de l'écran principal : [coller le bundle Claude
Design ou décrire les écrans en quelques lignes].

Avant d'écrire la moindre ligne de code, interroge-moi sur :
- les fonctionnalités essentielles vs nice-to-have
- les écrans à créer pour une V1 démontrable
- les cas limites auxquels je n'ai pas pensé
- comment on identifie un utilisateur (auth ou pas pour la V1 ?)

Pose tes questions une par une. Quand tu te sens confiant à 90%,
écris une spec courte dans SPEC.md. Ne touche aucun fichier de
code tant que je n'ai pas validé la spec.`}</pre>
          </div>

          <p>
            Claude va vous poser 4-6 questions. Répondez précisément. Quand
            il a assez d'infos, il écrit <code>SPEC.md</code>. Vous lisez,
            vous corrigez ce qui ne va pas, vous validez. À ce stade,
            seulement, on passe au code.
          </p>

          <h4>Du plan au code, étape par étape</h4>
          <p>
            Une fois la spec validée, ne demandez pas "implémente tout".
            Demandez l'étape 1, vous relisez, vous commitez. Puis l'étape
            2. Et ainsi de suite. C'est le seul moyen de garder le contrôle.
          </p>

          <div
            className="p-5 my-5"
            style={{
              background: "#FFFFFF",
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
              Prompt — Passer à l'implémentation
            </div>
            <pre
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.85rem",
                lineHeight: "1.55",
                color: "#1A1714",
                whiteSpace: "pre-wrap",
                margin: 0,
              }}
            >{`OK pour la spec. Implémente seulement l'étape 1 du plan : la
page d'accueil avec le formulaire de publication d'une demande.
Ne touche aucun autre fichier. Quand c'est fait, arrête-toi pour
que je relise et qu'on commit avant de passer à l'étape 2.`}</pre>
          </div>

          <h4>Variations selon votre projet</h4>
          <p>
            Le même squelette de prompt s'adapte à n'importe quel groupe.
            Quelques variations qu'on a déjà rencontrées :
          </p>
          <ul>
            <li>
              <strong>Study Vibes</strong> — insister sur la dimension
              sociale dans le prompt : <em>"L'app sert à provoquer des
              rencontres entre étudiants qui ne se connaissent pas. La
              friction d'inscription doit être minimale."</em>
            </li>
            <li>
              <strong>JobyMatch</strong> — préciser les deux profils :{" "}
              <em>"Deux types d'utilisateurs avec des besoins opposés
              (étudiant qui cherche, recruteur qui propose). Demande-moi
              comment on gère cette dualité dans la V1."</em>
            </li>
            <li>
              <strong>Campus Pitch / Fix My Slide</strong> — insister sur le
              cœur du produit : <em>"L'utilisateur upload une présentation,
              il reçoit du feedback. Tout le reste est secondaire pour la
              V1. Demande-moi comment on gère l'upload."</em>
            </li>
          </ul>
        </section>

        {/* ── 7. CYCLE QUOTIDIEN ── */}
        <section id="cycle">
          <h2>07 — Étape 5 : le cycle quotidien</h2>
          <h3>Branche → code → PR → review → merge</h3>
          <p>
            Le rituel vu au chapitre 1 sur Git, vous allez le répéter à
            chaque feature de la journée. Voici à quoi ressemble une
            journée type, en commandes :
          </p>

          <pre><code>{`# Matin : récupérer le travail des autres
git pull --ff-only

# Démarrer une feature
git checkout -b feature/relay-formulaire-publication

# Lancer Claude Code, faire le prompt avec mode plan,
# implémenter l'étape, relire le code

# Quand la feature est OK, demander à Claude :
# "commit ce qui a changé avec un message conventional clair"
# Il fait :
git add .
git commit -m "feat(publication): ajoute le formulaire de publication"
git push -u origin feature/relay-formulaire-publication

# Ouvrir la PR
gh pr create --title "feat: formulaire de publication" \\
  --body "Ajoute le formulaire avec champs titre, description, urgence."

# Un binôme review sur GitHub, valide, merge en squash`}</code></pre>

          <h4>Les conventions de nommage du cours</h4>
          <p>
            Pour que tout le monde s'y retrouve dans la liste des PR :
          </p>
          <ul>
            <li>
              Branches feature : <code>feature/&lt;scope&gt;-&lt;descriptif-court&gt;</code>{" "}
              — exemples :<br />
              <code>feature/relay-formulaire-publication</code>
              <br />
              <code>feature/jobymatch-page-recruteur</code>
              <br />
              <code>feature/study-vibes-feed-activites</code>
            </li>
            <li>
              Branches fix : <code>fix/&lt;scope&gt;-&lt;ce-qui-est-cassé&gt;</code>{" "}
              — exemples :<br />
              <code>fix/fix-my-slide-upload-pdf-cassé</code>
              <br />
              <code>fix/homy-bouton-rejoindre-ne-marche-pas</code>
            </li>
            <li>
              Commits : <code>feat:</code>, <code>fix:</code>,{" "}
              <code>chore:</code>, <code>docs:</code> + 1 ligne claire en
              français ou anglais. Pas les deux dans la même PR.
            </li>
          </ul>

          <h4>La review entre binômes</h4>
          <p>
            Une PR n'est jamais mergée par celui qui l'a écrite. Un autre
            membre du groupe ouvre la PR sur GitHub, lit le diff, teste si
            possible en local, commente si quelque chose cloche, approuve,
            et merge en squash. C'est 5 minutes de votre temps qui peuvent
            sauver 2 heures de débogage plus tard.
          </p>

          <div className="callout">
            <span className="callout-label">Si Claude se plante en cours de feature</span>
            <p>
              Pas de panique : votre branche est isolée. Tant que vous
              n'avez pas mergé, <code>main</code> est intacte. Vous pouvez{" "}
              <code>git restore .</code> pour annuler les modifs non
              commitées, ou repartir d'un commit précédent avec{" "}
              <code>git reset --hard HEAD~1</code>. Demandez à Claude, il
              gère ces commandes.
            </p>
          </div>
        </section>

        {/* ── 8. PIEGES ── */}
        <section id="pieges">
          <h2>08 — Les 7 pièges à éviter</h2>
          <h3>Tirés des cours précédents, vraiment</h3>

          <div className="grid sm:grid-cols-2 gap-4 my-6">
            <PiegeCard
              num="01"
              titre="L'IA invente des librairies"
              parade="Mettez les liens des docs officielles dans le CLAUDE.md ou dans le prompt. Demandez-lui de vérifier que les imports existent avant d'écrire le code."
            />
            <PiegeCard
              num="02"
              titre="La session devient confuse"
              parade={
                <>
                  Une session = une tâche. <code>/clear</code> entre deux
                  features. Sinon le contexte précédent pollue la suivante
                  et ça coûte des tokens pour rien.
                </>
              }
            />
            <PiegeCard
              num="03"
              titre="On corrige en boucle, ça marche pas"
              parade={
                <>
                  Après 2 corrections ratées : <code>/clear</code> et
                  reformulez le prompt initial en intégrant ce qui a raté.
                  Continuer à corriger empire toujours la situation.
                </>
              }
            />
            <PiegeCard
              num="04"
              titre="On accepte sans relire"
              parade="Avant chaque commit, lisez le diff. Cherchez : cas limites non gérés, fichiers modifiés en plus, console.log oubliés. 30 secondes de relecture économisent 30 minutes de debug."
            />
            <PiegeCard
              num="05"
              titre="Tout demander d'un coup"
              parade={`"Crée toute l'appli avec login, dashboard, profil, API et BDD". Non. Une feature, un commit, on avance petit. Le mode plan vous force à découper.`}
            />
            <PiegeCard
              num="06"
              titre="YOLO sans Git"
              parade="Commiter avant chaque session Claude Code. C'est le filet de sécurité. Si tout part en sucette, vous pouvez revenir au dernier commit en 2 secondes."
            />
            <PiegeCard
              num="07"
              titre="Compte partagé mal géré"
              parade="Un seul actif à la fois. Tour de rôle. /clear et déconnexion à la fin de votre tour. Sinon le quota saute pour tout le groupe."
            />
          </div>
        </section>

        {/* ── CONCLUSION ── */}
        <section>
          <h2>Pour ensuite</h2>
          <p>
            À la fin de J2, vous devriez avoir : un repo GitHub avec{" "}
            <code>main</code> protégée, un <code>CLAUDE.md</code> personnalisé,
            une spec claire de la V1, au moins une feature mergée, un
            premier déploiement Vercel qui répond à une URL publique. Si
            vous avez tout ça, vous êtes très bien partis.
          </p>
          <p>
            J3 (mardi 6 mai) sera consacré aux tests utilisateurs et à
            l'itération. C'est là que le vrai apprentissage commence :
            confronter ce que vous avez construit à de vraies personnes,
            écouter, prioriser les retours, itérer avec Claude Code. Voir
            le <Link href="/brief#j3">brief J3</Link> pour la suite.
          </p>
          <p>
            Pendant que vous bossez, n'oubliez pas de remplir les infos de
            votre groupe : <Link href="/groupes">groupes étudiants</Link>{" "}
            (URL de l'app, repo GitHub, checklist Vercel/GitHub, outils IA
            utilisés). Ça me permet de suivre votre avancement entre les
            séances.
          </p>
        </section>
      </div>

      <div className="mt-16 flex items-center justify-between">
        <Link href="/brief" className="retour-link">
          &larr; Brief projet
        </Link>
        <Link href="/ressources" className="retour-link">
          Ressources &rarr;
        </Link>
      </div>
    </article>
  );
}

/* ────────────────────────────────────────────────
   COMPOSANTS LOCAUX
   ──────────────────────────────────────────────── */

function PiegeCard({
  num,
  titre,
  parade,
}: {
  num: string;
  titre: string;
  parade: React.ReactNode;
}) {
  return (
    <div
      className="p-5"
      style={{
        background: "#FAF7F1",
        border: "1px solid rgba(0,0,0,0.08)",
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
        Piège {num}
      </div>
      <div
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "1.2rem",
          letterSpacing: "0.01em",
          color: "#1A1714",
          marginBottom: "0.75rem",
          lineHeight: "1.15",
        }}
      >
        {titre}
      </div>
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "0.95rem",
          color: "#4B4540",
          lineHeight: "1.55",
          fontStyle: "italic",
          margin: 0,
        }}
      >
        {parade}
      </p>
    </div>
  );
}

/* ────────────────────────────────────────────────
   SCHÉMA SVG — GIT VULGARISÉ
   ──────────────────────────────────────────────── */

function GitVulgarise() {
  return (
    <svg
      viewBox="0 0 760 320"
      role="img"
      aria-label="Schéma vulgarisé du fonctionnement de Git"
    >
      {/* Ligne MAIN */}
      <text
        x={40}
        y={50}
        fontFamily="'DM Mono', monospace"
        fontSize="11"
        fill="#1A1714"
        letterSpacing="1.5"
      >
        MAIN
      </text>
      <text
        x={40}
        y={66}
        fontFamily="'Crimson Pro', serif"
        fontStyle="italic"
        fontSize="11"
        fill="#8C8680"
      >
        la vraie appli, en ligne
      </text>
      <line
        x1={40}
        y1={100}
        x2={720}
        y2={100}
        stroke="#1A1714"
        strokeWidth="2"
      />

      {/* commits sur main */}
      {[100, 290, 540, 680].map((x, i) => (
        <g key={`m${i}`}>
          <circle cx={x} cy={100} r={7} fill="#1A1714" />
        </g>
      ))}

      {/* Branche feature 1 — formulaire */}
      <path
        d="M 100 100 Q 140 100 140 180 L 270 180 Q 270 100 290 100"
        fill="none"
        stroke="#F97316"
        strokeWidth="2"
      />
      <circle cx={180} cy={180} r={6} fill="#F97316" />
      <circle cx={230} cy={180} r={6} fill="#F97316" />
      <text
        x={140}
        y={205}
        fontFamily="'DM Mono', monospace"
        fontSize="9"
        fill="#F97316"
        letterSpacing="1"
      >
        FEATURE/FORMULAIRE
      </text>
      <text
        x={140}
        y={220}
        fontFamily="'Crimson Pro', serif"
        fontStyle="italic"
        fontSize="10"
        fill="#8C8680"
      >
        Léa code en parallèle, sans toucher main
      </text>

      {/* Branche feature 2 — page profil */}
      <path
        d="M 290 100 Q 340 100 340 250 L 490 250 Q 490 100 540 100"
        fill="none"
        stroke="#F97316"
        strokeWidth="2"
      />
      <circle cx={400} cy={250} r={6} fill="#F97316" />
      <circle cx={450} cy={250} r={6} fill="#F97316" />
      <text
        x={340}
        y={275}
        fontFamily="'DM Mono', monospace"
        fontSize="9"
        fill="#F97316"
        letterSpacing="1"
      >
        FEATURE/PAGE-PROFIL
      </text>
      <text
        x={340}
        y={290}
        fontFamily="'Crimson Pro', serif"
        fontStyle="italic"
        fontSize="10"
        fill="#8C8680"
      >
        Mateo bosse de son côté pendant ce temps
      </text>

      {/* Annotations sur main */}
      <text
        x={100}
        y={85}
        textAnchor="middle"
        fontFamily="'Crimson Pro', serif"
        fontStyle="italic"
        fontSize="10"
        fill="#8C8680"
      >
        départ
      </text>
      <text
        x={290}
        y={85}
        textAnchor="middle"
        fontFamily="'DM Mono', monospace"
        fontSize="9"
        fill="#1A1714"
        letterSpacing="0.8"
      >
        MERGE PR #1
      </text>
      <text
        x={540}
        y={85}
        textAnchor="middle"
        fontFamily="'DM Mono', monospace"
        fontSize="9"
        fill="#1A1714"
        letterSpacing="0.8"
      >
        MERGE PR #2
      </text>
      <text
        x={680}
        y={85}
        textAnchor="middle"
        fontFamily="'Crimson Pro', serif"
        fontStyle="italic"
        fontSize="10"
        fill="#8C8680"
      >
        suite…
      </text>
    </svg>
  );
}
