#!/usr/bin/env bash
set -e
command -v cwebp >/dev/null || { echo "Install 'webp' package to get cwebp"; exit 1; }
find assets -type f \( -iname "*.png" -o -iname "*.jpg" -o -iname "*.jpeg" \) -print0 |
while IFS= read -r -d '' f; do
  out="${f%.*}.webp"
  echo "-> $out"
  cwebp -q 82 "$f" -o "$out" >/dev/null
done
echo "Done."
