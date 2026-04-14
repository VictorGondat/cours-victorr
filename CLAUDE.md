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

## Pages

| Route | Fichier | Rôle |
|-------|---------|------|
| `/` | `web/app/page.tsx` | Accueil + cartes des 4 journées |
| `/theorie` | `web/app/theorie/page.tsx` | Cours théorique J1, 7 chapitres + 7 schémas SVG inline |
| `/brief` | `web/app/brief/page.tsx` | Projet Campus Helper, contraintes, planning J1→J4, barème |
| `/ressources` | `web/app/ressources/page.tsx` | Setup Mac/Windows, plan A/B, stack |
| `/api/health` | `web/app/api/health/route.ts` | Healthcheck Traefik |

## Ton éditorial

Même ligne que victorr.fr : praticien, factuel, sans marketing. Pas d'em dash. Le cours doit être lisible par quelqu'un qui n'a jamais codé sans jamais être condescendant. Les schémas SVG sont dans le même registre : noir + orange, pas de couleurs criardes, typographies alignées avec celles du site.

## Développement local

```bash
cd web
npm install
npm run dev
# http://localhost:3000
```

## Mise à jour pendant le cours

Le site est vivant. Après chaque journée, j'ajoute :
- captures et corrections de l'exercice
- liens utiles apparus en séance
- ajustements du planning si besoin

Workflow : branche `claude/cours-victorr/<topic>` → PR → merge → `deploy.sh cours-victorr` sur le VPS.

## Déploiement VPS

Compose + Traefik (pattern identique à urika / landing-candidate).

```bash
ssh -i ~/.ssh/id_ed25519_victorr_vps root@187.77.167.156 \
  "bash /srv/ops/deploy.sh cours-victorr"
```

Le script `deploy.sh` doit avoir un case `cours-victorr` avec :
- `APP_DIR=/srv/apps/cours-victorr`
- `COMPOSE_FILE=deploy/docker-compose.yml`
- `CONTAINER=cours-victorr`
- `HEALTH_URL=https://cours.victorr.fr/api/health`

## Règles projet

- Jamais de push direct sur `main`
- Branches : `claude/cours-victorr/<topic-court>`
- Commits conventional + paragraphe non-tech
- DA victorr.fr = source de vérité visuelle, ne pas drifter
