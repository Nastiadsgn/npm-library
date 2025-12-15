/**
 * JetBrains Int UI - React Component Library Type Definitions
 * TypeScript definitions for building JetBrains-style interfaces
 */

import * as React from 'react';

// ==================== Theme Provider ====================

export interface ThemeContextValue {
    theme: 'light' | 'dark';
    toggleTheme: () => void;
}

export const ThemeProvider: React.FC<{ children: React.ReactNode }>;
export function useTheme(): ThemeContextValue;

// ==================== Core Input Components ====================

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'default';
    size?: 'small' | 'medium' | 'large';
    disabled?: boolean;
}

export const Button: React.FC<ButtonProps>;

export interface CheckboxProps {
    label?: string;
    checked?: boolean;
    indeterminate?: boolean;
    disabled?: boolean;
    onChange?: (checked: boolean) => void;
}

export const Checkbox: React.FC<CheckboxProps>;

export interface ComboboxProps {
    options?: Array<{ value: string; label: string }>;
    value?: string;
    placeholder?: string;
    onChange?: (value: string) => void;
}

export const Combobox: React.FC<ComboboxProps>;

export interface DropdownProps {
    options?: Array<{ value: string; label: string; icon?: string }>;
    value?: string;
    onChange?: (value: string) => void;
}

export const Dropdown: React.FC<DropdownProps>;

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    error?: boolean;
    helperText?: string;
}

export const Input: React.FC<InputProps>;

export interface RadioProps {
    label?: string;
    value?: string;
    checked?: boolean;
    disabled?: boolean;
    onChange?: (value: string) => void;
}

export const Radio: React.FC<RadioProps>;

export interface RadioGroupProps {
    options?: Array<{ value: string; label: string }>;
    value?: string;
    onChange?: (value: string) => void;
}

export const RadioGroup: React.FC<RadioGroupProps>;

export interface SearchProps {
    value?: string;
    placeholder?: string;
    onChange?: (value: string) => void;
    onClear?: () => void;
}

export const Search: React.FC<SearchProps>;

export interface SegmentedControlProps {
    options?: Array<{ value: string; label: string }>;
    value?: string;
    onChange?: (value: string) => void;
}

export const SegmentedControl: React.FC<SegmentedControlProps>;

export interface ToggleProps {
    checked?: boolean;
    disabled?: boolean;
    onChange?: (checked: boolean) => void;
    label?: string;
}

export const Toggle: React.FC<ToggleProps>;

// ==================== Display Components ====================

export interface IconProps {
    name: string;
    size?: number;
    className?: string;
}

export const Icon: React.FC<IconProps>;

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    icon: string;
    tooltip?: string;
    state?: 'default' | 'hover' | 'pressed';
}

export const IconButton: React.FC<IconButtonProps>;

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    variant?: 'default' | 'dropdown' | 'external';
    disabled?: boolean;
}

export const Link: React.FC<LinkProps>;

export interface ProgressBarProps {
    value?: number;
    label?: string;
    showStop?: boolean;
    onStop?: () => void;
}

export const ProgressBar: React.FC<ProgressBarProps>;

export interface TableProps {
    columns?: Array<{ key: string; label: string; width?: string }>;
    data?: Array<Record<string, any>>;
    onRowSelect?: (row: any) => void;
}

export const Table: React.FC<TableProps>;

// ==================== Overlay Components ====================

export interface DialogProps {
    visible?: boolean;
    title?: string;
    width?: string;
    height?: string;
    onClose?: () => void;
    buttons?: Array<{ label: string; variant?: string; onClick?: () => void }>;
    helpIcon?: boolean;
    footerCheckbox?: { label: string; checked?: boolean; onChange?: (checked: boolean) => void };
    children?: React.ReactNode;
}

export const Dialog: React.FC<DialogProps> & {
    Header: React.FC<{ title: string; onClose?: () => void }>;
    Footer: React.FC<{ buttons?: any[]; helpIcon?: boolean; footerCheckbox?: any }>;
};

export const DialogHeader: React.FC<{ title: string; onClose?: () => void }>;
export const DialogFooter: React.FC<{ buttons?: any[]; helpIcon?: boolean; footerCheckbox?: any }>;

export interface PopupProps {
    visible?: boolean;
    children?: React.ReactNode;
    onClose?: () => void;
}

export const Popup: React.FC<PopupProps>;

export interface PopupCellProps {
    label?: string;
    icon?: string;
    shortcut?: string;
    disabled?: boolean;
    type?: 'default' | 'separator' | 'header';
    onClick?: () => void;
}

export const PopupCell: React.FC<PopupCellProps>;

// ==================== Layout Components ====================

export interface IDELayoutProps {
    theme?: 'default' | 'island';
    projectName?: string;
    projectIcon?: string;
    projectColor?: string;
    branchName?: string;
    runConfig?: string;
    className?: string;
}

export const IDELayout: React.FC<IDELayoutProps>;

export interface IDELayoutComposableProps {
    theme?: 'default' | 'island';
    className?: string;
    toolbar?: React.ReactNode;
    leftStripe?: React.ReactNode;
    rightStripe?: React.ReactNode;
    leftPanel?: React.ReactNode;
    rightPanel?: React.ReactNode;
    bottomPanel?: React.ReactNode;
    statusBar?: React.ReactNode;
    showLeftPanel?: boolean;
    showRightPanel?: boolean;
    showBottomPanel?: boolean;
    onLeftPanelToggle?: () => void;
    onRightPanelToggle?: () => void;
    onBottomPanelToggle?: () => void;
    children?: React.ReactNode;
}

export const IDELayoutComposable: React.FC<IDELayoutComposableProps> & {
    Toolbar: React.FC<{ children?: React.ReactNode }>;
    LeftStripe: React.FC<{ children?: React.ReactNode }>;
    RightStripe: React.FC<{ children?: React.ReactNode }>;
    LeftPanel: React.FC<{ children?: React.ReactNode }>;
    RightPanel: React.FC<{ children?: React.ReactNode }>;
    BottomPanel: React.FC<{ children?: React.ReactNode }>;
    EditorArea: React.FC<{ children?: React.ReactNode }>;
    StatusBar: React.FC<{ children?: React.ReactNode }>;
};

export interface IDEWindowProps {
    theme?: 'default' | 'island';
    className?: string;
    children?: React.ReactNode;
}

export const IDEWindow: React.FC<IDEWindowProps>;

export interface MainWindowProps {
    projectName?: string;
    projectIcon?: string;
    projectColor?: string;
    branchName?: string;
    runConfig?: string;
    className?: string;
}

export const MainWindow: React.FC<MainWindowProps>;

// ==================== Navigation Components ====================

export interface TabProps {
    label?: string;
    icon?: string;
    active?: boolean;
    closable?: boolean;
    onClick?: () => void;
    onClose?: () => void;
}

export const Tab: React.FC<TabProps>;

export interface TabBarProps {
    tabs?: Array<{ label: string; icon?: string; closable?: boolean }>;
    direction?: 'horizontal' | 'vertical';
    size?: 'small' | 'medium' | 'large';
    activeIndex?: number;
    onTabClick?: (index: number) => void;
}

export const TabBar: React.FC<TabBarProps>;

export interface StripeProps {
    icon?: string;
    state?: 'default' | 'selected' | 'hover';
    title?: string;
    onClick?: () => void;
}

export const Stripe: React.FC<StripeProps>;

export const StripeContainer: React.FC<{ children?: React.ReactNode; className?: string }> & {
    Separator: React.FC;
};

// ==================== Toolbar Components ====================

export interface ToolbarDropdownProps {
    label?: string;
    icon?: string;
    options?: Array<{ value: string; label: string }>;
    onChange?: (value: string) => void;
}

export const ToolbarDropdown: React.FC<ToolbarDropdownProps>;

export interface ProjectSelectorProps {
    projectName?: string;
    projectIcon?: string;
    projectColor?: string;
    onClick?: () => void;
}

export const ProjectSelector: React.FC<ProjectSelectorProps>;

// ==================== Status Bar Components ====================

export interface StatusBarProps {
    breadcrumbs?: Array<{ label: string; module?: boolean; icon?: boolean; iconName?: string }>;
    widgets?: Array<{ type: 'text' | 'icon'; text?: string; iconName?: string }>;
}

export const StatusBar: React.FC<StatusBarProps>;

export interface StatusBarBreadcrumbProps {
    label?: string;
    module?: boolean;
    icon?: boolean;
    iconName?: string;
}

export const StatusBarBreadcrumb: React.FC<StatusBarBreadcrumbProps>;

export const StatusBarProgress: React.FC<{ value?: number }>;
export const StatusBarWidget: React.FC<{ type?: 'text' | 'icon'; text?: string; iconName?: string }>;

// ==================== Tool Window Components ====================

export interface ToolWindowProps {
    title?: string;
    width?: number | string;
    height?: number | string;
    headerType?: 'default' | 'tabs';
    tabs?: Array<{ id: string; label: string; closable?: boolean }>;
    activeTab?: number;
    onTabChange?: (index: number) => void;
    actions?: Array<'add' | 'more' | 'minimize'>;
    className?: string;
    children?: React.ReactNode;
}

export const ToolWindow: React.FC<ToolWindowProps>;
export const ToolWindowHeader: React.FC<{ title?: string; actions?: string[] }>;

// ==================== Tree Components ====================

export interface TreeNodeData {
    id: string;
    label: string;
    icon?: string;
    isExpanded?: boolean;
    children?: TreeNodeData[];
}

export interface TreeProps {
    data?: TreeNodeData[];
    onNodeSelect?: (id: string) => void;
    onNodeToggle?: (id: string) => void;
}

export const Tree: React.FC<TreeProps>;
export const TreeNode: React.FC<TreeNodeData>;

// ==================== Showcase Components ====================

export interface CodeExampleProps {
    code?: string;
    language?: string;
    showLineNumbers?: boolean;
}

export const CodeExample: React.FC<CodeExampleProps>;

export interface MainToolbarProps {
    projectName?: string;
    projectIcon?: string;
    projectColor?: string;
    branchName?: string;
    runConfig?: string;
}

export const MainToolbar: React.FC<MainToolbarProps>;
export const ToolbarDemo: React.FC;

// ==================== Icon Registry ====================

export const iconRegistry: Record<string, string>;
export const iconNames: string[];
export function getIcon(name: string): string | undefined;

// ==================== Prototyping Templates ====================

export interface BasicIDEPrototypeProps {
    projectName?: string;
    projectIcon?: string;
    projectColor?: string;
    theme?: 'default' | 'island';
    editorContent?: React.ReactNode;
    projectTree?: TreeNodeData[];
    onFileSelect?: (id: string) => void;
}

export const BasicIDEPrototype: React.FC<BasicIDEPrototypeProps>;

export interface MinimalIDEPrototypeProps {
    projectName?: string;
    theme?: 'default' | 'island';
    children?: React.ReactNode;
}

export const MinimalIDEPrototype: React.FC<MinimalIDEPrototypeProps>;

export interface DialogPrototypeProps {
    projectName?: string;
    dialogTitle?: string;
    dialogContent?: React.ReactNode;
    dialogButtons?: Array<{ label: string; variant?: string; onClick?: () => void }>;
    initialDialogOpen?: boolean;
    theme?: 'default' | 'island';
    children?: React.ReactNode;
}

export const DialogPrototype: React.FC<DialogPrototypeProps>;

