# Prototyping Guide

This guide will help you quickly build IDE interface prototypes using the JetBrains Int UI React library.

## 🎯 Quick Start for Prototyping

### Step 1: Install the Library

```bash
npm install @jetbrains/int-ui-react
```

### Step 2: Choose Your Starting Point

We provide three ready-to-use templates:

#### 1. **BasicIDEPrototype** - Full IDE Experience
Perfect for prototyping features that need the full IDE context.

```jsx
import { BasicIDEPrototype } from '@jetbrains/int-ui-react';
import '@jetbrains/int-ui-react/dist/styles.css';

function App() {
  return (
    <BasicIDEPrototype 
      projectName="my-prototype"
      theme="island"
    />
  );
}
```

#### 2. **MinimalIDEPrototype** - Focus on Content
Great for prototyping dialogs, editors, or specific UI flows.

```jsx
import { MinimalIDEPrototype } from '@jetbrains/int-ui-react';

function App() {
  return (
    <MinimalIDEPrototype>
      <YourPrototypeHere />
    </MinimalIDEPrototype>
  );
}
```

#### 3. **DialogPrototype** - Modal Interactions
Ideal for settings, wizards, or any modal-based workflows.

```jsx
import { DialogPrototype } from '@jetbrains/int-ui-react';

function App() {
  return (
    <DialogPrototype 
      dialogTitle="New Feature"
      initialDialogOpen={true}
    />
  );
}
```

## 🏗️ Building Custom Prototypes

### Scenario 1: Prototyping a New Tool Window

```jsx
import {
  IDELayoutComposable,
  MainToolbar,
  ToolWindow,
  StatusBar,
  Tree
} from '@jetbrains/int-ui-react';

function MyToolWindowPrototype() {
  const myData = [
    {
      id: '1',
      label: 'My Root',
      icon: 'nodes/folder',
      children: [
        { id: '1-1', label: 'Item 1', icon: 'nodes/file' },
        { id: '1-2', label: 'Item 2', icon: 'nodes/file' }
      ]
    }
  ];

  return (
    <IDELayoutComposable
      theme="island"
      toolbar={<MainToolbar projectName="My Prototype" />}
      leftPanel={
        <ToolWindow 
          title="My New Tool Window"
          actions={['refresh', 'settings', 'close']}
          width={300}
        >
          <Tree 
            data={myData}
            onNodeSelect={(id) => console.log('Selected:', id)}
          />
        </ToolWindow>
      }
      statusBar={
        <StatusBar breadcrumbs={[{ label: 'My Prototype' }]} />
      }
    >
      <div style={{ padding: '20px' }}>
        Main editor area - your content here
      </div>
    </IDELayoutComposable>
  );
}
```

### Scenario 2: Prototyping an Onboarding Flow

```jsx
import { useState } from 'react';
import {
  IDELayoutComposable,
  Dialog,
  Button,
  Checkbox,
  SegmentedControl
} from '@jetbrains/int-ui-react';

function OnboardingPrototype() {
  const [step, setStep] = useState(1);
  const [preferences, setPreferences] = useState({
    theme: 'light',
    notifications: true,
    analytics: false
  });

  const steps = [
    {
      title: 'Welcome',
      content: (
        <div>
          <h2>Welcome to Our IDE!</h2>
          <p>Let's get you set up in just a few steps.</p>
        </div>
      )
    },
    {
      title: 'Choose Your Theme',
      content: (
        <SegmentedControl
          options={[
            { value: 'light', label: 'Light' },
            { value: 'dark', label: 'Dark' }
          ]}
          value={preferences.theme}
          onChange={(theme) => setPreferences({ ...preferences, theme })}
        />
      )
    },
    {
      title: 'Preferences',
      content: (
        <>
          <Checkbox
            label="Enable notifications"
            checked={preferences.notifications}
            onChange={(checked) => 
              setPreferences({ ...preferences, notifications: checked })
            }
          />
          <Checkbox
            label="Share analytics"
            checked={preferences.analytics}
            onChange={(checked) => 
              setPreferences({ ...preferences, analytics: checked })
            }
          />
        </>
      )
    }
  ];

  return (
    <IDELayoutComposable theme="island">
      <Dialog
        visible={true}
        title={steps[step - 1].title}
        width="500px"
        buttons={[
          step > 1 && { 
            label: 'Back', 
            onClick: () => setStep(step - 1) 
          },
          { 
            label: step === steps.length ? 'Finish' : 'Next',
            variant: 'primary',
            onClick: () => step < steps.length ? setStep(step + 1) : console.log('Done!')
          }
        ].filter(Boolean)}
      >
        <div style={{ padding: '20px', minHeight: '200px' }}>
          {steps[step - 1].content}
        </div>
      </Dialog>
    </IDELayoutComposable>
  );
}
```

### Scenario 3: Prototyping a Settings Dialog

```jsx
import { useState } from 'react';
import {
  DialogPrototype,
  Input,
  Checkbox,
  Dropdown,
  Button
} from '@jetbrains/int-ui-react';

function SettingsPrototype() {
  const [settings, setSettings] = useState({
    editorFontSize: '14',
    tabSize: '4',
    autoSave: true,
    colorScheme: 'darcula'
  });

  const settingsContent = (
    <div style={{ padding: '20px', minWidth: '500px' }}>
      <h3 style={{ marginTop: 0 }}>Editor Settings</h3>
      
      <div style={{ marginBottom: '16px' }}>
        <label style={{ display: 'block', marginBottom: '4px' }}>
          Font Size:
        </label>
        <Input 
          type="number"
          value={settings.editorFontSize}
          onChange={(e) => setSettings({
            ...settings, 
            editorFontSize: e.target.value
          })}
        />
      </div>

      <div style={{ marginBottom: '16px' }}>
        <label style={{ display: 'block', marginBottom: '4px' }}>
          Color Scheme:
        </label>
        <Dropdown
          options={[
            { value: 'darcula', label: 'Darcula' },
            { value: 'intellij-light', label: 'IntelliJ Light' },
            { value: 'high-contrast', label: 'High Contrast' }
          ]}
          value={settings.colorScheme}
          onChange={(value) => setSettings({
            ...settings,
            colorScheme: value
          })}
        />
      </div>

      <Checkbox
        label="Enable auto-save"
        checked={settings.autoSave}
        onChange={(checked) => setSettings({
          ...settings,
          autoSave: checked
        })}
      />
    </div>
  );

  return (
    <DialogPrototype
      dialogTitle="Settings"
      dialogContent={settingsContent}
      initialDialogOpen={true}
      dialogButtons={[
        { label: 'Cancel', onClick: () => console.log('Cancelled') },
        { 
          label: 'Apply', 
          variant: 'primary',
          onClick: () => console.log('Settings saved:', settings)
        }
      ]}
    />
  );
}
```

### Scenario 4: Prototyping a Popup Menu

```jsx
import { useState } from 'react';
import {
  MinimalIDEPrototype,
  Button,
  Popup,
  PopupCell
} from '@jetbrains/int-ui-react';

function PopupMenuPrototype() {
  const [popupVisible, setPopupVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleContextMenu = (e) => {
    e.preventDefault();
    setPosition({ x: e.clientX, y: e.clientY });
    setPopupVisible(true);
  };

  return (
    <MinimalIDEPrototype>
      <div 
        onContextMenu={handleContextMenu}
        style={{ padding: '40px', textAlign: 'center' }}
      >
        <p>Right-click anywhere to see the context menu</p>
      </div>

      {popupVisible && (
        <div 
          style={{ 
            position: 'fixed', 
            top: position.y, 
            left: position.x 
          }}
        >
          <Popup 
            visible={popupVisible}
            onClose={() => setPopupVisible(false)}
          >
            <PopupCell 
              label="New File"
              icon="actions/new"
              onClick={() => console.log('New File')}
            />
            <PopupCell 
              label="Open File..."
              icon="actions/open"
              shortcut="⌘O"
              onClick={() => console.log('Open File')}
            />
            <PopupCell type="separator" />
            <PopupCell 
              label="Settings"
              icon="actions/settings"
              onClick={() => console.log('Settings')}
            />
          </Popup>
        </div>
      )}
    </MinimalIDEPrototype>
  );
}
```

## 🎨 Customization Tips

### 1. **Mix and Match Components**
Don't be afraid to combine different components:

```jsx
<IDELayoutComposable>
  <Tabs />
  <Table data={myData} />
  <ProgressBar value={50} />
</IDELayoutComposable>
```

### 2. **Use Real Content When Possible**
Prototypes work better with realistic data:

```jsx
const realProjectTree = [
  {
    id: '1',
    label: 'my-actual-project',
    children: [
      { id: '2', label: 'src', children: [...] },
      { id: '3', label: 'package.json' }
    ]
  }
];
```

### 3. **Add Interactivity**
Make your prototype feel alive:

```jsx
function InteractivePrototype() {
  const [selected, setSelected] = useState(null);
  
  return (
    <Tree 
      data={myData}
      onNodeSelect={(id) => {
        setSelected(id);
        console.log('Selected:', id);
        // Update other parts of your UI
      }}
    />
  );
}
```

## 📦 Exporting Your Prototype

### For Sharing
1. Build your prototype: `npm run build`
2. Deploy to Vercel, Netlify, or GitHub Pages
3. Share the link with stakeholders

### For Presentation
```jsx
// Add fullscreen mode
const [fullscreen, setFullscreen] = useState(false);

useEffect(() => {
  const handleKeyPress = (e) => {
    if (e.key === 'F11') {
      e.preventDefault();
      setFullscreen(!fullscreen);
    }
  };
  window.addEventListener('keydown', handleKeyPress);
  return () => window.removeEventListener('keydown', handleKeyPress);
}, [fullscreen]);
```

## 🔄 Iterating on Your Prototype

### Quick Iteration Loop
1. Start with a template
2. Replace one section at a time
3. Test with users
4. Gather feedback
5. Refine and repeat

### Version Your Prototypes
```jsx
// v1 - Basic concept
function PrototypeV1() { ... }

// v2 - With user feedback
function PrototypeV2() { ... }

// v3 - Refined version
function PrototypeV3() { ... }
```

## 🎯 Best Practices

1. **Start Simple** - Begin with a template, add complexity gradually
2. **Focus on One Thing** - Prototype one feature or flow at a time
3. **Use Real Data** - Makes the prototype more convincing
4. **Add Polish Later** - Get the interaction right first
5. **Test Early** - Share with users as soon as possible
6. **Document Decisions** - Add comments explaining design choices

## 🤝 Need Help?

- Check the [main README](./LIBRARY_README.md) for component API details
- Browse the `/examples` directory for more examples
- Refer to [IntelliJ UI Guidelines](https://plugins.jetbrains.com/docs/intellij/ui-guidelines-welcome.html)

Happy Prototyping! 🚀

