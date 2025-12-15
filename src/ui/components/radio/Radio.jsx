import { useState } from 'react';
import './Radio.css';

function Radio({
    checked = false,
    disabled = false,
    label,
    hint,
    name,
    value,
    onChange,
    className = '',
    ...props
}) {
    const [isHovered, setIsHovered] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    const handleChange = (e) => {
        if (!disabled && onChange) {
            onChange(e.target.value);
        }
    };

    const getRadioClasses = () => {
        let classes = ['radio-circle'];
        
        if (checked) {
            classes.push('radio-checked');
        }
        if (disabled) {
            classes.push('radio-disabled');
        }
        if (isFocused && !disabled) {
            classes.push('radio-focused');
        }
        if (isHovered && !disabled) {
            classes.push('radio-hovered');
        }
        
        return classes.join(' ');
    };

    return (
        <label 
            className={`radio-container ${disabled ? 'radio-container-disabled' : ''} ${className}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            {...props}
        >
            <div className="radio-wrapper">
                <input
                    type="radio"
                    checked={checked}
                    disabled={disabled}
                    name={name}
                    value={value}
                    onChange={handleChange}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    className="radio-input"
                />
                <div className={getRadioClasses()}>
                    {checked && <div className="radio-dot" />}
                </div>
            </div>
            {(label || hint) && (
                <div className="radio-content">
                    {label && <span className="radio-label">{label}</span>}
                    {hint && <span className="radio-hint">{hint}</span>}
                </div>
            )}
        </label>
    );
}

function RadioGroup({
    options = [],
    value,
    name,
    disabled = false,
    onChange,
    className = '',
    ...props
}) {
    return (
        <div className={`radio-group ${className}`} {...props}>
            {options.map((option) => (
                <Radio
                    key={option.value}
                    checked={value === option.value}
                    disabled={disabled || option.disabled}
                    label={option.label}
                    hint={option.hint}
                    name={name}
                    value={option.value}
                    onChange={onChange}
                />
            ))}
        </div>
    );
}

export { Radio, RadioGroup };
export default Radio;



