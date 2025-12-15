# Quick Start Guide - Prototyping with JetBrains Int UI

This guide will get you up and running with prototyping in **5 minutes**.

## 📦 Installation

```bash
npm install @jetbrains/int-ui-react
# or
yarn add @jetbrains/int-ui-react
```

## 🚀 Your First Prototype (2 minutes)

### Option 1: Using BasicIDEPrototype Template

Create a new file `App.jsx`:

```jsx
import React from 'react';
import { BasicIDEPrototype } from '@jetbrains/int-ui-react';
import '@jetbrains/int-ui-react/dist/styles.css';

function App() {
  return (
    <BasicIDEPrototype 
      projectName="my-awesome-project"
      theme="island"
      onFileSelect={(file) => alert(`Selected: ${file}`)}
    />
  );
}

export default App;
```

**That's it!** You now have a fully functional IDE interface.

### Option 2: Composable Layout (5 minutes)

For more control, use `IDELayoutComposable`:

```jsx
import React, { useState } from 'react';
import {
  IDELayoutComposable,
  MainToolbar,
  ToolWindow,
  Tree,
  StatusBar
} from '@jetbrains/int-ui-react';
import '@jetbrains/int-ui-react/dist/styles.css';

function App() {
  const projectTree = [
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
      toolbar={<MainToolbar projectName="My Project" />}
      leftPanel={
        <ToolWindow title="Project" width={280}>
          <Tree data={projectTree} />
        </ToolWindow>
      }
      statusBar={
        <StatusBar breadcrumbs={[{ label: 'My Project' }]} />
      }
    >
      <div style={{ padding: '20px' }}>
        <h1>Your editor content here</h1>
      </div>
    </IDELayoutComposable>
  );
}

export default App;
```

## 🎨 Customization Examples

### Add a Dialog

```jsx
import { Dialog, Button } from '@jetbrains/int-ui-react';

function MyPrototype() {
  const [showDialog, setShowDialog] = useState(false);
  
  return (
    <>
      <Button onClick={() => setShowDialog(true)}>
        Open Settings
      </Button>
      
      <Dialog
        visible={showDialog}
        title="Settings"
        onClose={() => setShowDialog(false)}
        buttons={[
          { label: 'Cancel', onClick: () => setShowDialog(false) },
          { label: 'OK', variant: 'primary', onClick: () => setShowDialog(false) }
        ]}
      >
        <div style={{ padding: '20px' }}>
          Your settings content here
        </div>
      </Dialog>
    </>
  );
}
```

### Customize Tool Windows

```jsx
<IDELayoutComposable
  leftPanel={
    <ToolWindow title="My Custom Panel" width={300}>
      <YourCustomComponent />
    </ToolWindow>
  }
  rightPanel={
    <ToolWindow title="AI Assistant" width={350}>
      <YourAIComponent />
    </ToolWindow>
  }
>
  <YourEditor />
</IDELayoutComposable>
```

## 📚 Available Templates

| Template | Use Case | Best For |
|----------|----------|----------|
| `BasicIDEPrototype` | Full IDE experience | Complete feature prototypes |
| `MinimalIDEPrototype` | Simple layout | Focus on specific content |
| `DialogPrototype` | Modal interactions | Settings, wizards, forms |

## 🎯 Common Components

### Inputs
```jsx
import { Input, Checkbox, Dropdown, Toggle } from '@jetbrains/int-ui-react';

<Input placeholder="Enter text..." />
<Checkbox label="Enable feature" />
<Dropdown options={[...]} />
<Toggle checked={true} />
```

### Navigation
```jsx
import { TabBar, Tree } from '@jetbrains/int-ui-react';

<TabBar tabs={[{ label: 'Tab 1' }, { label: 'Tab 2' }]} />
<Tree data={treeData} onNodeSelect={(id) => console.log(id)} />
```

### Layout
```jsx
import { ToolWindow, StatusBar } from '@jetbrains/int-ui-react';

<ToolWindow title="My Panel" width={300}>
  Content
</ToolWindow>

<StatusBar breadcrumbs={[{ label: 'Home' }]} />
```

## 🎨 Themes

Switch between themes:

```jsx
<IDELayoutComposable theme="default">  // Traditional flat design
<IDELayoutComposable theme="island">   // Modern rounded panels
```

## 📖 Next Steps

1. **Read the full documentation**: See [LIBRARY_README.md](./LIBRARY_README.md)
2. **Explore examples**: Check [PROTOTYPING_GUIDE.md](./PROTOTYPING_GUIDE.md)
3. **Customize components**: All components accept props for customization
4. **Build your flow**: Combine components to create your specific prototype

## 🆘 Need Help?

- **API Reference**: [LIBRARY_README.md](./LIBRARY_README.md)
- **Prototyping Guide**: [PROTOTYPING_GUIDE.md](./PROTOTYPING_GUIDE.md)
- **UI Guidelines**: [IntelliJ Platform UI Guidelines](https://plugins.jetbrains.com/docs/intellij/ui-guidelines-welcome.html)

## 💡 Tips

1. Start with a template, customize later
2. Use realistic data for better prototypes
3. Test early and often
4. Focus on one feature at a time
5. Share prototypes for feedback

Happy Prototyping! 🚀

