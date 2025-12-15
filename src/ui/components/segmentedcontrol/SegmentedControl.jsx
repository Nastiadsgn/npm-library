import './SegmentedControl.css';

/**
 * SegmentedControl component following IntelliJ UI Guidelines
 * A button group for toggling between mutually exclusive options
 * 
 * @param {Object} props
 * @param {Array<{value: string, label: string}>} props.options - Array of options with value and label
 * @param {string} props.value - Currently selected value
 * @param {function} props.onChange - Callback when selection changes (receives new value)
 * @param {boolean} props.disabled - Whether the control is disabled
 * @param {boolean} props.focused - Whether the control appears focused
 * @param {string} props.className - Additional CSS classes
 */
function SegmentedControl({ 
    options = [], 
    value, 
    onChange, 
    disabled = false,
    focused = false,
    className = '' 
}) {
    const handleClick = (optionValue) => {
        if (disabled) return;
        if (optionValue !== value) {
            onChange?.(optionValue);
        }
    };

    const classes = [
        'segmented-control',
        disabled ? 'disabled' : '',
        focused ? 'focused' : '',
        className
    ].filter(Boolean).join(' ');

    return (
        <div className={classes}>
            <div className="segmented-control-background" />
            {options.map((option) => (
                <button
                    key={option.value}
                    type="button"
                    className={`segmented-button ${value === option.value ? 'selected' : ''}`}
                    onClick={() => handleClick(option.value)}
                    disabled={disabled}
                >
                    <span className="segmented-button-content">
                        {option.label}
                    </span>
                </button>
            ))}
        </div>
    );
}

export default SegmentedControl;

