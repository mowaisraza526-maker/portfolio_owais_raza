#!/usr/bin/env bash
# Usage:  ./deploy.sh         -> preview deployment (live site unchanged)
#         ./deploy.sh prod    -> production deployment (updates the live portfolio)
set -euo pipefail
command -v node >/dev/null || { echo "Node.js 18+ is required: https://nodejs.org"; exit 1; }
[ -d node_modules ] || npm install
npx --yes vercel@latest whoami >/dev/null 2>&1 || npx --yes vercel@latest login
npx --yes vercel@latest link --yes --project owais-raza-portfolio --scope maga-developers
if [ "${1:-}" = "prod" ]; then
  echo "Deploying to PRODUCTION..."; npx --yes vercel@latest deploy --prod --yes
else
  echo "Deploying a PREVIEW..."; npx --yes vercel@latest deploy --yes
fi
