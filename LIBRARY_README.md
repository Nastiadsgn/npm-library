# JetBrains Int UI - React Component Library

A comprehensive React component library for building JetBrains IntelliJ Platform-style interfaces and prototypes. This library provides all the essential components you need to create IDE-like user interfaces with authentic JetBrains design patterns.

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

## 🎯 Perfect For

- **Prototyping IDE features** - Quickly build and test new IDE interface concepts
- **Creating IDE plugins** - Design plugin UIs that match the native IDE look and feel
- **Building IDE-like applications** - Develop tools with familiar IDE patterns
- **Design documentation** - Create interactive design specs and guidelines

## ✨ Features

- 🎨 **Complete Component Set** - 40+ components covering all IDE UI patterns
- 🧩 **Composable Layouts** - Flexible IDE layout system with customizable slots
- 🎭 **Theme Support** - Built-in light/dark themes matching JetBrains IDEs
- 📦 **Ready-to-Use Templates** - Pre-built prototyping templates for common scenarios
- 🎯 **TypeScript Support** - Full type definitions included
- 🚀 **Tree-Shakeable** - Import only what you need
- 📖 **Well Documented** - Extensive examples and API documentation

## 📦 Installation

```bash
npm install @jetbrains/int-ui-react
# or
yarn add @jetbrains/int-ui-react
```

## 🚀 Quick Start

### Basic IDE Layout

```jsx
import React from 'react';
import { IDELayout } from '@jetbrains/int-ui-react';
import '@jetbrains/int-ui-react/dist/styles.css';

function App() {
  return (
    <IDELayout 
      projectName="my-project"
      theme="default"
    />
  );
}

export default App;
```

### Using Templates (Recommended for Prototyping)

```jsx
import { BasicIDEPrototype } from '@jetbrains/int-ui-react';
import '@jetbrains/int-ui-react/dist/styles.css';

function App() {
  return (
    <BasicIDEPrototype 
      projectName="My Awesome Project"
      onFileSelect={(file) => console.log('File selected:', file)}
    />
  );
}
```

## 🧩 Composable IDE Layout

The `IDELayoutComposable` component allows you to build custom IDE interfaces by composing different sections:

```jsx
import {
  IDELayoutComposable,
  MainToolbar,
  StripeContainer,
  Stripe,
  ToolWindow,
  Tree,
  StatusBar
} from '@jetbrains/int-ui-react';

function CustomIDE() {
  const [showLeftPanel, setShowLeftPanel] = useState(true);
  
  return (
    <IDELayoutComposable
      theme="island"
      showLeftPanel={showLeftPanel}
      
      // Customize the toolbar
      toolbar={
        <MainToolbar projectName="My Project" />
      }
      
      // Customize the left stripe
      leftStripe={
        <StripeContainer>
          <Stripe 
            icon="toolwindows/project@20x20"
            title="Project"
            onClick={() => setShowLeftPanel(!showLeftPanel)}
          />
        </StripeContainer>
      }
      
      // Customize the left panel
      leftPanel={
        <ToolWindow title="Project" width={280}>
          <Tree data={myProjectTree} />
        </ToolWindow>
      }
      
      // Customize the status bar
      statusBar={
        <StatusBar 
          breadcrumbs={[{ label: 'My Project' }]}
        />
      }
    >
      {/* Your editor content goes here */}
      <div>Editor Area</div>
    </IDELayoutComposable>
  );
}
```

## 📚 Component Categories

### Layout Components
Create complete IDE interfaces:
- `IDELayout` - Complete pre-built IDE layout
- `IDELayoutComposable` - Flexible, customizable IDE layout
- `MainWindow` - Main IDE window container
- `IDEWindow` - IDE window wrapper

### Input Components
- `Button`, `Input`, `Checkbox`, `Radio`
- `Dropdown`, `Combobox`, `Search`
- `Toggle`, `SegmentedControl`

### Overlay Components
- `Dialog` - Modal dialogs with header and footer
- `Popup` - Context menus and dropdowns
- `PopupCell` - Menu items for popups

### Navigation
- `TabBar`, `Tab` - Editor and tool window tabs
- `Stripe`, `StripeContainer` - Vertical toolbars
- `Tree`, `TreeNode` - File trees and hierarchies

### Tool Windows
- `ToolWindow` - Resizable panels
- `ToolWindowHeader` - Tool window headers

### Status & Progress
- `StatusBar` - Bottom status bar
- `ProgressBar` - Progress indicators

### Display
- `Icon`, `IconButton`, `Link`, `Table`

## 🎨 Prototyping Templates

Pre-built templates to kickstart your prototyping:

### BasicIDEPrototype
Complete IDE with project tree, editor, and status bar:

```jsx
import { BasicIDEPrototype } from '@jetbrains/int-ui-react';

<BasicIDEPrototype 
  projectName="my-project"
  theme="island"
  onFileSelect={(file) => console.log(file)}
/>
```

### MinimalIDEPrototype
Simple layout with just toolbar and editor:

```jsx
import { MinimalIDEPrototype } from '@jetbrains/int-ui-react';

<MinimalIDEPrototype projectName="my-project">
  <YourCustomEditor />
</MinimalIDEPrototype>
```

### DialogPrototype
IDE layout with integrated dialog:

```jsx
import { DialogPrototype } from '@jetbrains/int-ui-react';

<DialogPrototype 
  dialogTitle="Settings"
  dialogContent={<YourSettingsForm />}
  initialDialogOpen={true}
/>
```

## 🎯 Common Use Cases

### Creating a Custom Onboarding Flow

```jsx
import { 
  IDELayoutComposable, 
  Dialog, 
  Button 
} from '@jetbrains/int-ui-react';

function OnboardingFlow() {
  const [step, setStep] = useState(1);
  
  return (
    <IDELayoutComposable theme="island">
      <Dialog 
        visible={true}
        title={`Step ${step} of 3`}
        buttons={[
          { label: 'Next', variant: 'primary', onClick: () => setStep(step + 1) }
        ]}
      >
        <OnboardingStepContent step={step} />
      </Dialog>
    </IDELayoutComposable>
  );
}
```

### Building a Settings Page

```jsx
import { 
  IDELayoutComposable,
  Input,
  Checkbox,
  Button,
  SegmentedControl
} from '@jetbrains/int-ui-react';

function SettingsPage() {
  return (
    <IDELayoutComposable theme="default">
      <div style={{ padding: '24px' }}>
        <h2>Appearance & Behavior</h2>
        
        <SegmentedControl 
          options={[
            { value: 'light', label: 'Light' },
            { value: 'dark', label: 'Dark' }
          ]}
        />
        
        <Input label="Font Size" value="14" />
        <Checkbox label="Show line numbers" checked={true} />
        
        <Button variant="primary">Apply</Button>
      </div>
    </IDELayoutComposable>
  );
}
```

### Creating a Tool Window Plugin

```jsx
import {
  IDELayout,
  ToolWindow,
  Tree
} from '@jetbrains/int-ui-react';

function MyPluginPrototype() {
  const pluginData = [
    { id: '1', label: 'Root', children: [...] }
  ];
  
  return (
    <IDELayout
      projectName="my-project"
      // Override the left panel with your custom tool window
      leftPanel={
        <ToolWindow 
          title="My Plugin" 
          actions={['refresh', 'settings']}
        >
          <Tree data={pluginData} />
        </ToolWindow>
      }
    />
  );
}
```

## 🎨 Theming

The library supports two built-in themes:

```jsx
// Default theme (flat, traditional)
<IDELayout theme="default" />

// Island theme (modern, rounded panels)
<IDELayout theme="island" />
```

## 🔧 Advanced Customization

### Custom Editor Content

```jsx
<IDELayoutComposable>
  <div className="custom-editor">
    {/* Your Monaco Editor, CodeMirror, or custom editor */}
    <MonacoEditor 
      language="javascript"
      value={code}
      onChange={setCode}
    />
  </div>
</IDELayoutComposable>
```

### Dynamic Tool Windows

```jsx
function DynamicIDE() {
  const [toolWindows, setToolWindows] = useState({
    left: true,
    right: false,
    bottom: true
  });
  
  return (
    <IDELayoutComposable
      showLeftPanel={toolWindows.left}
      showRightPanel={toolWindows.right}
      showBottomPanel={toolWindows.bottom}
      leftPanel={<ProjectPanel />}
      rightPanel={<AIAssistantPanel />}
      bottomPanel={<TerminalPanel />}
    >
      <Editor />
    </IDELayoutComposable>
  );
}
```

## 📖 API Reference

### IDELayoutComposable Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `theme` | `'default' \| 'island'` | `'default'` | Visual theme |
| `toolbar` | `ReactNode` | `null` | Custom toolbar content |
| `leftStripe` | `ReactNode` | `null` | Left vertical toolbar |
| `rightStripe` | `ReactNode` | `null` | Right vertical toolbar |
| `leftPanel` | `ReactNode` | `null` | Left tool window content |
| `rightPanel` | `ReactNode` | `null` | Right tool window content |
| `bottomPanel` | `ReactNode` | `null` | Bottom tool window content |
| `statusBar` | `ReactNode` | `null` | Status bar content |
| `showLeftPanel` | `boolean` | `true` | Show/hide left panel |
| `showRightPanel` | `boolean` | `false` | Show/hide right panel |
| `showBottomPanel` | `boolean` | `false` | Show/hide bottom panel |
| `children` | `ReactNode` | - | Editor area content |

### Dialog Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `visible` | `boolean` | `false` | Show/hide dialog |
| `title` | `string` | - | Dialog title |
| `width` | `string` | `'auto'` | Dialog width |
| `onClose` | `() => void` | - | Close callback |
| `buttons` | `ButtonConfig[]` | `[]` | Footer buttons |
| `children` | `ReactNode` | - | Dialog content |

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

## 📄 License

Apache License 2.0 - see [LICENSE](LICENSE) for details.

## 🔗 Resources

- [IntelliJ Platform UI Guidelines](https://plugins.jetbrains.com/docs/intellij/ui-guidelines-welcome.html)
- [JetBrains Design System](https://www.jetbrains.com/company/brand/)
- [Int UI Kit in Figma](https://www.figma.com/community/file/1227732692272811382/int-ui-kit)

## 💡 Examples

Check out the `/examples` directory for more complete examples and prototypes.

## 🐛 Issues & Support

Found a bug or have a question? Please [open an issue](https://github.com/jetbrains/int-ui-react/issues).

---

Made with ❤️ by JetBrains

