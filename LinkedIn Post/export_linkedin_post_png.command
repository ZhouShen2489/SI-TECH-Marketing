#!/bin/zsh

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"

zsh "$SCRIPT_DIR/export_linkedin_post_png.sh"

echo
echo "Done."
echo "PNG exported to:"
echo "$SCRIPT_DIR/linkedin_post_card.png"
echo
read "?Press Enter to close..."
