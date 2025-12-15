# Component Library

This library is used by UX designers to quickly prototype designs for IDEs.
Components are imitating Int UI Kit.

## 🎯 Overview

This library provides a collection of reusable UI components designed with modern design principles, featuring:

- **9 Core Components**: Button, Input, Tree, Tabs, Popup, ToolWindow, Stripe, CodeExample, ProjectSelector
- **2 Widgets**: Complex interactive components for advanced use cases
- **Advanced Theming**: Light/Dark/Auto theme support with CSS custom properties
- **Typography System**: Inter and JetBrains Mono font integration
- **Design Tokens**: Comprehensive color scales and semantic color system

## 🏗️ Architecture

### Project Structure
```
src/
├── componentsConfig.js          # Component configuration and categorization
├── ThemeContext.jsx            # Theme management with system preference detection
├── ui/
│   ├── components/             # Individual component implementations
│   │   ├── button/            # Button component with variants
│   │   ├── input/             # Input with labeling and layouts
│   │   ├── tree/              # Hierarchical tree component
│   │   ├── tabs/              # Tab navigation system
│   │   ├── popup/             # Context menus and dropdowns
│   │   ├── toolwindow/        # Resizable panels with tabs
│   │   ├── stripe/            # Vertical toolbar system
│   │   ├── showcase/          # Code examples and design tokens
│   │   ├── projectselector/   # Project selection widget
│   │   └── icon/              # Icon component system
│   └── styles/
│       ├── Themes.css         # Comprehensive theming system
│       ├── Colors.css         # Color scales and palettes
│       └── Typography.css     # Typography system
└── icons/                     # SVG icon assets
```

### Component Architecture

Each component follows a consistent pattern:
- **Component.jsx**: React component implementation
- **Component.css**: Component-specific styles using CSS custom properties
- **Props Interface**: Well-defined prop types and variants
- **State Management**: Local state with optional callbacks

### Theming System

The library uses a sophisticated CSS custom properties system:

#### Theme Modes
- **Light Theme**: Optimized for light backgrounds
- **Dark Theme**: Optimized for dark backgrounds  
- **Auto Theme**: Automatically follows system preference

#### Color System
- **Base Colors**: Gray, Blue, Green, Red, Yellow, Orange, Purple, Teal scales
- **Semantic Colors**: Background, text, border, interactive states
- **Editor Colors**: Syntax highlighting for code components
- **Component Colors**: Specific colors for buttons, inputs, tabs, etc.

#### Typography
- **UI Font**: Inter (13px/12px variants)
- **Editor Font**: JetBrains Mono (13px/12px variants)
- **Responsive**: Line heights and weights optimized for readability

## 🧩 Components

### Core Components

#### Button
```jsx
<Button type="primary" size="slim">Primary Button</Button>
<Button type="secondary" disabled>Secondary Button</Button>
```
- **Types**: `primary`, `secondary`
- **Sizes**: `default`, `slim`
- **States**: `disabled`

#### Input
```jsx
<Input label="Name" placeholder="Enter name..." />
<Input label="Email" layout="vertical" />
<Input error placeholder="Error state" />
```
- **Layouts**: `horizontal` (default), `vertical`
- **States**: `disabled`, `error`
- **Sizes**: `default`, `small`

#### Tree
```jsx
<Tree 
  data={treeData}
  onNodeSelect={(id, selected) => {}}
  onNodeToggle={(id, expanded) => {}}
/>
```
- **Features**: Hierarchical data, expand/collapse, selection
- **Icons**: Custom icon support per node
- **Callbacks**: Selection and toggle events

#### Tabs
```jsx
<TabBar 
  tabs={[{label: "Home"}, {label: "Settings", closable: true}]}
  direction="horizontal"
  size="small"
/>
```
- **Directions**: `horizontal`, `vertical`
- **Sizes**: `default`, `small`
- **Features**: Closable tabs, icons

#### Popup
```jsx
<Popup visible={true} header="Actions">
  <Popup.Cell type="line" icon="📄">New File</Popup.Cell>
  <Popup.Cell type="separator" />
  <Popup.Cell type="search" placeholder="Search..." />
</Popup>
```
- **Cell Types**: `line`, `multiline`, `separator`, `search`
- **Features**: Header, footer, icons, hints

### Widgets

#### ToolWindow
```jsx
<ToolWindow 
  title="Project"
  width={320}
  height={400}
  actions={['more', 'minimize']}
  headerType="tabs"
  tabs={[{label: "Debugger"}, {label: "Console"}]}
>
  <Tree data={data} />
</ToolWindow>
```
- **Features**: Resizable, tabbed headers, action buttons
- **Header Types**: `default`, `tabs`

#### ProjectSelector
```jsx
<ProjectSelector 
  projectName="my-project"
  projectIcon="MP"
  projectColor="cobalt"
  projects={projects}
  onProjectSelect={(project) => {}}
/>
```
- **Features**: Project switching, color coding, icons

## 🎨 Design System

### Color Tokens
The library uses a comprehensive color system with semantic naming:

```css
/* Background Colors */
--bg-primary: var(--gray-10);
--bg-secondary: var(--gray-20);
--bg-elevated: var(--gray-white);

/* Text Colors */
--text-primary: var(--gray-black);
--text-secondary: var(--gray-70);
--text-muted: var(--gray-80);

/* Interactive Colors */
--accent-primary: var(--blue-80);
--button-primary-bg: var(--blue-80);
--input-border-focus: var(--blue-80);
```

### Typography Classes
```css
.text-ui-default    /* 13px Inter, 500 weight */
.text-ui-small      /* 12px Inter, 500 weight */
.text-editor-default /* 13px JetBrains Mono, 500 weight */
.text-editor-small   /* 12px JetBrains Mono, 500 weight */
```

## 🚀 Getting Started

### Installation
```bash
npm install
```

### Development
```bash
npm start
```
Opens [http://localhost:3000](http://localhost:3000) with the component showcase.

### Building
```bash
npm run build
```
Creates optimized production build in the `build` folder.

### Testing
```bash
npm test
```
Launches the test runner in interactive watch mode.

## 🔧 Usage

### Basic Setup
```jsx
import { ThemeProvider } from './ThemeContext';
import Button from './ui/components/button/Button';
import './ui/styles/Themes.css';

function App() {
  return (
    <ThemeProvider>
      <Button type="primary">Hello World</Button>
    </ThemeProvider>
  );
}
```

### Theme Management
```jsx
import { useTheme } from './ThemeContext';

function MyComponent() {
  const { theme, themeMode, toggleTheme } = useTheme();
  
  return (
    <button onClick={toggleTheme}>
      Current theme: {theme} (mode: {themeMode})
    </button>
  );
}
```

### Component Configuration
Components are configured in `componentsConfig.js`:
```javascript
export const componentsConfig = [
  { 
    name: 'Buttons', 
    key: 'buttons', 
    description: 'Primary and secondary button variants', 
    category: 'components' 
  },
  // ... more components
];
```

## 📚 Component Showcase

The library includes a comprehensive showcase application that demonstrates:
- All component variants and states
- Interactive examples with real data
- Theme switching capabilities
- Typography and color system documentation

## 🎯 Design Principles

1. **Consistency**: All components follow the same design patterns
2. **Accessibility**: Proper contrast ratios and keyboard navigation
3. **Performance**: Optimized CSS and minimal JavaScript
4. **Flexibility**: Extensive customization through props and CSS variables
5. **Developer Experience**: Clear APIs and comprehensive documentation

## 🔄 Theme System Details

### Automatic Theme Detection
The library automatically detects system theme preferences and updates accordingly:

```javascript
// ThemeContext.jsx
const getSystemTheme = () => {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};
```

### CSS Custom Properties
All colors are defined as CSS custom properties, enabling easy theming:

```css
:root {
  --gray-10: #F7F6F8;
  --gray-20: #EBEBED;
  /* ... more color tokens */
}

.theme-light {
  --bg-primary: var(--gray-10);
  --text-primary: var(--gray-black);
}

.theme-dark {
  --bg-primary: var(--gray-140);
  --text-primary: var(--gray-30);
}
```

## 📖 Learn More

- [Create React App Documentation](https://facebook.github.io/create-react-app/docs/getting-started)
- [React Documentation](https://reactjs.org/)
- [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
- [IntelliJ Platform UI Guidelines](https://plugins.jetbrains.com/docs/intellij/user-interface-components.html)
