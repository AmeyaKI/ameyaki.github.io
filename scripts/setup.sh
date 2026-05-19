#!/usr/bin/env bash
# Project-local Node setup (nvm + npm install).
# Node's equivalent of a Python venv: dependencies live in ./node_modules only.

set -euo pipefail
cd "$(dirname "$0")/.."

if [[ -s "$HOME/.nvm/nvm.sh" ]]; then
  # shellcheck source=/dev/null
  source "$HOME/.nvm/nvm.sh"
  nvm install
  nvm use
else
  echo "nvm not found. Install from https://github.com/nvm-sh/nvm or use Node 22+ manually."
fi

echo "Node: $(node -v)"
echo "npm:  $(npm -v)"
npm install

echo ""
echo "Done. Run: npm run dev"
