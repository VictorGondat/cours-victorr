# CLAUDE.md — cours-victorr

Support web du cours de Victor Gondat à Ynov 2026 : **prototyper avec l'IA**.

Domaine : `cours.victorr.fr` — hébergé sur le même VPS Hostinger que `victorr.fr` et `mybudget.victorr.fr`.

---

## Stack

- **Next.js 16** — TypeScript — Tailwind CSS v4 — `output: 'standalone'`
- Dossier app : `web/` — Next.js App Router
- Fonts : Bebas Neue (display) · Crimson Pro (body/italic) · DM Mono (mono/labels)
- **DA volontairement clonée de victorr.fr** — fond outer `#EAE5DC` · fond inner `#FFFFFF` · accent `#F97316` · texte `#1A1714`
- Max-width 820px (portfolio victorr.fr = 800px — légèrement élargi ici pour faciliter la lecture de cours long)
- **Base de données** : SQLite via `better-sqlite3`, stockée dans un volume Docker (`/data/cours.db` en prod, `.data/cours.db` en dev)
- Package natif déclaré via `serverExternalPackages: ["better-sqlite3"]` dans `next.config.ts`

## Pages

| Route | Fichier | Rôle |
|-------|---------|------|
| `/` | `web/app/page.tsx` | Accueil + cartes des 4 journées |
| `/theorie` | `web/app/theorie/page.tsx` | Cours théorique J1, 7 chapitres + 7 schémas SVG inline |
| `/brief` | `web/app/brief/page.tsx` | Projet Campus Helper, contraintes, planning J1→J4, barème |
| `/ressources` | `web/app/ressources/page.tsx` | Setup Mac/Windows, plan A/B, stack |
| `/groupes` | `web/app/groupes/page.tsx` | Liste des 8 groupes (derrière mot de passe cours) |
| `/groupes/[id]` | `web/app/groupes/[id]/page.tsx` | Page d'un groupe : rejoindre + éditer les infos projet |
| `/groupes/admin` | `web/app/groupes/admin/page.tsx` | Dashboard prof (derrière mot de passe admin) |
| `/api/health` | `web/app/api/health/route.ts` | Healthcheck Traefik |

### Routes API

| Route | Méthode | Rôle |
|-------|---------|------|
| `/api/groups/auth` | POST | Valide le mdp cours, pose cookie `cours_auth` |
| `/api/groups/[id]/join` | POST | Rejoint un groupe (nom + prénom), pose cookie `cours_student` |
| `/api/groups/leave` | POST | Quitte son groupe et efface le cookie |
| `/api/groups/[id]` | PATCH | Met à jour les infos projet (membres du groupe uniquement) |
| `/api/admin/auth` | POST | Valide le mdp admin, pose cookie `cours_admin` |
| `/api/admin/export` | GET | Retourne tous les groupes + membres + infos en JSON (admin only) |

## Ton éditorial

Même ligne que victorr.fr : praticien, factuel, sans marketing. Pas d'em dash. Le cours doit être lisible par quelqu'un qui n'a jamais codé sans jamais être condescendant. Les schémas SVG sont dans le même registre : noir + orange, pas de couleurs criardes, typographies alignées avec celles du site.

Pour la section `/groupes`, le ton s'autorise une **petite touche de fun** assumée : quelques clins d'œil amicaux (« Psst… », « pas un robot perdu sur internet »), mais jamais d'emojis ni de marketing.

---

## Feature "Groupes étudiants" (éphémère, jusqu'à fin mai 2026)

Cette section permet aux étudiants de rejoindre un des 8 groupes prédéfinis et de remplir les infos de leur projet Campus Helper. Tout est stocké en SQLite dans un volume Docker.

### Architecture

- **8 groupes numérotés** (G1 → G8), seedés au premier boot via `INSERT OR IGNORE`
- **Max 6 membres par groupe**, constante `MAX_MEMBERS_PER_GROUP` dans `lib/db.ts`
- **1 étudiant = 1 groupe**, garanti par l'index `UNIQUE` sur `members.normalized_key`
- **Réidentification silencieuse** : `normalizeName("Jean", "Dupont")` = `"jean-dupont"` (NFD, sans accents, sans ponctuation). Tout se base sur cette clé, pas de système de comptes
- **Changement de groupe** automatique : re-cliquer "Rejoindre" sur un autre groupe fait un `UPDATE group_id` sur la ligne existante

### Schéma DB (`web/lib/db.ts`)

```sql
CREATE TABLE groups (
  id INTEGER PRIMARY KEY,            -- 1 à 8
  team_name TEXT DEFAULT '',
  project_name TEXT DEFAULT '',
  description TEXT DEFAULT '',
  app_url TEXT DEFAULT '',
  repo_url TEXT DEFAULT '',
  target_user TEXT DEFAULT '',
  problem TEXT DEFAULT '',
  vercel_ready INTEGER DEFAULT 0,    -- checklist
  github_ready INTEGER DEFAULT 0,    -- checklist
  llm_used TEXT DEFAULT '',          -- csv : "claude-code,codex,other"
  llm_other_name TEXT DEFAULT '',    -- précision si "other" coché
  notes TEXT DEFAULT '',             -- commentaire libre du groupe à Victor
  updated_at TEXT
);

CREATE TABLE members (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  group_id INTEGER NOT NULL,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  normalized_key TEXT NOT NULL UNIQUE,  -- jean-dupont
  joined_at TEXT NOT NULL,
  FOREIGN KEY (group_id) REFERENCES groups(id) ON DELETE CASCADE
);
```

**Migrations** : gérées dans `getDb()` via `PRAGMA table_info(groups)` + `ALTER TABLE ADD COLUMN` idempotent. Pour ajouter une colonne, l'inscrire dans le tableau `additions` — la migration s'applique au prochain boot sans redeploy du volume.

### Auth et cookies

Trois cookies httpOnly, signés HMAC-SHA256 avec `COURS_COOKIE_SECRET`. Les helpers sont dans `web/lib/auth.ts`.

| Cookie | Rôle | Durée |
|--------|------|-------|
| `cours_auth` | Accès section groupes (après saisie `COURS_GROUP_PASSWORD`) | 60 jours |
| `cours_student` | Identité étudiant (`{key, firstName, lastName}`) après join | 60 jours |
| `cours_admin` | Accès dashboard prof (après saisie `COURS_ADMIN_PASSWORD`) | 60 jours |

Les comparaisons de mot de passe utilisent `timingSafeEqual` pour éviter les timing attacks.

### Variables d'environnement

| Var | Obligatoire | Rôle |
|-----|-------------|------|
| `COURS_GROUP_PASSWORD` | non (défaut `ynov123`) | Mot de passe partagé donné aux étudiants en classe |
| `COURS_ADMIN_PASSWORD` | **oui** (refus de démarrer sinon) | Mot de passe admin pour `/groupes/admin` — valeur réelle stockée dans `/srv/apps/cours-victorr/deploy/.env` sur le VPS, chmod 600 |
| `COURS_COOKIE_SECRET` | **oui** (refus de démarrer sinon) | Secret HMAC pour signer les cookies — généré via `openssl rand -hex 32` |
| `COURS_DB_PATH` | non (défaut `.data/cours.db` / `/data/cours.db` en Docker) | Chemin du fichier SQLite |

⚠️ **Ne jamais commiter ces valeurs.** Le fichier `.env` est ignoré par git (`.env` au gitignore root) et vit uniquement sur le VPS.

## Développement local

```bash
cd web
npm install

# Variables obligatoires pour que l'app démarre
export COURS_ADMIN_PASSWORD=anything
export COURS_COOKIE_SECRET=$(openssl rand -hex 32)

npm run dev
# http://localhost:3000
```

La DB locale est créée dans `web/.data/cours.db` (ignorée par git). Pour tout réinitialiser : `rm -rf web/.data`.

## Mise à jour pendant le cours

Le site est vivant. Après chaque journée, j'ajoute :
- captures et corrections de l'exercice
- liens utiles apparus en séance
- ajustements du planning si besoin

Workflow : branche `claude/cours-victorr/<topic>` → PR → merge squash → `deploy.sh cours-victorr` sur le VPS.

## Déploiement VPS

Compose + Traefik (pattern identique à urika / landing-candidate), avec un **volume Docker nommé** pour la persistance de la DB.

```bash
ssh -i ~/.ssh/id_ed25519_victorr_vps root@187.77.167.156 \
  "bash /srv/ops/deploy.sh cours-victorr"
```

Le script `deploy.sh` a un case `cours-victorr` avec :
- `APP_DIR=/srv/apps/cours-victorr`
- `COMPOSE_FILE=deploy/docker-compose.yml`
- `CONTAINER=cours-victorr`
- `HEALTH_URL=https://cours.victorr.fr/api/health`

Le `.env` (secrets) est lu automatiquement par `docker compose` depuis `/srv/apps/cours-victorr/deploy/.env` (même dossier que le compose file). Il contient `COURS_GROUP_PASSWORD`, `COURS_ADMIN_PASSWORD`, `COURS_COOKIE_SECRET`.

Le volume `deploy_cours-data` (monté sur `/data`) persiste entre les redeploys. Pour le purger (fin de cours fin mai) : `docker volume rm deploy_cours-data` après `docker compose down`.

### Dockerfile — particularités

`better-sqlite3` est un module natif, le `Dockerfile` installe `python3 make g++` dans le stage `deps` et `builder`, puis copie explicitement `better-sqlite3 + bindings + file-uri-to-path` dans le stage `runner` (Next.js `standalone` ne les trace pas). Le volume `/data` est créé avec les bons droits pour l'user `nextjs`.

## Accès aux données en prod

Le container alpine ne contient pas `sqlite3` CLI. Pour requêter ou modifier la DB en live, passer par `node` et `better-sqlite3` qui sont déjà dans l'image :

```bash
# Lire (readonly)
ssh -i ~/.ssh/id_ed25519_victorr_vps root@187.77.167.156 \
  "docker exec cours-victorr node -e \"
    const Database = require('better-sqlite3');
    const db = new Database('/data/cours.db', {readonly: true});
    console.log(JSON.stringify(db.prepare('SELECT * FROM groups').all(), null, 2));
  \""

# Écrire (ex : supprimer un membre)
ssh -i ~/.ssh/id_ed25519_victorr_vps root@187.77.167.156 \
  "docker exec cours-victorr node -e \"
    const Database = require('better-sqlite3');
    const db = new Database('/data/cours.db');
    const info = db.prepare('DELETE FROM members WHERE id = ?').run(42);
    console.log('deleted:', info.changes);
  \""
```

⚠️ Ouvrir la DB en **readonly** pour les lectures — sinon on entre en conflit avec le verrou WAL du container en écriture.

Alternative plus propre : `GET /api/admin/export` avec le cookie `cours_admin` retourne tout en JSON.

## Règles projet

- Jamais de push direct sur `main`
- Branches : `claude/cours-victorr/<topic-court>`
- Commits conventional + paragraphe non-tech
- DA victorr.fr = source de vérité visuelle, ne pas drifter
- Section `/groupes` : **projet éphémère**, pas de refacto d'ampleur — suppression prévue fin mai 2026 (vider le volume, éventuellement supprimer le dossier `web/app/groupes` et `web/lib/db.ts` + `auth.ts`)
- Secrets (admin pwd, cookie secret) vivent **uniquement** dans `/srv/apps/cours-victorr/deploy/.env` sur le VPS, jamais dans le repo ni dans le code
