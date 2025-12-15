# Update Icons

- Author: Bulat
- Date: 2025-12-08
- Notes: Documenting current icon folder layout discussion and next steps.

## Plan:
- [x] Remove old icons
- [x] Add new icons with different structure
- [x] Update all usages
- [x] Add AllIcons.java file from ultimate repo for reference for new structure

## Current Situation
- Light, dark, theme toggle, and common icons each live in their own subfolders
- `src/icons/index.js` exports every SVG via those nested paths, and `src/ui/components/icon/Icon.jsx` dynamically resolves icons by name from that registry

## Follow-ups Required
- Decide on a naming convention for flattened files that preserves theme/context.
- Adjust any tooling or scripts that currently glob by subdirectory.
- Verify the `<Icon />` usages in `src/App.js` and elsewhere still resolve correctly after renames.
- Retain documentation explaining the new scheme so future icon additions stay consistent.
- Update README.md and index.js to reflect the new folder structure.

## Icon Name Snapshot (2025-12-08)
Legacy list from the pre-expui structure (kept for reference only).
- Add
- AutoscrollFromSource
- AutoscrollToSource
- ChevronDown
- ChevronDownLarge
- ChevronLeft
- ChevronRight
- ChevronUp
- ChevronUpLarge
- Close
- CloseSmall
- CloseSmallHovered
- CollapseAll
- Copy
- Css
- Cut
- Delete
- Down
- Download
- Edit
- Folder
- Font
- HomeFolder
- JavaScript
- Json
- LibraryFolder
- DarkThemeIcon
- LightThemeIcon
- IntelliJPlatformLogo
