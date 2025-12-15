/**
 * JetBrains Int UI - React Component Library
 * A design system for building JetBrains-style interfaces and prototypes
 * 
 * @example Basic Usage
 * ```jsx
 * import { IDELayout, Button, Dialog } from 'jetbrainswebtest';
 * import 'jetbrainswebtest/dist/styles.css';
 * 
 * function App() {
 *   return <IDELayout projectName="My Project" />;
 * }
 * ```
 */

// Import all styles (theme tokens + component styles)
import './styles';

// Theme Provider
export { ThemeProvider, useTheme } from '../ThemeContext';

// Core Input Components
export { default as Button } from '../ui/components/button/Button';
export { default as Checkbox } from '../ui/components/checkbox/Checkbox';
export { default as Combobox } from '../ui/components/combobox/Combobox';
export { default as Dropdown } from '../ui/components/dropdown/Dropdown';
export { default as Input } from '../ui/components/input/Input';
export { default as Radio, RadioGroup } from '../ui/components/radio/Radio';
export { default as Search } from '../ui/components/search/Search';
export { default as SegmentedControl } from '../ui/components/segmentedcontrol/SegmentedControl';
export { default as Toggle } from '../ui/components/toggle/Toggle';

// Display Components
export { default as Icon } from '../ui/components/icon/Icon';
export { default as IconButton } from '../ui/components/iconbutton/IconButton';
export { default as Link } from '../ui/components/link/Link';
export { default as ProgressBar } from '../ui/components/progressbar/ProgressBar';
export { default as Table } from '../ui/components/table/Table';

// Overlay Components
export { default as Dialog } from '../ui/components/dialog/Dialog';
export { default as DialogHeader } from '../ui/components/dialog/DialogHeader';
export { default as DialogFooter } from '../ui/components/dialog/DialogFooter';
export { default as Popup } from '../ui/components/popup/Popup';
export { default as PopupCell } from '../ui/components/popup/PopupCell';

// Layout Components - Main Composable Screens
export { default as IDELayout } from '../ui/components/idelayout/IDELayout';
export { default as IDELayoutComposable } from '../ui/components/idelayout/IDELayoutComposable';
export { default as IDEWindow } from '../ui/components/idewindow/IDEWindow';
export { default as MainWindow } from '../ui/components/mainwindow/MainWindow';

// Navigation Components
export { default as Tab } from '../ui/components/tabs/Tab';
export { default as TabBar } from '../ui/components/tabs/TabBar';
export { default as Stripe } from '../ui/components/stripe/Stripe';
export { default as StripeContainer } from '../ui/components/stripe/StripeContainer';

// Toolbar Components
export { default as ToolbarDropdown } from '../ui/components/toolbardropdown/ToolbarDropdown';
export { default as ProjectSelector } from '../ui/components/projectselector/ProjectSelector';

// Status Bar Components
export { default as StatusBar } from '../ui/components/statusbar/StatusBar';
export { default as StatusBarBreadcrumb } from '../ui/components/statusbar/StatusBarBreadcrumb';
export { default as StatusBarProgress } from '../ui/components/statusbar/StatusBarProgress';
export { default as StatusBarWidget } from '../ui/components/statusbar/StatusBarWidget';

// Tool Window Components
export { default as ToolWindow } from '../ui/components/toolwindow/ToolWindow';
export { default as ToolWindowHeader } from '../ui/components/toolwindow/ToolWindowHeader';

// Tree Components
export { default as Tree } from '../ui/components/tree/Tree';
export { default as TreeNode } from '../ui/components/tree/TreeNode';

// Showcase Components (for demos)
export { default as CodeExample } from '../ui/components/showcase/CodeExample';
export { default as MainToolbar } from '../ui/components/showcase/MainToolbar';
export { default as ToolbarDemo } from '../ui/components/showcase/ToolbarDemo';

// Icon Registry - using pre-generated static imports for library build
export { default as iconRegistry, iconNames, getIcon } from '../icons/iconRegistry.generated';

// Prototyping Templates
export { BasicIDEPrototype, MinimalIDEPrototype, DialogPrototype, IDEApp } from '../templates';
