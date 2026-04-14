import Link from "next/link";

export const metadata = {
  title: "Théorie J1 — Cours YNOV",
  description:
    "Le cours théorique du jour 1 : IA, machine learning, LLM, Claude Code, anatomie d'une application web, Git et vibe coding.",
};

export default function TheoriePage() {
  return (
    <article className="px-6 sm:px-10 pt-10 pb-6">
      <Link href="/" className="retour-link">
        &larr; Retour
      </Link>

      <div className="mt-8 mb-4">
        <span className="pill accent">Jour 1 &middot; 15 avril 2026</span>
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
        LE COURS THÉORIQUE.
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
        Tout ce qu'il faut avoir en tête avant de démarrer le projet. Sept
        chapitres, lisibles d'une traite en une matinée, à relire pendant les
        intercours.
      </p>

      <nav
        className="mb-12 p-5"
        style={{
          background: "#FAF7F1",
          border: "1px solid rgba(0,0,0,0.06)",
        }}
      >
        <div
          className="eyebrow no-line mb-3"
          style={{ fontSize: "10px" }}
        >
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
          <li><a href="#genese" style={{ color: "inherit" }}>Genèse : comment on en est arrivé à l'IA d'aujourd'hui</a></li>
          <li><a href="#poupees" style={{ color: "inherit" }}>IA, machine learning, deep learning, LLM : le rangement</a></li>
          <li><a href="#llm" style={{ color: "inherit" }}>Comment fonctionne un LLM, vraiment</a></li>
          <li><a href="#claude-code" style={{ color: "inherit" }}>Claude Code : un LLM + des outils + tes fichiers</a></li>
          <li><a href="#anatomie" style={{ color: "inherit" }}>L'anatomie d'une application web</a></li>
          <li><a href="#git" style={{ color: "inherit" }}>Git & GitHub : travailler à plusieurs sans tout casser</a></li>
          <li><a href="#vibe" style={{ color: "inherit" }}>Vibe coding : la méthode qu'on va utiliser</a></li>
        </ol>
      </nav>

      <div className="cours-prose">
        {/* ── INTRO ── */}
        <section>
          <h2>Avant de commencer</h2>
          <p>
            On va parler de choses qui peuvent sembler intimidantes :
            intelligence artificielle, modèles de langage, architectures
            logicielles, Git. La plupart d'entre vous n'ont jamais écrit une
            ligne de code sérieusement. C'est très bien. Ce cours n'a pas été
            conçu pour faire de vous des ingénieurs logiciel. Il a été conçu
            pour vous rendre capables, en quatre journées, de transformer une
            idée en produit qu'on peut ouvrir dans un navigateur et utiliser.
          </p>
          <p>
            Pour y arriver, il faut comprendre trois choses dans l'ordre :{" "}
            <strong>ce qu'est l'IA qu'on va utiliser</strong> (pour ne pas lui
            demander l'impossible), <strong>
              comment une application est construite
            </strong>{" "}
            (pour savoir quoi lui demander), et <strong>
              comment on travaille à plusieurs
            </strong>{" "}
            (pour ne pas perdre une journée entière à résoudre un conflit Git).
            C'est tout ce qu'il y a dans ce cours.
          </p>
          <blockquote>
            La tech n'est pas magique. Elle est rendue accessible. Nuance
            importante, parce que tout ce qui n'est pas magique peut se
            comprendre.
          </blockquote>
        </section>

        {/* ── 1. GENESE ── */}
        <section id="genese">
          <h2>01 — Genèse</h2>
          <h3>Comment on en est arrivé à l'IA d'aujourd'hui</h3>
          <p>
            L'intelligence artificielle, en tant que discipline, a commencé
            dans les années 1950. Pas dans un laboratoire de la Silicon Valley :
            dans une salle de séminaire à Dartmouth, aux États-Unis, en 1956.
            Une poignée de mathématiciens se posent une question simple : est-ce
            qu'une machine peut, en principe, simuler n'importe quel aspect de
            l'intelligence humaine ? Ils s'accordent 8 semaines pour y
            répondre. Ils n'y arrivent pas. Ça va leur prendre 70 ans.
          </p>

          <div className="figure">
            <FriseHistorique />
            <div className="figure-caption">
              70 ans d'IA, six moments qui comptent
            </div>
          </div>

          <p>
            Pendant longtemps, les chercheurs essaient de programmer
            l'intelligence avec des règles. Si ceci, alors cela. Ça marche pour
            jouer aux échecs (Deep Blue bat Kasparov en 1997), ça ne marche
            pas du tout pour reconnaître un chat sur une photo. Le problème,
            c'est qu'on ne sait pas écrire la règle "qu'est-ce qu'un chat".
          </p>
          <p>
            Alors on change de stratégie. Plutôt que d'écrire les règles, on
            montre à la machine des milliers d'exemples et on la laisse déduire
            les règles elle-même. C'est ça, le{" "}
            <strong>machine learning</strong> : apprendre à partir de données,
            pas à partir d'instructions. Cette bascule est définitivement
            validée en 2012, quand un modèle appelé AlexNet, entraîné sur des
            millions d'images, écrase la compétition ImageNet.
          </p>
          <p>
            Cinq ans plus tard, en 2017, des chercheurs de Google publient un
            article au titre anodin : <em>Attention is all you need</em>. Ils
            y décrivent une nouvelle architecture de réseau de neurones,
            appelée Transformer. C'est l'ancêtre direct de tous les grands
            modèles de langage d'aujourd'hui. Cinq ans plus tard encore, en
            novembre 2022, OpenAI met en ligne une interface qui permet de
            discuter avec un de ces modèles. Elle s'appelle ChatGPT. Elle
            atteint 100 millions d'utilisateurs en deux mois. C'est le moment
            où l'IA sort des laboratoires et rentre dans les foyers.
          </p>
          <p>
            Depuis, la course est continue. Anthropic, OpenAI, Google,
            Mistral, DeepSeek : chaque acteur publie de nouvelles versions tous
            les trois à six mois, chacune plus capable que la précédente.
            Claude Opus 4.6, que vous allez utiliser dans ce cours, est sorti
            en début 2026. L'année dernière, il n'existait pas.
          </p>
          <div className="callout">
            <span className="callout-label">À retenir</span>
            <p>
              L'IA n'est pas un miracle. C'est 70 ans de recherche, 10 ans de
              traitement massif de données, et 5 ans de modèles à grande
              échelle. On n'est pas devant quelque chose qu'on ne peut pas
              comprendre. On est devant quelque chose qu'on peut enfin
              utiliser.
            </p>
          </div>
        </section>

        {/* ── 2. POUPEES RUSSES ── */}
        <section id="poupees">
          <h2>02 — Rangement</h2>
          <h3>IA, machine learning, deep learning, LLM</h3>
          <p>
            Ces quatre termes sont souvent utilisés comme s'ils étaient
            interchangeables. Ils ne le sont pas. Ils désignent des cercles de
            plus en plus précis, emboîtés les uns dans les autres.
          </p>

          <div className="figure">
            <PoupeesRusses />
            <div className="figure-caption">
              Quatre cercles, du plus large au plus précis
            </div>
          </div>

          <p>
            <strong>L'intelligence artificielle</strong>, au sens large, c'est
            n'importe quelle machine capable de réaliser une tâche qui, si un
            humain la faisait, demanderait de l'intelligence. Un algorithme qui
            calcule le trajet le plus court entre deux points, c'est de l'IA.
            Un filtre anti-spam, c'est de l'IA. Ça n'a rien de magique.
          </p>
          <p>
            <strong>Le machine learning</strong> est une sous-discipline de
            l'IA. Au lieu de coder la solution à la main, on donne à la machine
            un gros paquet d'exemples et un objectif, et on la laisse apprendre
            à atteindre cet objectif toute seule. C'est comme apprendre à
            reconnaître un chien à un enfant : on ne lui liste pas les
            caractéristiques du chien, on lui montre plein de chiens.
          </p>
          <p>
            <strong>Le deep learning</strong> est une technique de machine
            learning basée sur des "réseaux de neurones" profonds, c'est-à-dire
            avec beaucoup de couches. Plus il y a de couches, plus le modèle
            peut capturer des nuances complexes. C'est ce qui a rendu possibles
            la reconnaissance d'image, la traduction automatique, la synthèse
            vocale.
          </p>
          <p>
            <strong>Les grands modèles de langage (LLM)</strong>, enfin, sont
            une catégorie particulière de modèles de deep learning, spécialisés
            sur le texte. GPT-4, Claude, Gemini, Llama, Mistral : ce sont tous
            des LLM. Ils partagent la même idée de base, qu'on va détailler
            maintenant.
          </p>
        </section>

        {/* ── 3. COMMENT FONCTIONNE UN LLM ── */}
        <section id="llm">
          <h2>03 — LLM</h2>
          <h3>Comment ça fonctionne vraiment</h3>
          <p>
            Un LLM fait, en réalité, une seule chose :{" "}
            <strong>
              prédire le mot suivant dans un texte
            </strong>
            . C'est tout. Rien de plus. Le reste est une conséquence.
          </p>
          <p>
            Quand vous écrivez <em>"La capitale de la France est"</em>, le
            modèle regarde votre texte, et parmi tous les mots possibles qui
            pourraient venir ensuite, il choisit celui qui a la plus grande
            probabilité. "Paris", avec une confiance écrasante. Puis il
            recommence. Il ajoute "Paris" au texte, regarde le nouveau texte, et
            prédit le mot suivant. "Paris", puis ",", puis "une", puis "ville",
            et ainsi de suite.
          </p>

          <div className="figure">
            <LLMPrediction />
            <div className="figure-caption">
              Le modèle prédit un mot à la fois, en boucle
            </div>
          </div>

          <p>
            Pour arriver à faire ça correctement, le modèle a été entraîné sur
            à peu près tout ce qui a été écrit et rendu public sur Internet.
            Wikipédia, livres, articles, code source, forums. Pendant plusieurs
            mois, sur des milliers de cartes graphiques. Ce qu'il a réellement
            appris, ce ne sont pas les mots eux-mêmes : c'est une représentation
            mathématique ultra-compressée des régularités du langage humain. Des
            motifs : comment les phrases sont construites, comment les concepts
            s'enchaînent, comment on raisonne à l'écrit.
          </p>
          <p>
            C'est ce qui explique pourquoi un LLM peut répondre à une question
            qu'il n'a jamais vue : il n'a pas mémorisé des réponses, il a
            appris les structures qui permettent de les produire. C'est aussi
            ce qui explique pourquoi il peut inventer des choses (on appelle
            ça des <em>hallucinations</em>) : quand il ne sait pas, il produit
            quand même une suite plausible, parce que son seul job est de
            prédire la suite la plus probable.
          </p>

          <h4>La fenêtre de contexte : ce que le modèle "voit"</h4>
          <p>
            Quand vous discutez avec un LLM, vous lui envoyez du texte.
            L'ensemble de ce texte, plus ses propres réponses, plus les
            instructions système, plus les fichiers que vous lui partagez,
            tout ça rentre dans ce qu'on appelle la <strong>
              fenêtre de contexte
            </strong>. C'est la mémoire de travail du modèle, limitée en
            taille.
          </p>
          <p>
            Claude Opus 4.6 peut traiter jusqu'à 1 million de tokens dans sa
            fenêtre de contexte. Un token est à peu près un bout de mot : en
            français, un token vaut en moyenne 0,7 mot. 1 million de tokens,
            ça correspond grosso modo à <strong>
              7 livres de 300 pages
            </strong>. Pour un cours de 4 jours, c'est plus qu'il n'en faudra
            jamais.
          </p>
          <div className="callout">
            <span className="callout-label">Implication pratique</span>
            <p>
              Le modèle n'a pas de mémoire entre deux conversations. Si vous
              fermez la fenêtre et que vous en ouvrez une nouvelle, il ne se
              souvient de rien. Tout ce qu'il sait sur votre projet doit être
              soit dans le contexte, soit dans les fichiers qu'il a sous les
              yeux.
            </p>
          </div>
        </section>

        {/* ── 4. CLAUDE CODE ── */}
        <section id="claude-code">
          <h2>04 — Claude Code</h2>
          <h3>Un LLM, des outils, tes fichiers</h3>
          <p>
            Si vous ouvrez <a href="https://claude.ai">claude.ai</a>, vous
            avez un chatbot. Vous lui parlez, il vous répond. C'est pratique
            pour rédiger, pour résumer, pour expliquer. Mais un chatbot seul ne
            peut rien construire : il ne peut ni lire les fichiers de votre
            projet, ni créer de nouveau fichier, ni lancer une commande dans le
            terminal, ni installer une dépendance. Il est enfermé dans sa
            conversation.
          </p>
          <p>
            Claude Code enlève cet enfermement. C'est un programme qui tourne
            dans votre terminal. À l'intérieur, il y a le même modèle que dans
            claude.ai, mais cette fois il a des <strong>outils</strong> : il
            peut lire vos fichiers, en écrire de nouveaux, en modifier,
            exécuter des commandes shell, faire des recherches dans le code,
            installer des librairies. Il boucle ensuite sur lui-même jusqu'à
            ce que la tâche soit faite.
          </p>

          <div className="figure">
            <ClaudeCodeLoop />
            <div className="figure-caption">
              La boucle d'un agent : comprendre, agir, observer, recommencer
            </div>
          </div>

          <p>
            Concrètement, le fonctionnement ressemble à ça. Vous tapez une
            demande en langage naturel :{" "}
            <em>"Ajoute un bouton 'Se déconnecter' dans le header"</em>. Le
            modèle lit votre demande, regarde les fichiers de votre projet
            pour comprendre comment le header est construit, identifie le bon
            fichier, rédige la modification, l'applique, lance éventuellement
            un test ou un serveur local pour vérifier que rien n'est cassé, et
            vous rend la main. Vous regardez le résultat, vous validez ou vous
            demandez une correction. C'est cette boucle qu'on va utiliser
            pendant tout le cours.
          </p>
          <div className="callout">
            <span className="callout-label">Ce que Claude Code n'est pas</span>
            <p>
              Ce n'est pas un générateur de code qui crache du texte. Ce n'est
              pas non plus un copilote qui complète vos phrases. C'est un
              agent qui comprend votre projet dans son ensemble et qui prend
              des décisions. Vous gardez le contrôle : vous validez, vous
              corrigez, vous orientez. Mais c'est lui qui écrit.
            </p>
          </div>
        </section>

        {/* ── 5. ANATOMIE APP ── */}
        <section id="anatomie">
          <h2>05 — Anatomie</h2>
          <h3>Comment une application web est construite</h3>
          <p>
            Pour bien travailler avec Claude Code, il faut au moins comprendre
            dans quoi on va s'insérer. Une application web, même simple, est
            un empilement de couches qui se parlent. Voici les quatre qu'on va
            rencontrer.
          </p>

          <div className="figure">
            <AnatomieApp />
            <div className="figure-caption">
              Les quatre couches d'une application web moderne
            </div>
          </div>

          <h4>1. Le front-end : ce que l'utilisateur voit</h4>
          <p>
            C'est la partie visible de l'iceberg. Tout ce qui s'affiche dans
            le navigateur : les boutons, les couleurs, les images, les
            formulaires. Écrit principalement en{" "}
            <strong>HTML</strong> (la structure),{" "}
            <strong>CSS</strong> (l'apparence) et{" "}
            <strong>JavaScript</strong> (l'interactivité). Dans notre cours,
            on utilisera <strong>Next.js</strong>, qui est un framework
            au-dessus de JavaScript pour construire des applications modernes
            rapidement, et <strong>Tailwind</strong>, une manière plus rapide
            d'écrire du CSS. Ne vous souciez pas de ces noms maintenant :
            Claude Code connaît déjà très bien ces outils.
          </p>

          <h4>2. Le back-end : ce qui se passe en coulisses</h4>
          <p>
            Quand vous cliquez sur "S'inscrire", ce n'est pas le navigateur
            qui crée votre compte. Il envoie une requête à un serveur, qui
            reçoit, traite, sauvegarde dans une base de données, et renvoie
            une réponse. Ce serveur, c'est le back-end. Il parle des langages
            qu'on appelle "serveur" : <strong>Node.js</strong>,{" "}
            <strong>Python</strong>, <strong>Go</strong>, <strong>Ruby</strong>
            , et d'autres. Dans notre cours, comme on utilise Next.js, le
            back-end sera en JavaScript lui aussi, directement intégré dans
            le même projet. Un seul langage, une seule stack.
          </p>

          <h4>3. La base de données : la mémoire longue</h4>
          <p>
            Tout ce qu'une application doit retenir entre deux visites vit
            dans une base de données : comptes utilisateurs, messages, posts,
            préférences. C'est comme un énorme tableau Excel permanent, mais
            optimisé pour les recherches rapides. Il existe deux grandes
            familles : <strong>SQL</strong> (structurée, comme PostgreSQL,
            MySQL, SQLite) et <strong>NoSQL</strong> (plus souple, comme
            MongoDB, Firebase). Pour un prototype de 4 jours, on fera au plus
            simple : SQLite en local, ou Vercel Postgres si on déploie.
          </p>

          <h4>4. Le design system : la grammaire visuelle</h4>
          <p>
            Quand on construit une app rapidement, on n'a pas le temps de
            dessiner chaque bouton, chaque carte, chaque formulaire
            individuellement. Un design system est une collection de
            composants réutilisables (un bouton, une carte, un champ de
            formulaire) avec des règles de couleur, d'espacement et de
            typographie. Une seule fois on décide "le bouton principal est
            orange, 16px de padding, font DM Mono", et ensuite on réutilise ce
            composant partout. On utilisera <strong>shadcn/ui</strong>, une
            librairie de composants Tailwind prêts à l'emploi.
          </p>

          <div className="callout">
            <span className="callout-label">Pourquoi ça compte pour vous</span>
            <p>
              Quand Claude Code vous proposera un choix ("je mets ça dans le
              front ou dans l'API ?"), il faut pouvoir répondre. Pas besoin
              d'être expert. Il faut juste savoir : ce qui est visible =
              front, ce qui se passe après un clic = back, ce qui doit
              survivre à un refresh = base de données, ce qui se répète
              visuellement = design system.
            </p>
          </div>
        </section>

        {/* ── 6. GIT ── */}
        <section id="git">
          <h2>06 — Git & GitHub</h2>
          <h3>Travailler à plusieurs sans tout casser</h3>
          <p>
            Vous allez travailler en groupe de 4. Sans outil adapté, ça finit
            toujours pareil : deux personnes modifient le même fichier en même
            temps, on écrase le travail de l'autre, et on passe une heure à
            réparer. Git a été inventé pour éliminer ce problème. C'est un
            système de gestion de versions : il garde l'historique complet de
            toutes les modifications d'un projet, et il permet à plusieurs
            personnes de travailler en parallèle sans se marcher dessus.
          </p>
          <p>
            Git est un outil en ligne de commande. GitHub est le service en
            ligne qui héberge les projets Git et offre une interface web pour
            les gérer, discuter des modifications, et les relire avant de les
            intégrer. On va utiliser les deux ensemble.
          </p>

          <div className="figure">
            <GitFlow />
            <div className="figure-caption">
              La logique des branches : main protégée, features isolées
            </div>
          </div>

          <h4>Les cinq commandes qui couvrent 95% des cas</h4>
          <ul>
            <li>
              <code>git status</code> : savoir où j'en suis (quels fichiers
              ont été modifiés, quelle branche je suis).
            </li>
            <li>
              <code>git checkout -b ma-branche</code> : créer une nouvelle
              branche pour travailler sur une feature.
            </li>
            <li>
              <code>git add .</code> puis <code>git commit -m "message"</code>{" "}
              : sauvegarder un ensemble de modifications avec un message qui
              explique ce qui change.
            </li>
            <li>
              <code>git push</code> : envoyer mes commits sur GitHub.
            </li>
            <li>
              <code>git pull</code> : récupérer les commits des autres.
            </li>
          </ul>
          <p>
            Et c'est tout, au moins pour commencer. Claude Code sait utiliser
            Git. Vous pouvez lui demander <em>
              "commit ce qui a changé avec un message clair"
            </em>{" "}
            et il le fera.
          </p>

          <h4>Le workflow "branche + pull request"</h4>
          <p>
            La règle d'or : <strong>
              personne ne touche à la branche main directement
            </strong>
            . Main est sacrée, c'est la version qui est en ligne. Pour
            ajouter une feature, on crée une branche dédiée (<code>
              claude/login-form
            </code>), on y travaille, puis on ouvre une <strong>
              pull request
            </strong>{" "}
            sur GitHub. Les autres membres du groupe la relisent, commentent,
            et quand tout le monde est d'accord, on merge. Cette discipline
            vous évitera 80% des problèmes qu'on voit en groupe.
          </p>

          <div className="callout">
            <span className="callout-label">Pair programming avec l'IA</span>
            <p>
              Idéalement, chaque groupe aura plusieurs abonnements Claude
              Code. Pendant qu'une personne fait le front d'un écran dans sa
              branche, une autre fait le back dans une autre branche. Elles
              synchronisent via Git. Cette façon de travailler s'appelle le
              pair programming distribué et c'est elle qui vous permettra
              d'avancer vite en équipe.
            </p>
          </div>
        </section>

        {/* ── 7. VIBE CODING ── */}
        <section id="vibe">
          <h2>07 — Vibe coding</h2>
          <h3>La méthode qu'on va utiliser</h3>
          <p>
            "Vibe coding" est une expression qui a émergé en 2025 pour décrire
            une façon nouvelle de programmer : plutôt que d'écrire le code
            vous-même, vous décrivez en langage naturel ce que vous voulez, et
            vous laissez un agent IA l'écrire à votre place. Vous gardez le
            rôle du product manager, du designer, du testeur. Vous ne passez
            pas des heures à taper du code : vous passez du temps à{" "}
            <strong>penser</strong> à ce que le code doit faire.
          </p>

          <div className="figure">
            <VibeLoop />
            <div className="figure-caption">
              La boucle du vibe coding : intention, génération, vérification,
              ajustement
            </div>
          </div>

          <h4>Les quatre bonnes pratiques qu'on va suivre</h4>
          <p>
            <strong>1. Décrire l'intention, pas la solution.</strong> Mauvais :
            "crée un div avec une classe flex et trois boutons dedans". Bon :
            "dans le header, ajoute une zone à droite avec trois actions :
            notifications, paramètres, menu utilisateur. Utilise shadcn et
            respecte la DA du projet". Claude est bon pour traduire une
            intention claire en code. Il est mauvais pour exécuter des ordres
            techniques imprécis.
          </p>
          <p>
            <strong>2. Travailler par petits incréments.</strong> Ne demandez
            jamais "construis l'application complète". Demandez "construis
            d'abord la page d'accueil", vérifiez, commitez. Puis "ajoute le
            formulaire d'inscription", vérifiez, commitez. À chaque étape,
            vous ouvrez le navigateur, vous regardez si ça marche. Si ça
            casse, on sait que c'est à cause de la dernière étape, et on peut
            revenir en arrière avec Git en une seconde.
          </p>
          <p>
            <strong>3. Ne pas faire confiance aveuglément.</strong> Claude
            peut se tromper. Il peut inventer une librairie qui n'existe pas,
            mal comprendre ce que vous vouliez, oublier un détail. Votre job,
            c'est de tester. Ouvrez l'app, cliquez partout, essayez les cas
            limites (un champ vide, un nom à 200 caractères, un clic
            rapide-rapide). Si ça casse, dites-le lui : il saura presque
            toujours corriger.
          </p>
          <p>
            <strong>4. Lire les réponses.</strong> Claude explique presque
            toujours ce qu'il a fait et pourquoi. C'est votre cours accéléré
            de développement. Prenez 30 secondes à chaque fois pour lire. Au
            bout de trois jours, vous aurez compris 80% de ce qui se passe
            dans votre projet.
          </p>

          <div className="callout">
            <span className="callout-label">Le piège classique</span>
            <p>
              Demander à Claude de "tout refaire" parce qu'un truc ne marche
              pas. C'est la pire chose à faire : vous perdez des heures de
              travail, vous réintroduisez des bugs que vous aviez déjà
              corrigés, et vous n'avez rien appris. À la place : isolez le
              problème, décrivez-le précisément, demandez-lui de le corriger.
              Si vraiment ça part en sucette, revenez au dernier commit qui
              marchait avec Git. C'est fait pour ça.
            </p>
          </div>
        </section>

        {/* ── CONCLUSION ── */}
        <section>
          <h2>Prochaine étape</h2>
          <p>
            Vous avez maintenant tout ce qu'il faut en tête pour démarrer.
            Passez au <Link href="/brief">brief projet</Link> pour voir ce
            qu'on attend de vous pendant les quatre journées, et à la page{" "}
            <Link href="/ressources">ressources</Link> pour la check-list
            d'installation à faire avant le jour 2.
          </p>
          <p>
            Le reste, on va l'apprendre en construisant. Ouvrez Claude Code.
            Demandez-lui n'importe quoi. Regardez ce qu'il répond. C'est le
            meilleur cours accéléré qui existe.
          </p>
        </section>
      </div>

      <div className="mt-16 flex items-center justify-between">
        <Link href="/" className="retour-link">
          &larr; Accueil
        </Link>
        <Link href="/brief" className="retour-link">
          Brief projet &rarr;
        </Link>
      </div>
    </article>
  );
}

/* ────────────────────────────────────────────────
   SCHÉMAS SVG
   ──────────────────────────────────────────────── */

function FriseHistorique() {
  const events = [
    { x: 80, year: "1950", label: "Turing", sub: "Can machines think?" },
    { x: 200, year: "1956", label: "Dartmouth", sub: "Naissance de l'IA" },
    { x: 340, year: "1997", label: "Deep Blue", sub: "Bat Kasparov" },
    { x: 460, year: "2012", label: "AlexNet", sub: "Deep learning décolle" },
    { x: 580, year: "2017", label: "Transformer", sub: "Attention is all you need" },
    { x: 700, year: "2022", label: "ChatGPT", sub: "L'IA pour tous" },
  ];
  return (
    <svg viewBox="0 0 760 180" role="img" aria-label="Frise historique de l'IA">
      <line x1="40" y1="110" x2="720" y2="110" stroke="#1A1714" strokeWidth="1.5" />
      {events.map((e, i) => (
        <g key={i}>
          <circle
            cx={e.x}
            cy={110}
            r={i === 5 ? 7 : 4}
            fill={i === 5 ? "#F97316" : "#1A1714"}
          />
          <text
            x={e.x}
            y={88}
            textAnchor="middle"
            fontFamily="'DM Mono', monospace"
            fontSize="11"
            fill="#8C8680"
            letterSpacing="1"
          >
            {e.year}
          </text>
          <text
            x={e.x}
            y={135}
            textAnchor="middle"
            fontFamily="'Bebas Neue', sans-serif"
            fontSize="15"
            fill="#1A1714"
            letterSpacing="0.5"
          >
            {e.label}
          </text>
          <text
            x={e.x}
            y={152}
            textAnchor="middle"
            fontFamily="'Crimson Pro', serif"
            fontStyle="italic"
            fontSize="10"
            fill="#8C8680"
          >
            {e.sub}
          </text>
        </g>
      ))}
      <polygon points="720,105 720,115 732,110" fill="#1A1714" />
    </svg>
  );
}

function PoupeesRusses() {
  const circles = [
    { r: 180, label: "INTELLIGENCE ARTIFICIELLE", sub: "toute machine qui imite l'intelligence", y: 40 },
    { r: 140, label: "MACHINE LEARNING", sub: "apprendre à partir de données", y: 80 },
    { r: 95, label: "DEEP LEARNING", sub: "réseaux de neurones profonds", y: 125 },
    { r: 55, label: "LLM", sub: "modèles de langage", y: 195 },
  ];
  return (
    <svg viewBox="0 0 560 420" role="img" aria-label="Cercles concentriques IA ML DL LLM">
      {circles.map((c, i) => (
        <circle
          key={i}
          cx={280}
          cy={210}
          r={c.r}
          fill="none"
          stroke={i === 3 ? "#F97316" : "#1A1714"}
          strokeWidth={i === 3 ? 2 : 1}
          strokeOpacity={i === 3 ? 1 : 0.25 + i * 0.15}
        />
      ))}
      <text x={280} y={40} textAnchor="middle" fontFamily="'DM Mono', monospace" fontSize="11" fill="#8C8680" letterSpacing="1.5">
        INTELLIGENCE ARTIFICIELLE
      </text>
      <text x={280} y={55} textAnchor="middle" fontFamily="'Crimson Pro', serif" fontStyle="italic" fontSize="11" fill="#8C8680">
        toute machine qui imite l'intelligence
      </text>

      <text x={280} y={90} textAnchor="middle" fontFamily="'DM Mono', monospace" fontSize="11" fill="#8C8680" letterSpacing="1.5">
        MACHINE LEARNING
      </text>
      <text x={280} y={105} textAnchor="middle" fontFamily="'Crimson Pro', serif" fontStyle="italic" fontSize="11" fill="#8C8680">
        apprendre à partir de données
      </text>

      <text x={280} y={135} textAnchor="middle" fontFamily="'DM Mono', monospace" fontSize="11" fill="#8C8680" letterSpacing="1.5">
        DEEP LEARNING
      </text>
      <text x={280} y={150} textAnchor="middle" fontFamily="'Crimson Pro', serif" fontStyle="italic" fontSize="11" fill="#8C8680">
        réseaux de neurones profonds
      </text>

      <text x={280} y={205} textAnchor="middle" fontFamily="'Bebas Neue', sans-serif" fontSize="22" fill="#F97316" letterSpacing="1">
        LLM
      </text>
      <text x={280} y={222} textAnchor="middle" fontFamily="'Crimson Pro', serif" fontStyle="italic" fontSize="11" fill="#F97316">
        GPT, Claude, Gemini…
      </text>
    </svg>
  );
}

function LLMPrediction() {
  return (
    <svg viewBox="0 0 720 260" role="img" aria-label="Prédiction d'un LLM">
      <text x={40} y={50} fontFamily="'Crimson Pro', serif" fontSize="16" fill="#1A1714">
        La capitale de la France est
      </text>
      <rect x={40} y={65} width={260} height={2} fill="#1A1714" />

      <g transform="translate(40, 90)">
        <text fontFamily="'DM Mono', monospace" fontSize="10" fill="#8C8680" letterSpacing="1">
          PRÉDICTIONS DU MODÈLE
        </text>
      </g>

      {[
        { word: "Paris", prob: "98%", y: 120, highlight: true },
        { word: "située", prob: "0.8%", y: 145 },
        { word: "une", prob: "0.4%", y: 170 },
        { word: "connue", prob: "0.3%", y: 195 },
      ].map((p, i) => (
        <g key={i}>
          <rect
            x={40}
            y={p.y - 12}
            width={Number(p.prob.replace("%", "")) * 2.4}
            height={16}
            fill={p.highlight ? "#F97316" : "#1A1714"}
            opacity={p.highlight ? 1 : 0.25}
          />
          <text
            x={50}
            y={p.y}
            fontFamily="'Crimson Pro', serif"
            fontSize="13"
            fill={p.highlight ? "#FFFFFF" : "#1A1714"}
          >
            {p.word}
          </text>
          <text
            x={295}
            y={p.y}
            fontFamily="'DM Mono', monospace"
            fontSize="11"
            fill="#8C8680"
          >
            {p.prob}
          </text>
        </g>
      ))}

      <g transform="translate(360, 90)">
        <path
          d="M 0 40 C 30 40, 30 60, 60 60"
          fill="none"
          stroke="#1A1714"
          strokeWidth="1"
          strokeDasharray="3 3"
        />
        <polygon points="60,56 60,64 68,60" fill="#1A1714" />
      </g>

      <g transform="translate(440, 90)">
        <text fontFamily="'DM Mono', monospace" fontSize="10" fill="#8C8680" letterSpacing="1">
          ITÉRATION 2
        </text>
        <text y={30} fontFamily="'Crimson Pro', serif" fontSize="14" fill="#1A1714">
          La capitale de la France est Paris
        </text>
        <rect y={42} width={260} height={1.5} fill="#1A1714" />
        <text y={75} fontFamily="'DM Mono', monospace" fontSize="10" fill="#F97316" letterSpacing="1">
          PROCHAIN MOT : ","
        </text>
        <text y={100} fontFamily="'Crimson Pro', serif" fontStyle="italic" fontSize="12" fill="#8C8680">
          Et ainsi de suite, mot par mot,
        </text>
        <text y={118} fontFamily="'Crimson Pro', serif" fontStyle="italic" fontSize="12" fill="#8C8680">
          jusqu'à ce que la réponse soit complète.
        </text>
      </g>
    </svg>
  );
}

function ClaudeCodeLoop() {
  return (
    <svg viewBox="0 0 720 340" role="img" aria-label="Boucle d'un agent Claude Code">
      {/* USER */}
      <rect x={20} y={140} width={140} height={60} fill="none" stroke="#1A1714" strokeWidth="1.5" />
      <text x={90} y={168} textAnchor="middle" fontFamily="'DM Mono', monospace" fontSize="10" fill="#8C8680" letterSpacing="1">
        VOUS
      </text>
      <text x={90} y={188} textAnchor="middle" fontFamily="'Crimson Pro', serif" fontStyle="italic" fontSize="12" fill="#1A1714">
        demande en FR
      </text>

      {/* AGENT */}
      <circle cx={360} cy={170} r={80} fill="none" stroke="#F97316" strokeWidth="2" />
      <text x={360} y={160} textAnchor="middle" fontFamily="'Bebas Neue', sans-serif" fontSize="18" fill="#1A1714" letterSpacing="0.5">
        CLAUDE CODE
      </text>
      <text x={360} y={180} textAnchor="middle" fontFamily="'Crimson Pro', serif" fontStyle="italic" fontSize="11" fill="#8C8680">
        modèle + outils
      </text>
      <text x={360} y={198} textAnchor="middle" fontFamily="'Crimson Pro', serif" fontStyle="italic" fontSize="11" fill="#8C8680">
        (boucle interne)
      </text>

      {/* TOOLS AROUND AGENT */}
      <g transform="translate(560, 40)">
        <rect x={0} y={0} width={140} height={46} fill="none" stroke="#1A1714" strokeOpacity="0.4" strokeWidth="1" />
        <text x={70} y={20} textAnchor="middle" fontFamily="'DM Mono', monospace" fontSize="9" fill="#8C8680" letterSpacing="0.8">
          LIRE / ÉCRIRE
        </text>
        <text x={70} y={36} textAnchor="middle" fontFamily="'Crimson Pro', serif" fontStyle="italic" fontSize="11" fill="#1A1714">
          fichiers du projet
        </text>
      </g>
      <g transform="translate(560, 100)">
        <rect x={0} y={0} width={140} height={46} fill="none" stroke="#1A1714" strokeOpacity="0.4" strokeWidth="1" />
        <text x={70} y={20} textAnchor="middle" fontFamily="'DM Mono', monospace" fontSize="9" fill="#8C8680" letterSpacing="0.8">
          EXÉCUTER
        </text>
        <text x={70} y={36} textAnchor="middle" fontFamily="'Crimson Pro', serif" fontStyle="italic" fontSize="11" fill="#1A1714">
          commandes shell
        </text>
      </g>
      <g transform="translate(560, 160)">
        <rect x={0} y={0} width={140} height={46} fill="none" stroke="#1A1714" strokeOpacity="0.4" strokeWidth="1" />
        <text x={70} y={20} textAnchor="middle" fontFamily="'DM Mono', monospace" fontSize="9" fill="#8C8680" letterSpacing="0.8">
          RECHERCHER
        </text>
        <text x={70} y={36} textAnchor="middle" fontFamily="'Crimson Pro', serif" fontStyle="italic" fontSize="11" fill="#1A1714">
          dans le code
        </text>
      </g>
      <g transform="translate(560, 220)">
        <rect x={0} y={0} width={140} height={46} fill="none" stroke="#1A1714" strokeOpacity="0.4" strokeWidth="1" />
        <text x={70} y={20} textAnchor="middle" fontFamily="'DM Mono', monospace" fontSize="9" fill="#8C8680" letterSpacing="0.8">
          WEB
        </text>
        <text x={70} y={36} textAnchor="middle" fontFamily="'Crimson Pro', serif" fontStyle="italic" fontSize="11" fill="#1A1714">
          chercher en ligne
        </text>
      </g>

      {/* Arrows user -> agent -> tools */}
      <line x1={160} y1={170} x2={280} y2={170} stroke="#1A1714" strokeWidth="1.2" />
      <polygon points="278,166 286,170 278,174" fill="#1A1714" />

      <line x1={440} y1={150} x2={555} y2={62} stroke="#1A1714" strokeOpacity="0.5" strokeWidth="1" />
      <line x1={440} y1={165} x2={555} y2={122} stroke="#1A1714" strokeOpacity="0.5" strokeWidth="1" />
      <line x1={440} y1={180} x2={555} y2={182} stroke="#1A1714" strokeOpacity="0.5" strokeWidth="1" />
      <line x1={440} y1={195} x2={555} y2={242} stroke="#1A1714" strokeOpacity="0.5" strokeWidth="1" />

      {/* Result back to user */}
      <path
        d="M 280 200 Q 220 260 150 220"
        fill="none"
        stroke="#F97316"
        strokeWidth="1.5"
        strokeDasharray="4 3"
      />
      <polygon points="148,216 142,222 152,226" fill="#F97316" />
      <text x={205} y={265} textAnchor="middle" fontFamily="'DM Mono', monospace" fontSize="10" fill="#F97316" letterSpacing="1">
        RÉSULTAT
      </text>
    </svg>
  );
}

function AnatomieApp() {
  const layers = [
    { label: "FRONT-END", sub: "HTML / CSS / JS — ce que l'utilisateur voit", y: 30 },
    { label: "BACK-END", sub: "Node, Python, Go — la logique", y: 100 },
    { label: "BASE DE DONNÉES", sub: "PostgreSQL, SQLite — la mémoire longue", y: 170 },
  ];
  return (
    <svg viewBox="0 0 720 300" role="img" aria-label="Les couches d'une application web">
      {layers.map((l, i) => (
        <g key={i}>
          <rect
            x={120}
            y={l.y}
            width={480}
            height={56}
            fill={i === 0 ? "#FAF7F1" : "#FFFFFF"}
            stroke="#1A1714"
            strokeWidth="1.2"
          />
          <text x={140} y={l.y + 30} fontFamily="'Bebas Neue', sans-serif" fontSize="20" fill="#1A1714" letterSpacing="1">
            {l.label}
          </text>
          <text x={140} y={l.y + 47} fontFamily="'Crimson Pro', serif" fontStyle="italic" fontSize="12" fill="#8C8680">
            {l.sub}
          </text>
        </g>
      ))}
      {/* Design system vertical */}
      <rect x={40} y={30} width={60} height={196} fill="none" stroke="#F97316" strokeWidth="1.5" strokeDasharray="4 3" />
      <text
        x={70}
        y={130}
        textAnchor="middle"
        fontFamily="'DM Mono', monospace"
        fontSize="10"
        fill="#F97316"
        letterSpacing="1"
        transform="rotate(-90 70 130)"
      >
        DESIGN SYSTEM
      </text>

      {/* Arrows between layers */}
      <line x1={360} y1={86} x2={360} y2={100} stroke="#1A1714" strokeWidth="1" />
      <polygon points="356,98 364,98 360,104" fill="#1A1714" />
      <line x1={360} y1={156} x2={360} y2={170} stroke="#1A1714" strokeWidth="1" />
      <polygon points="356,168 364,168 360,174" fill="#1A1714" />

      {/* User icon on top */}
      <circle cx={360} cy={12} r={6} fill="#1A1714" />
      <line x1={360} y1={18} x2={360} y2={30} stroke="#1A1714" strokeWidth="1" />
      <text x={380} y={16} fontFamily="'DM Mono', monospace" fontSize="10" fill="#8C8680" letterSpacing="1">
        UTILISATEUR
      </text>

      <text x={620} y={62} fontFamily="'Crimson Pro', serif" fontStyle="italic" fontSize="11" fill="#8C8680">
        HTTP request
      </text>
      <text x={620} y={132} fontFamily="'Crimson Pro', serif" fontStyle="italic" fontSize="11" fill="#8C8680">
        SQL query
      </text>
      <text x={620} y={200} fontFamily="'Crimson Pro', serif" fontStyle="italic" fontSize="11" fill="#8C8680">
        stockage
      </text>
    </svg>
  );
}

function GitFlow() {
  return (
    <svg viewBox="0 0 720 260" role="img" aria-label="Flow des branches Git">
      {/* main line */}
      <line x1={40} y1={80} x2={680} y2={80} stroke="#1A1714" strokeWidth="2" />
      <text x={40} y={60} fontFamily="'DM Mono', monospace" fontSize="11" fill="#1A1714" letterSpacing="1">
        MAIN
      </text>

      {/* commits on main */}
      {[100, 230, 460, 620].map((x, i) => (
        <circle key={i} cx={x} cy={80} r={6} fill="#1A1714" />
      ))}

      {/* feature branch */}
      <path d="M 230 80 Q 270 80 270 150 L 460 150 Q 460 80 500 80" fill="none" stroke="#F97316" strokeWidth="2" />
      <circle cx={330} cy={150} r={6} fill="#F97316" />
      <circle cx={400} cy={150} r={6} fill="#F97316" />
      <text x={270} y={175} fontFamily="'DM Mono', monospace" fontSize="10" fill="#F97316" letterSpacing="1">
        CLAUDE/LOGIN-FORM
      </text>

      {/* another branch */}
      <path d="M 330 80 Q 360 80 360 30 L 560 30 Q 560 80 600 80" fill="none" stroke="#1A1714" strokeOpacity="0.5" strokeWidth="1.5" strokeDasharray="3 3" />
      <circle cx={440} cy={30} r={5} fill="#1A1714" fillOpacity="0.6" />
      <text x={360} y={20} fontFamily="'DM Mono', monospace" fontSize="9" fill="#8C8680" letterSpacing="1">
        CLAUDE/HEADER
      </text>

      {/* legend */}
      <g transform="translate(40, 210)">
        <circle cx={6} cy={0} r={5} fill="#1A1714" />
        <text x={18} y={4} fontFamily="'Crimson Pro', serif" fontStyle="italic" fontSize="12" fill="#2D2926">
          commit sur main (mergé, déployé)
        </text>
      </g>
      <g transform="translate(40, 232)">
        <circle cx={6} cy={0} r={5} fill="#F97316" />
        <text x={18} y={4} fontFamily="'Crimson Pro', serif" fontStyle="italic" fontSize="12" fill="#2D2926">
          commit sur une branche (en cours de travail)
        </text>
      </g>
    </svg>
  );
}

function VibeLoop() {
  const steps = [
    { x: 360, y: 45, label: "INTENTION", sub: "ce que je veux" },
    { x: 600, y: 170, label: "GÉNÉRATION", sub: "claude code écrit" },
    { x: 360, y: 280, label: "VÉRIFICATION", sub: "je teste, je lis" },
    { x: 120, y: 170, label: "AJUSTEMENT", sub: "je corrige, je précise" },
  ];
  return (
    <svg viewBox="0 0 720 340" role="img" aria-label="Boucle du vibe coding">
      {/* circle path */}
      <circle cx={360} cy={170} r={150} fill="none" stroke="#1A1714" strokeOpacity="0.15" strokeWidth="1.5" strokeDasharray="4 4" />

      {steps.map((s, i) => (
        <g key={i}>
          <circle cx={s.x} cy={s.y} r={50} fill="#FAF7F1" stroke="#F97316" strokeWidth="1.5" />
          <text
            x={s.x}
            y={s.y - 4}
            textAnchor="middle"
            fontFamily="'DM Mono', monospace"
            fontSize="10"
            fill="#F97316"
            letterSpacing="1"
          >
            {s.label}
          </text>
          <text
            x={s.x}
            y={s.y + 14}
            textAnchor="middle"
            fontFamily="'Crimson Pro', serif"
            fontStyle="italic"
            fontSize="11"
            fill="#8C8680"
          >
            {s.sub}
          </text>
        </g>
      ))}

      {/* center */}
      <text x={360} y={165} textAnchor="middle" fontFamily="'Bebas Neue', sans-serif" fontSize="20" fill="#1A1714" letterSpacing="1">
        BOUCLE
      </text>
      <text x={360} y={185} textAnchor="middle" fontFamily="'Crimson Pro', serif" fontStyle="italic" fontSize="11" fill="#8C8680">
        courte et continue
      </text>

      {/* arrows on the circle */}
      <g fill="#F97316">
        <polygon points="485,95 495,85 495,105" />
        <polygon points="485,245 495,235 495,255" transform="rotate(90 490 245)" />
        <polygon points="235,245 225,235 225,255" />
        <polygon points="235,95 225,85 225,105" transform="rotate(90 230 95)" />
      </g>
    </svg>
  );
}
