import { useState } from 'react';
import Icon from '../icon/Icon';
import './ToolbarDropdown.css';

function ToolbarDropdown({
    icon,
    text = "Text",
    theme = "dark", // 'dark', 'light', 'light-header'
    disabled = false,
    onClick,
    children,
    className = "",
    ...props
}) {
    const [isHovered, setIsHovered] = useState(false);
    const [isPressed, setIsPressed] = useState(false);

    const handleClick = () => {
        if (!disabled && onClick) {
            onClick();
        }
    };

    const getStateClass = () => {
        if (disabled) return 'toolbar-dropdown-disabled';
        if (isPressed) return 'toolbar-dropdown-pressed';
        if (isHovered) return 'toolbar-dropdown-hovered';
        return '';
    };

    const getThemeClass = () => {
        switch (theme) {
            case 'light':
                return 'toolbar-dropdown-theme-light';
            case 'light-header':
                return 'toolbar-dropdown-theme-light-header';
            case 'dark':
            default:
                return 'toolbar-dropdown-theme-dark';
        }
    };

    const renderIcon = () => {
        if (!icon) return null;
        if (typeof icon === 'string') {
            return <Icon name={icon} size={16} className="toolbar-dropdown-icon" />;
        }
        return <div className="toolbar-dropdown-icon">{icon}</div>;
    };

    return (
        <button
            className={`toolbar-dropdown ${getThemeClass()} ${getStateClass()} ${className}`}
            onClick={handleClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => { setIsHovered(false); setIsPressed(false); }}
            onMouseDown={() => setIsPressed(true)}
            onMouseUp={() => setIsPressed(false)}
            disabled={disabled}
            {...props}
        >
            <div className="toolbar-dropdown-content">
                {renderIcon()}
                <div className="toolbar-dropdown-text-container">
                    <span className="toolbar-dropdown-text">{text}</span>
                    <Icon name="general/chevronDown" size={16} className="toolbar-dropdown-chevron" />
                </div>
            </div>
        </button>
    );
}

export default ToolbarDropdown;



