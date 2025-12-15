# JetBrains Int UI - React Component Library

> **A complete component library for building JetBrains-style IDE interfaces and prototypes**

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

---

## 🎯 What is This?

This library provides **40+ React components** that mirror the JetBrains IntelliJ Platform UI design system. Use it to:

- **Prototype IDE features** quickly and professionally
- **Build IDE plugins** with authentic look and feel
- **Create IDE-like applications** with familiar patterns
- **Design and test** new interface concepts

---

## ⚡ Quick Start (2 minutes)

### 1. Install

```bash
npm install @jetbrains/int-ui-react
```

### 2. Use a Template

```jsx
import { BasicIDEPrototype } from '@jetbrains/int-ui-react';
import '@jetbrains/int-ui-react/dist/styles.css';

function App() {
  return (
    <BasicIDEPrototype 
      projectName="my-project"
      theme="island"
    />
  );
}
```

**That's it!** You now have a fully functional IDE interface.

---

## 📚 Documentation

We have comprehensive documentation to help you get started:

| Document | Purpose | When to Use |
|----------|---------|-------------|
| **[QUICK_START.md](./QUICK_START.md)** | Get started in 5 minutes | First time using the library |
| **[LIBRARY_README.md](./LIBRARY_README.md)** | Complete API reference | Need detailed component docs |
| **[PROTOTYPING_GUIDE.md](./PROTOTYPING_GUIDE.md)** | Real-world scenarios & tutorials | Building specific prototypes |
| **[EXAMPLE_USAGE.jsx](./EXAMPLE_USAGE.jsx)** | Copy-paste examples | Want working code samples |
| **[LIBRARY_PREPARATION_SUMMARY.md](./LIBRARY_PREPARATION_SUMMARY.md)** | Technical overview | Understanding the library structure |

---

## 🎨 What's Included?

### 🏗️ **Layout Components**
Build complete IDE interfaces:
- `IDELayout` - Full pre-configured IDE
- `IDELayoutComposable` - Customizable IDE with slots
- `MainWindow`, `IDEWindow` - Window containers

### 📦 **Ready-to-Use Templates**
Start prototyping instantly:
- `BasicIDEPrototype` - Complete IDE experience
- `MinimalIDEPrototype` - Simple, focused layout
- `DialogPrototype` - Modal-based workflows

### 🧩 **UI Components**
All the building blocks you need:
- **Inputs**: Button, Input, Checkbox, Dropdown, Toggle, Search
- **Navigation**: Tabs, Tree, Stripes
- **Overlays**: Dialog, Popup
- **Layout**: ToolWindow, StatusBar, Toolbar
- **Display**: Icon, Link, Table, ProgressBar
- ...and many more!

---

## 🚀 Three Ways to Build

### 1️⃣ **Use a Template** (Fastest)
Perfect for quick prototypes:

```jsx
import { BasicIDEPrototype } from '@jetbrains/int-ui-react';

<BasicIDEPrototype projectName="my-project" />
```

### 2️⃣ **Compose Your Layout** (Most Flexible)
Build custom interfaces:

```jsx
import { 
  IDELayoutComposable, 
  ToolWindow, 
  Tree 
} from '@jetbrains/int-ui-react';

<IDELayoutComposable
  leftPanel={<ToolWindow><Tree data={myData} /></ToolWindow>}
>
  <MyEditor />
</IDELayoutComposable>
```

### 3️⃣ **Use Individual Components** (Most Control)
Cherry-pick components:

```jsx
import { 
  Button, 
  Input, 
  Dialog, 
  Table 
} from '@jetbrains/int-ui-react';

// Build your custom UI
```

---

## 🎨 Themes

Switch between light and dark themes:

```jsx
<IDELayout theme="default" />  // Traditional flat design
<IDELayout theme="island" />   // Modern rounded panels
```

---

## 💡 Example: Custom Tool Window

```jsx
import {
  IDELayoutComposable,
  MainToolbar,
  ToolWindow,
  Tree,
  StatusBar
} from '@jetbrains/int-ui-react';

function MyCustomIDE() {
  const projectData = [
    {
      id: '1',
      label: 'my-project',
      icon: 'nodes/folder',
      children: [
        { id: '2', label: 'src', icon: 'nodes/folder' },
        { id: '3', label: 'README.md', icon: 'fileTypes/markdown' }
      ]
    }
  ];

  return (
    <IDELayoutComposable
      theme="island"
      toolbar={<MainToolbar projectName="My IDE" />}
      leftPanel={
        <ToolWindow title="Project" width={300}>
          <Tree 
            data={projectData}
            onNodeSelect={(id) => console.log('Selected:', id)}
          />
        </ToolWindow>
      }
      statusBar={<StatusBar breadcrumbs={[{ label: 'Home' }]} />}
    >
      <div>Your editor content here</div>
    </IDELayoutComposable>
  );
}
```

---

## 📖 Learning Path

### 🏃 **Beginner** (10 minutes)
1. Read [QUICK_START.md](./QUICK_START.md)
2. Copy an example from [EXAMPLE_USAGE.jsx](./EXAMPLE_USAGE.jsx)
3. Start prototyping!

### 🚶 **Intermediate** (30 minutes)
1. Follow [PROTOTYPING_GUIDE.md](./PROTOTYPING_GUIDE.md)
2. Learn about `IDELayoutComposable`
3. Build a custom prototype

### 🧗 **Advanced** (1 hour)
1. Study [LIBRARY_README.md](./LIBRARY_README.md)
2. Understand all component APIs
3. Build complex prototypes

---

## 🎯 Common Use Cases

| Use Case | Recommended Approach | Documentation |
|----------|---------------------|---------------|
| Quick demo | Use `BasicIDEPrototype` | [Quick Start](./QUICK_START.md) |
| Custom feature | Use `IDELayoutComposable` | [Prototyping Guide](./PROTOTYPING_GUIDE.md) |
| Settings dialog | Use `DialogPrototype` | [Example Usage](./EXAMPLE_USAGE.jsx) |
| Onboarding flow | Compose with `Dialog` | [Prototyping Guide](./PROTOTYPING_GUIDE.md) |
| Tool window plugin | Customize `leftPanel` | [Library README](./LIBRARY_README.md) |

---

## 🔧 Technical Details

- **Package Name**: `@jetbrains/int-ui-react`
- **Version**: 0.1.0
- **License**: Apache 2.0
- **Bundle Size**: ~77KB JS + ~61KB CSS (minified)
- **React Version**: >= 18.0.0
- **TypeScript**: Fully typed ✅
- **Tree-shakeable**: Yes ✅

---

## 📦 Build & Distribution

### For Development
```bash
npm install
npm start         # Run demo app
npm run build:lib # Build library
```

### For Publishing
```bash
npm run build:lib
npm publish
```

---

## 🎓 Resources

- **[IntelliJ UI Guidelines](https://plugins.jetbrains.com/docs/intellij/ui-guidelines-welcome.html)** - Official design guidelines
- **[Int UI Kit (Figma)](https://www.figma.com/community/file/1227732692272811382/int-ui-kit)** - Design assets
- **[Icons List](https://intellij-icons.jetbrains.design)** - Full icon set

---

## 📁 Project Structure

```
my-component-library/
├── 📚 Documentation
│   ├── README_FOR_USERS.md          # This file - Start here!
│   ├── QUICK_START.md               # 5-minute guide
│   ├── LIBRARY_README.md            # Complete API docs
│   ├── PROTOTYPING_GUIDE.md         # Tutorials & examples
│   ├── EXAMPLE_USAGE.jsx            # Copy-paste examples
│   └── LIBRARY_PREPARATION_SUMMARY.md # Technical overview
│
├── 📦 Source Code
│   └── src/
│       ├── lib/index.js             # Main exports
│       ├── templates/               # Prototyping templates
│       └── ui/components/           # All components
│
├── 🏗️ Built Library
│   └── dist/
│       ├── cjs/                     # CommonJS build
│       ├── esm/                     # ES Modules build
│       └── index.d.ts               # TypeScript definitions
│
└── ⚙️ Configuration
    ├── package.json                 # Package config
    ├── rollup.config.mjs            # Build config
    └── tsconfig.json                # TypeScript config
```

---

## 🤝 Contributing

Contributions are welcome! Please ensure:
1. Code follows [IntelliJ UI Guidelines](https://plugins.jetbrains.com/docs/intellij/ui-guidelines-welcome.html)
2. Components are well-documented
3. TypeScript types are included
4. Examples are provided

---

## 📄 License

Apache License 2.0 - see LICENSE file for details.

---

## 🆘 Need Help?

1. **Quick questions?** Check [QUICK_START.md](./QUICK_START.md)
2. **Building something specific?** See [PROTOTYPING_GUIDE.md](./PROTOTYPING_GUIDE.md)
3. **API questions?** Read [LIBRARY_README.md](./LIBRARY_README.md)
4. **Want examples?** Open [EXAMPLE_USAGE.jsx](./EXAMPLE_USAGE.jsx)

---

## 🎉 Ready to Start?

### Choose Your Path:

**🏃 I want to start NOW:**  
→ Go to [QUICK_START.md](./QUICK_START.md)

**📖 I want to learn first:**  
→ Read [LIBRARY_README.md](./LIBRARY_README.md)

**💻 Show me code:**  
→ Open [EXAMPLE_USAGE.jsx](./EXAMPLE_USAGE.jsx)

**🎯 I have a specific goal:**  
→ Check [PROTOTYPING_GUIDE.md](./PROTOTYPING_GUIDE.md)

---

<div align="center">

**Made with ❤️ for IntelliJ Platform developers**

[Documentation](./LIBRARY_README.md) • [Quick Start](./QUICK_START.md) • [Examples](./EXAMPLE_USAGE.jsx) • [Guide](./PROTOTYPING_GUIDE.md)

</div>

