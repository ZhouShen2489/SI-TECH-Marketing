#!/bin/zsh

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
REPO_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"

if ! git -C "$REPO_DIR" rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  echo "Error: $REPO_DIR is not a Git repository."
  exit 1
fi

if ! git -C "$REPO_DIR" remote get-url origin >/dev/null 2>&1; then
  echo "Error: GitHub remote 'origin' is not set."
  echo "Connect it first with:"
  echo "git remote add origin <YOUR_GITHUB_REPO_URL>"
  echo "git push -u origin main"
  exit 1
fi

COMMIT_MESSAGE="${1:-Update Stitch marketing materials}"

git -C "$REPO_DIR" add .

if git -C "$REPO_DIR" diff --cached --quiet; then
  echo "No changes to commit."
  exit 0
fi

git -C "$REPO_DIR" commit -m "$COMMIT_MESSAGE"
git -C "$REPO_DIR" push origin main

echo "Push complete."
