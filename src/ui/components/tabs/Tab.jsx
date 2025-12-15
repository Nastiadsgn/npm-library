import { useState } from 'react';
import Icon from '../icon/Icon';
import './Tab.css';

/**
 * Tab component aligned with IntelliJ UI Kit design
 * 
 * States:
 * - default: Not selected, opacity 0.67, no underline, no close button
 * - selected: Active tab, full opacity, blue underline, close button visible
 * - inactive: Previously opened, full opacity, gray underline, close button visible
 * 
 * Hover behavior:
 * - Default tabs: opacity becomes 1, close button appears (if closable)
 * - Selected/Inactive tabs: close button always visible
 */
function Tab({
    label,
    icon,
    active = false,
    inactive = false,
    disabled = false,
    closable = false,
    size,
    onClick,
    onClose,
    ...props
}) {
    const [isHovered, setIsHovered] = useState(false);

    // Determine state
    const getState = () => {
        if (disabled) return 'disabled';
        if (active) return 'selected';
        if (inactive) return 'inactive';
        return 'default';
    };

    const state = getState();

    // Build class names
    const classes = [
        'tab',
        `tab-${state}`,
        size === 'small' ? 'tab-small' : 'tab-size-default',
        isHovered && !disabled ? 'tab-hovered' : ''
    ].filter(Boolean).join(' ');

    const renderIcon = () => {
        if (!icon) return null;
        if (typeof icon === 'string') {
            return <Icon name={icon} size={16} className="tab-icon" />;
        }
        return <span className="tab-icon">{icon}</span>;
    };

    const handleClose = (e) => {
        e.stopPropagation();
        if (onClose) {
            onClose();
        }
    };

    // Has underline for selected and inactive states
    const hasUnderline = state === 'selected' || state === 'inactive';

    return (
        <button 
            className={classes}
            onClick={onClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            disabled={disabled}
            {...props}
        >
            <div className="tab-content">
                <div className="tab-content-inner">
            {renderIcon()}
                    <span className="tab-label">{label}</span>
                </div>
                {closable && (
                    <span className="tab-close" onClick={handleClose}>
                        <Icon name="general/closeSmall" size={16} />
        </span>
                )}
            </div>
            {hasUnderline && (
                <div className={`tab-underline ${state === 'selected' ? 'tab-underline-selected' : 'tab-underline-inactive'}`} />
            )}
        </button>
    );
}

export default Tab;
