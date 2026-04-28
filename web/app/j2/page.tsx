import Link from "next/link";

export const metadata = {
  title: "Guide J2 — Cours YNOV",
  description:
    "Guide pratique du jour 2 : Git expliqué simplement, Claude Design, Claude Code, premier déploiement. Avec prompts copy-paste prêts à l'emploi.",
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
          marginBottom: "1.25rem",
        }}
      >
        De l'idée à un repo qui tourne, sans se planter dès le premier prompt.
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
        Le planning détaillé reste sur le{" "}
        <Link
          href="/brief#j2"
          style={{ color: "#F97316", textDecoration: "underline" }}
        >
          brief
        </Link>
        . Cette page est le mode d'emploi.
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
              Git, en 5 minutes
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
              Étape 4 — Le premier prompt
            </a>
          </li>
          <li>
            <a href="#cycle" style={{ color: "inherit" }}>
              Étape 5 — Le cycle quotidien
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
            J2, c'est la journée où une idée devient une vraie app. Un seul
            piège, mais énorme : aller trop vite. Demander à Claude
            de "construire l'appli" d'un coup. Accepter le premier mockup.
            Pousser sur main parce que c'est plus simple. Vous le payerez cher.
          </p>
          <div className="callout">
            <span className="callout-label">La règle d'or de la journée</span>
            <p>
              Avant de coder, l'IA doit comprendre. Avant qu'elle comprenne,
              vous la laissez poser des questions. Avant qu'elle touche un
              fichier, elle vous montre son plan.
            </p>
          </div>
        </section>

        {/* ── 1. GIT VULGARISÉ ── */}
        <section id="git">
          <h2>01 — Git, en 5 minutes</h2>
          <h3>Vraiment, cette fois</h3>
          <p>
            Si J1 vous a perdus sur Git, c'est normal. Voici la version qui
            vous suffit pour J2.
          </p>

          <h4>La métaphore qui marche</h4>
          <p>
            Git, c'est un Google Docs avec un historique infini, sauf que
            c'est <strong>vous</strong> qui choisissez quand sauvegarder. Et
            au lieu d'écrire à plusieurs sur le même document en même temps
            (catastrophe), chacun travaille sur sa propre copie en parallèle.
            Quand c'est prêt, on assemble proprement.
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
              <strong>repo</strong> — le dossier du projet sur GitHub. Un seul
              par groupe.
            </li>
            <li>
              <strong>branche</strong> — une copie parallèle où vous bossez
              sans toucher la version qui marche. Une branche par feature.
            </li>
            <li>
              <strong>commit</strong> — une sauvegarde, avec un petit message
              qui dit ce qui change.
            </li>
            <li>
              <strong>push</strong> — envoyer ses sauvegardes sur GitHub.
            </li>
            <li>
              <strong>pull request (PR)</strong> — demander à intégrer sa
              branche dans la version principale.
            </li>
            <li>
              <strong>merge</strong> — la PR est validée, votre travail rejoint
              <code>main</code>. Bravo.
            </li>
          </ul>

          <div className="callout">
            <span className="callout-label">Rassurez-vous</span>
            <p>
              Vous ne tapez aucune commande. Vous parlez à Claude en français,
              il s'occupe de tout. Comprendre le vocabulaire ci-dessus suffit
              pour ne pas paniquer quand un message rouge tombe.
            </p>
          </div>

          <h4>Le rituel à apprendre par cœur</h4>
          <p>
            Vous allez répéter ce mini-protocole 10 fois dans la journée. C'est
            tout ce qu'il y a à savoir.
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
              Avant de commencer une feature
            </div>
            <ol
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.98rem",
                lineHeight: "1.7",
                color: "#2D2926",
                paddingLeft: "1.25rem",
                marginBottom: "1.5rem",
              }}
            >
              <li>
                Dire à Claude : <em>« récupère le travail des autres et
                crée-moi une branche pour la feature X »</em>.
              </li>
              <li>
                Décrire la feature, lui demander un plan, valider, coder.
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
              start={3}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.98rem",
                lineHeight: "1.7",
                color: "#2D2926",
                paddingLeft: "1.25rem",
              }}
            >
              <li>Relire ce que Claude a écrit. Vraiment.</li>
              <li>
                Lui dire : <em>« sauvegarde, envoie sur GitHub et ouvre la
                pull request »</em>. Il fait tout.
              </li>
              <li>
                Un binôme du groupe va sur GitHub, relit la PR, valide, merge.
              </li>
            </ol>
          </div>

          <div className="callout">
            <span className="callout-label">La règle absolue</span>
            <p>
              Personne ne touche à <code>main</code> directement. Toujours via
              une branche + une PR. C'est la règle qui évite 80% des problèmes
              en groupe.
            </p>
          </div>
        </section>

        {/* ── 2. TOKENS ── */}
        <section id="tokens">
          <h2>02 — Attention à votre crédit</h2>
          <h3>Le piège du compte partagé</h3>
          <p>
            Vous avez tous Claude Pro à 20€. Largement suffisant, mais avec
            une limite par tranche de 5h. Et Claude Design consomme beaucoup
            plus de crédit qu'une conversation texte (il génère et lit des
            images).
          </p>

          <div className="callout">
            <span className="callout-label">Cas concret</span>
            <p>
              Un groupe partage un seul compte Pro. Quelqu'un grille la limite
              à 11h en lançant 8 brouillons Claude Design. Plus personne ne
              peut bosser jusqu'à 16h. C'est le scénario à éviter.
            </p>
          </div>

          <h4>Si vous partagez un compte</h4>
          <ul>
            <li>
              <strong>Un seul actif à la fois</strong>. Jamais en parallèle.
            </li>
            <li>
              <strong>Tour de rôle</strong> : un binôme bosse 1h, l'autre relit
              et prépare le prompt suivant sur papier. Puis on échange.
            </li>
            <li>
              <strong>À la fin de votre tour</strong> : taper{" "}
              <code>/clear</code> dans Claude Code, et déconnexion. Pas de
              session zombie.
            </li>
          </ul>

          <h4>Les 5 réflexes anti-gaspillage</h4>
          <ol>
            <li>
              <strong>Mode plan systématique</strong> dès qu'on touche à plus
              d'un fichier. <code>Shift+Tab</code> dans Claude Code pour
              l'activer.
            </li>
            <li>
              <strong>
                <code>/clear</code> entre deux features
              </strong>
              . Une session = une tâche.
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
              fichiers précis.
            </li>
            <li>
              <strong>Sur Claude Design : pas de 10 brouillons</strong>. Brief
              précis dès le départ, 2-3 itérations max.
            </li>
          </ol>
        </section>

        {/* ── 3. CLAUDE DESIGN ── */}
        <section id="design">
          <h2>03 — Étape 1 : mocker l'UI</h2>
          <h3>Avec Claude Design</h3>
          <p>
            Avant de coder, on dessine. Contre-intuitif quand l'IA code en 30
            secondes, mais c'est ce qui sauve le plus de temps dans la journée.
            Mocker, c'est forcer le groupe à se mettre d'accord avant que
            Claude génère 200 lignes de code à jeter.
          </p>

          <p>
            Allez sur <a href="https://claude.ai/design">claude.ai/design</a>
            {" "}(inclus dans votre Pro). Décrivez votre UI en français, Claude
            génère un mockup interactif, exportable directement vers Claude
            Code.
          </p>

          <PromptBlock
            label="Prompt — Brief design (exemple Relay)"
            text={`On va concevoir l'écran principal de Relay, une appli d'entraide entre étudiants Ynov. Quelqu'un a un besoin urgent (matériel, avis sur un projet, test utilisateur), il publie une demande, et un autre étudiant à proximité y répond en moins de 5 minutes.

Avant de proposer un mockup, pose-moi 5 questions max pour clarifier : la cible, les actions clés sur l'écran, ce qui doit sauter aux yeux, le style visuel souhaité.

Ne génère rien tant que tu n'as pas mes réponses.`}
          />

          <p>
            Pourquoi forcer les questions : sans ça, Claude génère un mockup
            générique qui ressemble à toutes les apps étudiantes. Avec ça, le
            mockup colle vraiment à votre projet.
          </p>

          <h4>Itérer 2-3 fois max</h4>
          <p>
            Une fois le mockup généré, vous itérez sur des points précis. Pas
            sur "tout refaire".
          </p>

          <PromptBlock
            label="Prompt — Itération ciblée (exemple Fix My Slide)"
            text={`Le mockup est presque bon. Trois changements précis :
1. Le bouton "Importer mes slides" doit être beaucoup plus visible, c'est l'action principale.
2. Les commentaires anonymes apparaissent sous chaque slide, pas dans une colonne séparée.
3. Plus de gris, moins de bleu. On veut un truc qui rassure, pas qui ressemble à LinkedIn.

Garde tout le reste identique.`}
          />

          <div className="callout">
            <span className="callout-label">Économie de crédit</span>
            <p>
              Une génération Claude Design ≈ 5 messages texte en coût. Réfléchissez
              à votre prompt avant de cliquer. 30 secondes à reformuler valent
              mieux qu'une génération qui rate.
            </p>
          </div>

          <h4>Le handoff vers Claude Code</h4>
          <p>
            Quand le mockup vous va : bouton{" "}
            <strong>Send to Claude Code</strong> en haut à droite. Ça transmet
            tout (composants, couleurs, layout) directement dans votre projet.
            Pas besoin de copier quoi que ce soit à la main.
          </p>
        </section>

        {/* ── 4. REPO GITHUB ── */}
        <section id="repo">
          <h2>04 — Étape 2 : créer le repo</h2>
          <h3>Sur GitHub, en 10 minutes</h3>
          <p>
            Un repo par groupe. Naming convenu :{" "}
            <code>campus-helper-gX</code> (votre numéro de groupe). Une seule
            personne le crée, puis invite les autres.
          </p>

          <ol>
            <li>
              Aller sur{" "}
              <a href="https://github.com/new">github.com/new</a>.
            </li>
            <li>
              Nom : <code>campus-helper-g1</code> (votre numéro). Public. Ne
              cocher aucune case (Claude créera tout).
            </li>
            <li>
              Une fois créé : <strong>Settings → Collaborators</strong>,
              ajouter les 3 autres membres avec leur pseudo GitHub.
            </li>
            <li>
              <strong>Settings → Branches → Add branch protection rule</strong>{" "}
              pour <code>main</code>. Cocher "Require a pull request before
              merging". Filet de sécurité gratuit.
            </li>
          </ol>

          <p>
            Pour cloner le repo en local :{" "}
            <em>« Claude, clone le repo [URL GitHub] dans mon dossier
            projets »</em>. Il s'occupe de tout.
          </p>
        </section>

        {/* ── 5. INIT + CLAUDE.md ── */}
        <section id="init">
          <h2>05 — Étape 3 : Claude Code + CLAUDE.md</h2>
          <h3>Le fichier qui change tout</h3>

          <p>
            Une fois dans votre dossier projet, lancez Claude Code (
            <code>claude</code> dans le terminal) puis tapez{" "}
            <code>/init</code>. Ça analyse le projet et génère un{" "}
            <code>CLAUDE.md</code> de base. Vous allez ensuite le compléter.
          </p>

          <h4>Le CLAUDE.md de votre groupe</h4>
          <p>
            Ce fichier est lu par Claude à chaque session, par n'importe qui
            dans votre groupe. C'est la "constitution" de votre projet. Court
            et précis &gt; encyclopédique.
          </p>

          <p>
            Demandez à Claude :{" "}
            <em>« remplace le CLAUDE.md actuel par le template ci-dessous,
            en gardant les zones [À REMPLIR] vides »</em>, en collant ce
            template :
          </p>

          <pre><code>{`# Campus Helper — [NOM DU PROJET]

## Le projet
[À REMPLIR : 1 phrase claire de ce que fait l'app]

## Cible utilisateur
[À REMPLIR : qui exactement, en 1-2 lignes]

## Le problème résolu
[À REMPLIR : 2-3 phrases sur le problème concret]

## Stack imposée par le cours
- Next.js 16 + TypeScript + Tailwind CSS
- shadcn/ui pour les composants
- SQLite en dev, Vercel Postgres en prod si besoin
- Déploiement Vercel via push sur main

## DA (direction artistique)
[À REMPLIR : palette de couleurs, ambiance — sortir
du mockup Claude Design une fois validé]

## Git — règles absolues
- Branches : feature/<scope> ou fix/<scope>
- Jamais de push direct sur main, toujours via PR
- 1 PR = 1 binôme la review avant merge

## Comportement attendu de l'IA
- Pose des questions si la demande est ambiguë (max 5)
- Propose un plan avant de toucher au code dès que
  ça touche plus d'un fichier
- Ne modifie pas plus de 3 fichiers sans validation
- N'invente pas de librairies, vérifie les imports
- Quand un test rate, fixe la cause, ne supprime pas
  le test`}</code></pre>

          <p>
            Une fois le fichier en place, remplissez les <code>[À REMPLIR]</code>{" "}
            à 4. C'est le moment où vous figez votre projet par écrit. C'est
            précieux.
          </p>

          <div className="callout">
            <span className="callout-label">Le piège classique</span>
            <p>
              Un <code>CLAUDE.md</code> de 200 lignes, "au cas où". Claude
              ignore les règles du milieu. Mieux vaut 30 lignes lues à chaque
              fois que 200 survolées. Le fichier grossira au besoin.
            </p>
          </div>
        </section>

        {/* ── 6. PREMIER PROMPT ── */}
        <section id="premier-prompt">
          <h2>06 — Étape 4 : le premier prompt</h2>
          <h3>Mode plan + laisser l'IA poser des questions</h3>
          <p>
            Repo créé. <code>CLAUDE.md</code> en place. Mockup validé. C'est
            le moment de vérité. Tentation : taper "construis l'app". Réflexe
            à ancrer : faire l'inverse.
          </p>

          <h4>Activer le mode plan</h4>
          <p>
            Dans Claude Code, <code>Shift+Tab</code> active le{" "}
            <strong>mode plan</strong>. Claude lit, réfléchit, propose, mais
            <strong> ne touche aucun fichier</strong>. Vous validez son plan,
            ensuite seulement il code.
          </p>

          <PromptBlock
            label="Prompt — Kick-off projet (exemple Relay)"
            text={`On va construire Relay, une appli d'entraide entre étudiants Ynov pour publier une demande d'aide rapide (matériel, avis, test utilisateur) et y répondre en moins de 5 minutes.

Voici le mockup de l'écran principal : [coller le bundle Claude Design ou décrire les écrans en quelques lignes].

Avant d'écrire la moindre ligne de code, interroge-moi sur :
- les fonctionnalités essentielles vs nice-to-have
- les écrans à créer pour une V1 démontrable
- les cas limites auxquels je n'ai pas pensé
- comment on identifie un utilisateur (auth ou pas pour la V1 ?)

Pose tes questions une par une. Quand tu te sens confiant à 90%, écris une spec courte dans SPEC.md. Ne touche aucun fichier de code tant que je n'ai pas validé la spec.`}
          />

          <p>
            Claude pose 4-6 questions. Vous répondez précisément. Il écrit{" "}
            <code>SPEC.md</code>. Vous lisez, corrigez, validez. À ce stade
            seulement, on passe au code.
          </p>

          <h4>Du plan au code, étape par étape</h4>
          <p>
            Une fois la spec validée, ne demandez jamais "implémente tout".
            Demandez l'étape 1, vous relisez, vous validez. Puis l'étape 2.
            C'est le seul moyen de garder le contrôle.
          </p>

          <PromptBlock
            label="Prompt — Passer à l'implémentation"
            text={`OK pour la spec. Implémente seulement l'étape 1 du plan : la page d'accueil avec le formulaire de publication d'une demande.

Ne touche aucun autre fichier. Quand c'est fait, arrête-toi pour que je relise et qu'on sauvegarde avant de passer à l'étape 2.`}
          />

          <h4>Variations selon votre projet</h4>
          <ul>
            <li>
              <strong>Study Vibes</strong> — insister sur la dimension
              sociale : <em>« L'app sert à provoquer des rencontres entre
              étudiants qui ne se connaissent pas. La friction d'inscription
              doit être minimale. »</em>
            </li>
            <li>
              <strong>JobyMatch</strong> — préciser les deux profils :{" "}
              <em>« Deux types d'utilisateurs avec des besoins opposés
              (étudiant qui cherche, recruteur qui propose). Demande-moi
              comment on gère cette dualité dans la V1. »</em>
            </li>
            <li>
              <strong>Campus Pitch / Fix My Slide</strong> — insister sur le
              cœur : <em>« L'utilisateur upload une présentation, il reçoit
              du feedback. Tout le reste est secondaire. Demande-moi comment
              on gère l'upload. »</em>
            </li>
          </ul>
        </section>

        {/* ── 7. CYCLE QUOTIDIEN ── */}
        <section id="cycle">
          <h2>07 — Étape 5 : le cycle quotidien</h2>
          <h3>Tout en parlant à Claude, en français</h3>

          <p>Une journée type, en 5 phrases :</p>

          <ol>
            <li>
              <em>« Récupère le travail des autres et crée-moi une branche
              pour [la feature] »</em>.
            </li>
            <li>
              Vous décrivez la feature en français. Claude pose des questions,
              propose un plan (mode plan). Vous validez.
            </li>
            <li>
              Claude code. Vous relisez. Vous testez (ouvrez le navigateur,
              cliquez partout).
            </li>
            <li>
              <em>« Sauvegarde, envoie sur GitHub et ouvre la pull
              request »</em>. Claude écrit un commit propre, pousse, ouvre la
              PR. Vous n'avez rien tapé d'autre.
            </li>
            <li>
              Un binôme va sur GitHub, lit le diff, teste si possible, valide,
              merge.
            </li>
          </ol>

          <h4>Les conventions du cours</h4>
          <ul>
            <li>
              Branches feature :{" "}
              <code>feature/&lt;scope&gt;-&lt;descriptif-court&gt;</code>.
              Exemples : <code>feature/relay-formulaire-publication</code>,{" "}
              <code>feature/jobymatch-page-recruteur</code>,{" "}
              <code>feature/study-vibes-feed-activites</code>.
            </li>
            <li>
              Branches fix :{" "}
              <code>fix/&lt;scope&gt;-&lt;ce-qui-est-cassé&gt;</code>. Exemple :{" "}
              <code>fix/fix-my-slide-upload-pdf-cassé</code>.
            </li>
            <li>
              Claude utilise les commits "conventional" automatiquement (
              <code>feat:</code>, <code>fix:</code>, <code>chore:</code>).
              Vous n'avez pas à y penser.
            </li>
          </ul>

          <h4>La review entre binômes</h4>
          <p>
            Une PR n'est jamais mergée par celui qui l'a écrite. Un autre
            membre ouvre la PR sur GitHub, lit le diff, teste si possible,
            commente si quelque chose cloche, approuve, merge en squash. 5
            minutes qui peuvent sauver 2 heures de débogage.
          </p>

          <div className="callout">
            <span className="callout-label">Si Claude se plante en cours de feature</span>
            <p>
              Pas de panique : votre branche est isolée. Tant que la PR n'est
              pas mergée, <code>main</code> reste intacte. Dites simplement à
              Claude : <em>« annule les modifs non sauvegardées »</em> ou{" "}
              <em>« reviens à la dernière sauvegarde qui marchait »</em>. Il
              gère.
            </p>
          </div>
        </section>

        {/* ── 8. PIEGES ── */}
        <section id="pieges">
          <h2>08 — Les 7 pièges à éviter</h2>
          <h3>À garder en tête toute la journée</h3>

          <div className="grid sm:grid-cols-2 gap-4 my-6">
            <PiegeCard
              num="01"
              titre="L'IA invente des librairies"
              parade="Mettez les liens des docs officielles dans le CLAUDE.md ou dans le prompt. Demandez-lui de vérifier que les imports existent avant d'écrire."
            />
            <PiegeCard
              num="02"
              titre="La session devient confuse"
              parade={
                <>
                  Une session = une tâche. <code>/clear</code> entre deux
                  features. Sinon le contexte précédent pollue la suivante et
                  ça coûte du crédit pour rien.
                </>
              }
            />
            <PiegeCard
              num="03"
              titre="On corrige en boucle, ça ne marche pas"
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
              parade="Avant chaque sauvegarde, lisez ce que Claude a changé. Cherchez les cas limites non gérés. 30 secondes de relecture économisent 30 minutes de debug."
            />
            <PiegeCard
              num="05"
              titre="Tout demander d'un coup"
              parade={`"Crée toute l'appli avec login, dashboard, profil, API et BDD". Non. Une feature, une sauvegarde, on avance petit. Le mode plan vous force à découper.`}
            />
            <PiegeCard
              num="06"
              titre="Bosser sans sauvegarder"
              parade="Dites à Claude de sauvegarder avant chaque grosse session. Si tout part en sucette, vous revenez à la dernière sauvegarde en 2 secondes."
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
          <p>À la fin de J2, vous devriez avoir :</p>
          <ul>
            <li>
              un repo GitHub avec <code>main</code> protégée
            </li>
            <li>
              un <code>CLAUDE.md</code> personnalisé, rempli
            </li>
            <li>une spec claire de la V1</li>
            <li>au moins une feature mergée</li>
            <li>un premier déploiement Vercel sur une URL publique</li>
          </ul>
          <p>Si vous avez tout ça, vous êtes très bien partis.</p>
          <p>
            J3 (mardi 6 mai) sera consacré aux tests utilisateurs et à
            l'itération. C'est là que le vrai apprentissage commence. Voir le{" "}
            <Link href="/brief#j3">brief J3</Link> pour la suite.
          </p>
          <p>
            Pendant que vous bossez, remplissez les infos de votre groupe sur{" "}
            <Link href="/groupes">la page groupes</Link> (URL de l'app, repo,
            checklist, outils IA). Ça me permet de suivre votre avancement
            entre les séances.
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

function PromptBlock({ label, text }: { label: string; text: string }) {
  return (
    <div
      style={{
        background: "#FAF7F1",
        border: "1px solid rgba(0,0,0,0.1)",
        borderLeft: "3px solid #F97316",
        borderRadius: "2px",
        padding: "1.25rem 1.5rem",
        margin: "1.75rem 0",
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "10px",
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "#F97316",
          marginBottom: "0.85rem",
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.85rem",
          lineHeight: "1.7",
          color: "#1A1714",
          whiteSpace: "pre-wrap",
        }}
      >
        {text}
      </div>
    </div>
  );
}

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

      {/* Branche feature 1 */}
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

      {/* Branche feature 2 */}
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
