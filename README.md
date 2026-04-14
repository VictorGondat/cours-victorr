# cours-victorr

Support du cours de Victor Gondat à Ynov : **prototyper une application avec l'IA**.

Quatre journées — 15 avril, 29 avril, 6 mai et 20 mai 2026 — pour passer d'une idée à une webapp déployée, avec Claude Code comme copilote.

Site en ligne : [cours.victorr.fr](https://cours.victorr.fr)

## Stack

- Next.js 16 — TypeScript — Tailwind CSS v4
- Docker + Traefik (VPS Hostinger, même infra que les autres projets victorr.fr)
- Déploiement via `/srv/ops/deploy.sh cours-victorr`

## Pages

| Route | Rôle |
|-------|------|
| `/` | Accueil — présentation du cours + navigation vers les 4 journées |
| `/theorie` | Cours théorique du jour 1 (IA, LLM, Claude Code, anatomie app, Git, vibe coding) |
| `/brief` | Brief du projet Campus Helper, planning J1→J4, livrables, barème |
| `/ressources` | Setup, installation Claude Code (Mac + Windows), plan A/plan B, stack |
| `/api/health` | Healthcheck Traefik/Docker |

## Développement local

```bash
cd web
npm install
npm run dev
# http://localhost:3000
```

## Build Docker local

```bash
docker compose -f deploy/docker-compose.yml build
docker compose -f deploy/docker-compose.yml up -d
```

## Déploiement VPS

Après merge sur `main` :

```bash
ssh -i ~/.ssh/id_ed25519_victorr_vps root@187.77.167.156 \
  "bash /srv/ops/deploy.sh cours-victorr"
```

## Mettre à jour le contenu entre deux cours

Chaque journée de cours apporte son lot de ressources complémentaires (corrections,
captures, liens utiles). Le site est pensé pour vivre : on édite les pages
correspondantes, on commit, on merge, on redéploie.
