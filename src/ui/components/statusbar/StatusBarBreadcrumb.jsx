import Icon from '../icon/Icon';
import './StatusBarBreadcrumb.css';

/**
 * StatusBarBreadcrumb component - displays a breadcrumb item in the status bar
 * 
 * @param {Object} props - Component props
 * @param {boolean} [props.icon=true] - Whether to show an icon
 * @param {string} [props.iconName] - Name of the icon to display (from icon registry)
 * @param {boolean} [props.module=false] - Whether to show the module indicator
 * @param {'default' | 'hovered' | 'selected' | 'selectedInactive'} [props.state='default'] - Visual state
 * @param {string} [props.label='Breadcrumb'] - Text label to display
 * @param {React.ReactNode} [props.children] - Alternative to label prop
 * @param {Function} [props.onClick] - Click handler
 * @param {string} [props.className] - Additional CSS classes
 */
function StatusBarBreadcrumb({
    icon = true,
    iconName,
    module = false,
    state = 'default',
    label = 'Breadcrumb',
    children,
    onClick,
    className,
    ...props
}) {
    const getStateClass = () => {
        switch (state) {
            case 'hovered':
                return 'status-bar-breadcrumb-hovered';
            case 'selected':
                return 'status-bar-breadcrumb-selected';
            case 'selectedInactive':
                return 'status-bar-breadcrumb-selected-inactive';
            default:
                return 'status-bar-breadcrumb-default';
        }
    };

    // Determine the element type based on state
    const isInteractive = state === 'hovered' || state === 'selected';
    const Element = isInteractive ? 'button' : 'div';

    const handleClick = (e) => {
        if (onClick) {
            onClick(e);
        }
    };

    const renderIcon = () => {
        if (!icon) return null;
        
        // If iconName is provided, use the Icon component with light theme
        if (iconName) {
            return (
                <div className="status-bar-breadcrumb-icon">
                    <Icon name={iconName} size={16} forceTheme="light" />
                </div>
            );
        }
        
        // Default placeholder icon (stub) - using light gray color
        return (
            <div className="status-bar-breadcrumb-icon">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="2" width="12" height="12" rx="2" stroke="#6C707E" strokeWidth="1.2" fill="none" opacity="0.6" />
                    <path d="M4 12L12 4M4 4L12 12" stroke="#6C707E" strokeWidth="1.2" opacity="0.6" />
                </svg>
            </div>
        );
    };

    const renderModule = () => {
        if (!module) return null;
        
        return (
            <div className="status-bar-breadcrumb-module">
                <div className="status-bar-breadcrumb-module-inner" />
            </div>
        );
    };

    return (
        <Element
            className={`status-bar-breadcrumb ${getStateClass()} ${className || ''}`}
            onClick={handleClick}
            type={isInteractive ? 'button' : undefined}
            {...props}
        >
            {renderIcon()}
            {renderModule()}
            <span className="status-bar-breadcrumb-label">
                {children || label}
            </span>
        </Element>
    );
}

export default StatusBarBreadcrumb;
