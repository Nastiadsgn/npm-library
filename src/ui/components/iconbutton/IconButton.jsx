import Icon from '../icon/Icon';
import './IconButton.css';

/**
 * ToolbarIconButton - A toolbar icon button containing only an icon.
 * 
 * Two types of toolbar icon buttons:
 * - action: triggers immediately (default)
 * - toggle: switches between on and off states
 * 
 * @see https://plugins.jetbrains.com/docs/intellij/icon-button.html
 */
function ToolbarIconButton({
    icon,
    type = 'action',
    toggled = false,
    disabled = false,
    tooltip,
    shortcut,
    showBadge = false,
    onClick,
    className = '',
    ...props
}) {
    const classes = [
        'toolbar-icon-button',
        `toolbar-icon-button-${type}`,
        toggled && type === 'toggle' ? 'toolbar-icon-button-toggled' : '',
        disabled ? 'toolbar-icon-button-disabled' : '',
        showBadge ? 'toolbar-icon-button-badge' : '',
        className
    ].filter(Boolean).join(' ');

    const iconSize = 16;

    const tooltipText = tooltip 
        ? (shortcut ? `${tooltip} (${shortcut})` : tooltip)
        : undefined;

    return (
        <button
            className={classes}
            disabled={disabled}
            onClick={onClick}
            title={tooltipText}
            aria-pressed={type === 'toggle' ? toggled : undefined}
            {...props}
        >
            <Icon name={icon} size={iconSize} />
        </button>
    );
}

export default ToolbarIconButton;

