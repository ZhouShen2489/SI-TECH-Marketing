# GitHub Sync Guide

This project already has local Git enabled.

## Option A: Use GitHub Desktop

Recommended if you want the easiest visual workflow.

### First-time setup

1. Open GitHub Desktop.
2. Click `File` -> `Add Local Repository`.
3. Choose:
   `/Users/zhoushen/Documents/SI-TECH-Marketing`
4. If GitHub Desktop says the repo is not published yet, click `Publish repository`.
5. Choose the repository name you want on GitHub.
6. Keep the local path the same.
7. Publish.

### Update local changes to GitHub

1. Open GitHub Desktop.
2. Select `SI-TECH-Marketing`.
3. Review changed files.
4. Write a short summary, for example:
   `Update Stitch marketing materials`
5. Click `Commit to main`.
6. Click `Push origin`.

## Option B: Use terminal commands

If you already created the GitHub repository online, connect it once:

```bash
cd /Users/zhoushen/Documents/SI-TECH-Marketing
git remote add origin <YOUR_GITHUB_REPO_URL>
git push -u origin main
```

After that, each update can use:

```bash
cd /Users/zhoushen/Documents/SI-TECH-Marketing
git add .
git commit -m "Update Stitch marketing materials"
git push
```

## Included script

You can also use the included script:

```bash
zsh scripts/push_to_github.sh "Update Stitch marketing materials"
```

What it does:

1. checks that this folder is a Git repo
2. checks that a GitHub remote exists
3. stages all changes
4. creates a commit
5. pushes to `origin main`

## If GitHub is not connected yet

Check whether a remote exists:

```bash
cd /Users/zhoushen/Documents/SI-TECH-Marketing
git remote -v
```

If nothing is shown, connect the repo by:

```bash
git remote add origin <YOUR_GITHUB_REPO_URL>
git push -u origin main
```

## Good practice

- Keep source files like `.html`, `.md`, and scripts in GitHub
- Keep export files like `.png` only if you want versioned deliverables
- Commit with short, clear messages
- Push after each meaningful update so local and GitHub stay aligned
