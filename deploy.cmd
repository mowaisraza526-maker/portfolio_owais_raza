@echo off
setlocal
REM Usage:  deploy.cmd         -> preview deployment (safe, live site unchanged)
REM         deploy.cmd prod    -> production deployment (updates the live portfolio)

where node >nul 2>&1 || (echo Node.js 18 or newer is required: https://nodejs.org & exit /b 1)

if not exist node_modules (
  echo Installing dependencies...
  call npm install || exit /b 1
)

call npx --yes vercel@latest whoami >nul 2>&1 || call npx --yes vercel@latest login
call npx --yes vercel@latest link --yes --project owais-raza-portfolio --scope maga-developers || exit /b 1

if /I "%~1"=="prod" (
  echo Deploying to PRODUCTION...
  call npx --yes vercel@latest deploy --prod --yes
) else (
  echo Deploying a PREVIEW...
  call npx --yes vercel@latest deploy --yes
)
