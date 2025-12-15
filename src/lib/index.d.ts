import { FC, ReactNode, HTMLAttributes, InputHTMLAttributes, ButtonHTMLAttributes } from 'react';

// Theme Provider
export interface ThemeContextValue {
  theme: 'light' | 'dark';
  themeMode: 'light' | 'dark' | 'auto';
  toggleTheme: () => void;
}

export interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: FC<ThemeProviderProps>;
export function useTheme(): ThemeContextValue;

// Button
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  type?: 'primary' | 'secondary';
  size?: 'default' | 'slim';
  disabled?: boolean;
  children?: ReactNode;
}

export const Button: FC<ButtonProps>;

// Checkbox
export interface CheckboxProps {
  checked?: boolean;
  indeterminate?: boolean;
  disabled?: boolean;
  label?: string;
  hint?: string;
  onChange?: (checked: boolean) => void;
  className?: string;
}

export const Checkbox: FC<CheckboxProps>;

// Dropdown
export interface DropdownOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface DropdownProps {
  options?: DropdownOption[];
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  error?: boolean;
  label?: string;
  layout?: 'vertical' | 'horizontal';
  labelWidth?: string;
  onChange?: (value: string) => void;
  className?: string;
}

export const Dropdown: FC<DropdownProps>;
export const Combobox: FC<DropdownProps>;

// Icon
export interface IconProps {
  name: string;
  size?: number;
  className?: string;
  forceTheme?: 'light' | 'dark';
}

export const Icon: FC<IconProps>;

// IconButton
export interface IconButtonProps {
  icon: string;
  size?: number;
  type?: 'action' | 'toggle';
  isActive?: boolean;
  disabled?: boolean;
  tooltip?: string;
  onClick?: () => void;
  className?: string;
}

export const IconButton: FC<IconButtonProps>;

// Input
export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: 'default' | 'small';
  error?: boolean;
  invalid?: boolean;
  label?: string;
  layout?: 'vertical' | 'horizontal';
  labelWidth?: string;
}

export const Input: FC<InputProps>;

// Popup
export interface PopupProps {
  isOpen?: boolean;
  onClose?: () => void;
  children?: ReactNode;
  className?: string;
}

export const Popup: FC<PopupProps>;

export interface PopupCellProps {
  icon?: string;
  label: string;
  shortcut?: string;
  disabled?: boolean;
  selected?: boolean;
  onClick?: () => void;
  className?: string;
}

export const PopupCell: FC<PopupCellProps>;

// ProgressBar
export interface ProgressBarProps {
  value?: number;
  max?: number;
  indeterminate?: boolean;
  label?: string;
  showStopButton?: boolean;
  onStop?: () => void;
  className?: string;
}

export const ProgressBar: FC<ProgressBarProps>;

// Radio
export interface RadioProps {
  checked?: boolean;
  disabled?: boolean;
  label?: string;
  hint?: string;
  name?: string;
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
}

export const Radio: FC<RadioProps>;

export interface RadioGroupOption {
  value: string;
  label: string;
  hint?: string;
  disabled?: boolean;
}

export interface RadioGroupProps {
  options?: RadioGroupOption[];
  value?: string;
  name?: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
  className?: string;
}

export const RadioGroup: FC<RadioGroupProps>;

// Toggle
export interface ToggleProps {
  checked?: boolean;
  disabled?: boolean;
  showLabel?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
}

export const Toggle: FC<ToggleProps>;

// Layout Components
export const IDELayout: FC<{ theme?: string; children?: ReactNode; className?: string }>;
export const IDEWindow: FC<{ children?: ReactNode; className?: string }>;
export const MainWindow: FC<{ children?: ReactNode; className?: string }>;

// Navigation Components
export const Tab: FC<{ label: string; icon?: string; active?: boolean; closable?: boolean; onClick?: () => void; onClose?: () => void }>;
export const TabBar: FC<{ tabs?: any[]; activeTab?: string; orientation?: 'horizontal' | 'vertical'; onTabChange?: (id: string) => void }>;
export const Stripe: FC<{ icon: string; label?: string; active?: boolean; inactive?: boolean; badge?: boolean; position?: 'left' | 'right'; onClick?: () => void }>;
export const StripeContainer: FC<{ children?: ReactNode; position?: 'left' | 'right' }>;

// Toolbar Components
export const ToolbarDropdown: FC<{ label: string; icon?: string; theme?: string; disabled?: boolean; options?: any[]; value?: string; onChange?: (value: string) => void }>;
export const ProjectSelector: FC<{ projectName: string; projectIcon?: string; disabled?: boolean; onClick?: () => void }>;

// Status Bar Components
export const StatusBar: FC<{ children?: ReactNode; className?: string }>;
export const StatusBarBreadcrumb: FC<{ items?: any[]; className?: string }>;
export const StatusBarProgress: FC<{ label?: string; value?: number; indeterminate?: boolean }>;
export const StatusBarWidget: FC<{ icon?: string; label?: string; onClick?: () => void }>;

// Tool Window Components
export const ToolWindow: FC<{ title?: string; icon?: string; children?: ReactNode; tabs?: any[]; activeTab?: string; onTabChange?: (id: string) => void; onClose?: () => void }>;
export const ToolWindowHeader: FC<{ title?: string; icon?: string; actions?: ReactNode; onClose?: () => void }>;

// Tree Components
export const Tree: FC<{ data?: any[]; selectedId?: string; onSelect?: (id: string) => void; onExpand?: (id: string, expanded: boolean) => void }>;
export const TreeNode: FC<{ node: any; level?: number; selectedId?: string; onSelect?: (id: string) => void; onExpand?: (id: string, expanded: boolean) => void }>;

// Icon Registry
export const iconRegistry: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>>;
export const iconNames: string[];
export function getIcon(name: string): React.ComponentType<React.SVGProps<SVGSVGElement>> | undefined;

// ============================================
// Prototyping Templates
// ============================================

/**
 * IDEApp - Full-screen IDE application template
 * 
 * Creates a complete IDE application that fills the entire viewport.
 * Perfect for building IDE-like prototypes or applications.
 */
export interface IDEAppProps {
  /** IDE theme style - 'island' (modern) or 'default' (classic) */
  theme?: 'island' | 'default';
  /** Project name shown in the toolbar */
  projectName?: string;
  /** Two-letter project icon abbreviation */
  projectIcon?: string;
  /** Project icon color: cobalt, grass, amber, violet, teal, plum, ocean */
  projectColor?: 'cobalt' | 'grass' | 'amber' | 'violet' | 'teal' | 'plum' | 'ocean';
  /** Git branch name */
  branchName?: string;
  /** Run configuration name */
  runConfig?: string;
  /** Additional CSS class */
  className?: string;
}

export const IDEApp: FC<IDEAppProps> & {
  /** CSS required for full-screen mode - add to your global styles */
  requiredCSS: string;
};

/**
 * BasicIDEPrototype - A ready-to-use IDE layout template with project tree
 */
export interface BasicIDEPrototypeProps {
  projectName?: string;
  projectIcon?: string;
  projectColor?: string;
  theme?: 'island' | 'default';
  editorContent?: ReactNode;
  projectTree?: any[];
  onFileSelect?: (id: string) => void;
}

export const BasicIDEPrototype: FC<BasicIDEPrototypeProps>;

/**
 * MinimalIDEPrototype - A minimal IDE layout with just editor area
 */
export interface MinimalIDEPrototypeProps {
  projectName?: string;
  theme?: 'island' | 'default';
  children?: ReactNode;
}

export const MinimalIDEPrototype: FC<MinimalIDEPrototypeProps>;

/**
 * DialogPrototype - Template for dialog-based workflows
 */
export interface DialogPrototypeProps {
  title?: string;
  children?: ReactNode;
  onClose?: () => void;
  onConfirm?: () => void;
}

export const DialogPrototype: FC<DialogPrototypeProps>;
