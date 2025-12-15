// Shared configuration for all components
export const componentsConfig = [
    { name: 'Buttons', key: 'buttons', description: 'Primary and secondary button variants', category: 'components' },
    { name: 'Checkbox', key: 'checkbox', description: 'Checkbox with checked, indeterminate, and disabled states', category: 'components' },
    { name: 'WebStorm Onboarding', key: 'webstorm-onboarding', description: 'WebStorm onboarding flow variants showcase', category: 'features' },
    { name: 'Code Example', key: 'codeexample', description: 'Code display with syntax highlighting and line numbers', category: 'components' },
    { name: 'Combobox', key: 'combobox', description: 'Editable dropdown with filtering and selection', category: 'components' },
    { name: 'Dropdown', key: 'dropdown', description: 'Select dropdown with options list', category: 'components' },
    { name: 'Toolbar Icon Button', key: 'toolbariconbutton', description: 'Toolbar icon buttons with action and toggle types', category: 'components' },
    { name: 'Inputs', key: 'inputs', description: 'Text input fields with various states', category: 'components' },
    { name: 'Link', key: 'link', description: 'Text links with default, dropdown, and external variants', category: 'components' },
    { name: 'IDE Layout', key: 'idelayout', description: 'Complete IDE layout with default and island themes', category: 'components' },
    { name: 'Popup', key: 'popup', description: 'Contextual menus and dropdowns with various cell types', category: 'components' },
    { name: 'Project Selector', key: 'projectselector', description: 'Dropdown for selecting active project with icon and name', category: 'components' },
    { name: 'Radio Button', key: 'radio', description: 'Radio button for single selection from options', category: 'components' },
    { name: 'Search', key: 'search', description: 'Search input field with icon and clear button', category: 'components' },
    { name: 'Segmented Control', key: 'segmentedcontrol', description: 'Button group for toggling between mutually exclusive options', category: 'components' },
    { name: 'Table', key: 'table', description: 'Data table with columns, rows, and optional toolbar', category: 'components' },
    { name: 'Status Bar', key: 'statusbar', description: 'IDE status bar with breadcrumbs, progress, and widgets', category: 'components' },
    { name: 'Status Bar Breadcrumb', key: 'statusbarbreadcrumb', description: 'Breadcrumb navigation item for status bar', category: 'components' },
    { name: 'Stripe', key: 'stripe', description: 'Vertical toolbar buttons with container', category: 'components' },
    { name: 'Toolbar', key: 'toolbar', description: 'Main toolbar preview with icon actions', category: 'components' },
    { name: 'Toolbar Dropdown', key: 'toolbardropdown', description: 'Dropdown button for main toolbar with themes and states', category: 'components' },
    { name: 'Tabs', key: 'tabs', description: 'Horizontal and vertical tab navigation', category: 'components' },
    { name: 'Toggle', key: 'toggle', description: 'Toggle switch with ON/OFF states', category: 'components' },
    { name: 'Progress Bar', key: 'progressbar', description: 'Progress indicator with optional label and stop button', category: 'components' },
    { name: 'Tool Window', key: 'toolwindow', description: 'Resizable panels with optional tabs', category: 'components' },
    { name: 'Tree', key: 'tree', description: 'Hierarchical file tree component', category: 'components' }
];

// Function to get components sorted alphabetically
export const getSortedComponents = () => {
    return [...componentsConfig].sort((a, b) => a.name.localeCompare(b.name));
};

// Function to get only components (category: 'components')
export const getSortedComponentsOnly = () => {
    return [...componentsConfig]
        .filter(item => item.category === 'components')
        .sort((a, b) => a.name.localeCompare(b.name));
};

// Function to get only features (category: 'features')
export const getSortedFeaturesOnly = () => {
    return [...componentsConfig]
        .filter(item => item.category === 'features')
        .sort((a, b) => a.name.localeCompare(b.name));
};

// Categories configuration
export const categoriesConfig = [
    {
        name: 'Styles',
        description: 'Design tokens and foundational styles',
        pages: [
            { name: 'Typography', key: 'typography', description: 'Text styles for UI and editor' },
            { name: 'Colors', key: 'colors', description: 'Color scales and palettes' }
        ]
    },
    {
        name: 'Components',
        description: 'Interactive UI components',
        pages: getSortedComponentsOnly()
    }
];
