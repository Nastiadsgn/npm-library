# Icons Directory Structure

The `src/icons` folder mirrors the structure of JetBrains’ IntelliJ Platform icon set. 
Icons are grouped by feature area (actions, debugger, nodes, toolwindows, etc.).
Icon uses _dark suffix to represent dark variant of the icon. Light has no suffix.

## Directory Overview

```
src/icons/
├── actions/          # UI action glyphs
├── bookmarks/
├── breakpoints/
├── ...               # (many other IntelliJ folders)
├── nodes/
├── toolwindows/
├── AllIcons.java     # Upstream reference
├── README.md
├── Update icons by Bulat 2025-12-08.md
└── index.js          # Runtime registry builder
```

> Tip: `AllIcons.java` is copied from the IntelliJ repo and documents the canonical icon names/paths. 
Search this file when you need to find the correct SVG to use.

## Icon Sizes

- **16×16** – Default size for most UI elements (trees, tabs, menus, popups)
- **20×20** – Larger size for main toolbars and stripes; these icons have `@20x20` suffix (e.g., `general/add@20x20`, `general/search@20x20`)

## Referencing Icons

- Use the relative path (without the `.svg` suffix) as the icon name, e.g.:
  - `actions/addFile`
  - `theme/lightTheme`
  - `nodes/pluginLogo_dark`
  - `general/add@20x20` (20×20 variant for toolbars)
- Files that end with `_dark` represent explicit dark variants that differ from their default counterpart. Reference them directly if you need the dark-specific artwork.

## Icon Registry

`src/icons/index.js` dynamically pulls every `.svg` file in this directory into a single registry object. It exports:

- `default` – the registry map where keys are relative paths (without `.svg`) and values are React components.
- `iconNames` – a sorted list of all available keys, useful for building pickers or tests.
- `getIcon(name)` – helper that returns the React component for a given key.

## Usage

### With the shared `<Icon />` component

```jsx
import Icon from '../ui/components/icon/Icon';

<Icon name="actions/addFile" size={16} />;
```

The component normalises the name and looks up the correct React component in the registry.

### Direct import (when you need tree-shaking)

```jsx
import { ReactComponent as BuildIcon } from '../icons/build/build.svg';

<BuildIcon width={16} height={16} />;
```

Direct imports are useful when you only need a single icon and do not want to rely on the registry.
