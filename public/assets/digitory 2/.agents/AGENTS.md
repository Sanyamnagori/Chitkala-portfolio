# Project Customization Rules

## Preventing Code Regressions During Folder Cleanup
1. **Never delete duplicate or "leftover" folders/files without diffing**: Before running `Remove-Item` or clearing file directories, always execute `git diff` or review the contents of the files being deleted against the main source files.
2. **Check Git History for Lost Features**: If a feature is reported missing, search the git history (`git log -S "term"`) to locate the file that originally introduced it and merge/restore it.
3. **Verify Dev Server compilation**: Always run a local build check or TypeScript check when moving code from page-to-page to confirm that imports remain intact.
