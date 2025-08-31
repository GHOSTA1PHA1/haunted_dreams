#!/usr/bin/env bash
set -euo pipefail
HOST="${1:-haunteddreams.fun}"
USER="${2:-root}"
DEST="${3:-/var/www/haunteddreams.fun}"

rsync -avz --delete \
  --exclude ".git/" \
  --exclude ".github/" \
  --exclude ".DS_Store" \
  --exclude "Thumbs.db" \
  -e "ssh -o StrictHostKeyChecking=accept-new" \
  ./ "$USER@$HOST:$DEST/"
echo "Deployed to $USER@$HOST:$DEST"
