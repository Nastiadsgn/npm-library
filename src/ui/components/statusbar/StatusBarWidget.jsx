import Icon from '../icon/Icon';
import './StatusBarWidget.css';

/**
 * StatusBarWidget component - displays a widget item in the status bar
 * Can show either text content or an icon
 * 
 * @param {Object} props - Component props
 * @param {'text' | 'icon'} [props.type='text'] - Widget type (text or icon)
 * @param {'default' | 'hovered' | 'pressed'} [props.state='default'] - Visual state
 * @param {string} [props.text='39:34'] - Text to display when type is 'text'
 * @param {string} [props.iconName] - Name of the icon to display when type is 'icon'
 * @param {React.ReactNode} [props.children] - Alternative content
 * @param {Function} [props.onClick] - Click handler
 * @param {string} [props.className] - Additional CSS classes
 */
function StatusBarWidget({
    type = 'text',
    state = 'default',
    text = '39:34',
    iconName,
    children,
    onClick,
    className,
    ...props
}) {
    const getStateClass = () => {
        switch (state) {
            case 'hovered':
                return 'status-bar-widget-hovered';
            case 'pressed':
                return 'status-bar-widget-pressed';
            default:
                return 'status-bar-widget-default';
        }
    };

    const handleClick = (e) => {
        if (onClick) {
            onClick(e);
        }
    };

    const renderContent = () => {
        // If children are provided, use them
        if (children) {
            return children;
        }

        // Icon type - use light theme icons
        if (type === 'icon') {
            if (iconName) {
                return (
                    <div className="status-bar-widget-icon">
                        <Icon name={iconName} size={16} forceTheme="light" />
                    </div>
                );
            }
            // Default placeholder icon (stub) - using light gray color
            return (
                <div className="status-bar-widget-icon">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="2" y="2" width="12" height="12" rx="2" stroke="#6C707E" strokeWidth="1.2" fill="none" opacity="0.6" />
                        <path d="M4 12L12 4M4 4L12 12" stroke="#6C707E" strokeWidth="1.2" opacity="0.6" />
                    </svg>
                </div>
            );
        }

        // Text type (default)
        return (
            <span className="status-bar-widget-text">
                {text}
            </span>
        );
    };

    return (
        <div
            className={`status-bar-widget ${getStateClass()} ${className || ''}`}
            onClick={handleClick}
            role="button"
            tabIndex={0}
            {...props}
        >
            {renderContent()}
        </div>
    );
}

export default StatusBarWidget;
