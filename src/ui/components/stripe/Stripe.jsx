import { useState } from 'react';
import Icon from '../icon/Icon';
import './Stripe.css';

function Stripe({ 
    icon,
    state = 'default', 
    badge = false, 
    onClick,
    disabled = false,
    title,
    ...props 
}) {
    const [isHovered, setIsHovered] = useState(false);

    const handleClick = () => {
        if (onClick && !disabled) {
            onClick();
        }
    };

    const getStateClass = () => {
        if (disabled) return 'stripe-inactive';
        if (state === 'selected') return 'stripe-selected';
        return 'stripe-default';
    };

    const renderIcon = () => {
        if (!icon) return null;
        // If icon is a string, treat it as an icon name from the registry (use 20x20 for stripes)
        if (typeof icon === 'string') {
            return <Icon name={icon} size={20} />;
        }
        // Otherwise render it directly (React element)
        return icon;
    };

    return (
        <div 
            className={`stripe ${getStateClass()} ${isHovered ? 'stripe-hovered' : ''}`}
            onClick={handleClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            title={title}
            role="button"
            tabIndex={disabled ? -1 : 0}
            aria-pressed={state === 'selected'}
            aria-disabled={disabled}
            {...props}
        >
            <div className="stripe-hover-bg">
                <div className="stripe-icon">
                    {renderIcon()}
                </div>
            </div>
            {badge && <div className="stripe-badge"></div>}
        </div>
    );
}

export default Stripe;