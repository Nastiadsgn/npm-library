import './Link.css';
import Icon from '../icon/Icon';

/**
 * Link component following IntelliJ UI Guidelines
 * https://plugins.jetbrains.com/docs/intellij/link.html
 * 
 * @param {Object} props
 * @param {string} props.children - Link text content
 * @param {'default' | 'dropdown' | 'external'} props.type - Link type (default, dropdown, external)
 * @param {boolean} props.disabled - Whether the link is disabled
 * @param {string} props.href - URL for the link (optional, renders as <a> if provided)
 * @param {function} props.onClick - Click handler
 * @param {string} props.className - Additional CSS classes
 * @param {Object} props.rest - Additional props passed to the element
 */
function Link({ 
    children, 
    type = 'default', 
    disabled = false, 
    href, 
    onClick, 
    className = '',
    ...rest 
}) {
    const classes = [
        'link',
        `link-${type}`,
        disabled ? 'link-disabled' : ''
    ].filter(Boolean).join(' ');

    const handleClick = (e) => {
        if (disabled) {
            e.preventDefault();
            return;
        }
        onClick?.(e);
    };

    const content = (
        <>
            <span className="link-text">{children}</span>
            {type === 'dropdown' && (
                <span className="link-icon">
                    <Icon name="general/chevronDown" size={16} />
                </span>
            )}
            {type === 'external' && (
                <span className="link-icon">
                    <ExternalLinkIcon />
                </span>
            )}
        </>
    );

    // Render as anchor if href is provided
    if (href && !disabled) {
        return (
            <a 
                href={href}
                className={`${classes} ${className}`.trim()}
                onClick={handleClick}
                target={type === 'external' ? '_blank' : undefined}
                rel={type === 'external' ? 'noopener noreferrer' : undefined}
                {...rest}
            >
                {content}
            </a>
        );
    }

    // Render as button for onClick behavior
    return (
        <button 
            type="button"
            className={`${classes} ${className}`.trim()}
            onClick={handleClick}
            disabled={disabled}
            {...rest}
        >
            {content}
        </button>
    );
}

/**
 * External link icon (arrow pointing to top-right)
 * Based on IntelliJ Platform icon style
 */
function ExternalLinkIcon() {
    return (
        <svg 
            width="16" 
            height="16" 
            viewBox="0 0 16 16" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
        >
            <path 
                d="M5 4.5H11.5V11M11.5 4.5L4.5 11.5" 
                stroke="currentColor" 
                strokeWidth="1" 
                strokeLinecap="round" 
                strokeLinejoin="round"
            />
        </svg>
    );
}

export default Link;

