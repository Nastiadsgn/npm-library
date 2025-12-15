import './StripeContainer.css';

function StripeContainer({ 
    children, 
    className = '',
    ...props 
}) {
    return (
        <div 
            className={`stripe-container ${className}`}
            {...props}
        >
            <div className="stripe-container-content">
                {children}
            </div>
        </div>
    );
}

function StripeSeparator() {
    return (
        <div className="stripe-separator">
            <div className="stripe-separator-line"></div>
        </div>
    );
}

StripeContainer.Separator = StripeSeparator;

export default StripeContainer;