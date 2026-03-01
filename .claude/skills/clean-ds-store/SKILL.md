---
name: clean-ds-store
description: Remove all .DS_Store files from the repo and ensure .gitignore covers them. Run before any git commit.
disable-model-invocation: false
---

Remove all `.DS_Store` files from the repository and ensure `.gitignore` covers them:

1. Delete all `.DS_Store` files recursively:
   ```bash
   find . -name ".DS_Store" -not -path "./.git/*" -delete
   ```
2. Check if `.gitignore` already contains `.DS_Store`. If not, add it.
3. Stage `.gitignore` if it was modified.
4. Confirm cleanup is complete before proceeding with the commit.
