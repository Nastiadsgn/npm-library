import { useState } from 'react';
import './Toggle.css';

function Toggle({
    checked = false,
    disabled = false,
    showLabel = true,
    onChange,
    className = '',
    ...props
}) {
    const [isHovered, setIsHovered] = useState(false);

    const handleClick = () => {
        if (!disabled && onChange) {
            onChange(!checked);
        }
    };

    const handleKeyDown = (e) => {
        if ((e.key === 'Enter' || e.key === ' ') && !disabled) {
            e.preventDefault();
            onChange(!checked);
        }
    };

    const getToggleClasses = () => {
        let classes = ['toggle'];
        
        if (checked) {
            classes.push('toggle-on');
        } else {
            classes.push('toggle-off');
        }
        if (disabled) {
            classes.push('toggle-disabled');
        }
        if (isHovered && !disabled) {
            classes.push('toggle-hovered');
        }
        
        return classes.join(' ');
    };

    return (
        <div
            className={`${getToggleClasses()} ${className}`}
            onClick={handleClick}
            onKeyDown={handleKeyDown}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            role="switch"
            aria-checked={checked}
            aria-disabled={disabled}
            tabIndex={disabled ? -1 : 0}
            {...props}
        >
            <div className="toggle-track">
                <div className="toggle-fill" />
                {showLabel && (
                    <span className="toggle-label">
                        {checked ? 'ON' : 'OFF'}
                    </span>
                )}
            </div>
        </div>
    );
}

export default Toggle;



