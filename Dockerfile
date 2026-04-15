# syntax=docker/dockerfile:1.6
FROM node:20-alpine AS base
RUN apk add --no-cache libc6-compat
WORKDIR /app

# ── Deps ──
FROM base AS deps
RUN apk add --no-cache python3 make g++
COPY web/package.json web/package-lock.json* ./
RUN if [ -f package-lock.json ]; then \
      npm ci; \
    else \
      npm install; \
    fi

# ── Builder ──
FROM base AS builder
RUN apk add --no-cache python3 make g++
COPY --from=deps /app/node_modules ./node_modules
COPY web/ ./
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

# ── Runner ──
FROM base AS runner
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0
ENV COURS_DB_PATH=/data/cours.db

RUN addgroup --system --gid 1001 nodejs \
 && adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/node_modules/better-sqlite3 ./node_modules/better-sqlite3
COPY --from=builder --chown=nextjs:nodejs /app/node_modules/bindings ./node_modules/bindings
COPY --from=builder --chown=nextjs:nodejs /app/node_modules/file-uri-to-path ./node_modules/file-uri-to-path

RUN mkdir -p /data && chown -R nextjs:nodejs /data

USER nextjs
EXPOSE 3000
VOLUME ["/data"]

CMD ["node", "server.js"]
