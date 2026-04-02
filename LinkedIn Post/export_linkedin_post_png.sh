#!/bin/zsh

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
HTML_FILE="$SCRIPT_DIR/linkedin_post_card.html"
PNG_FILE="$SCRIPT_DIR/linkedin_post_card.png"
HTML_URL="file://$HTML_FILE"

npx -y playwright screenshot \
  --browser chromium \
  --viewport-size "1080,1350" \
  --wait-for-timeout 1200 \
  "$HTML_URL" \
  "$PNG_FILE"

echo "Exported: $PNG_FILE"
