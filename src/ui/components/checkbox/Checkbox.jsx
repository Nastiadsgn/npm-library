import { useState } from 'react';
import './Checkbox.css';

function Checkbox({
    checked = false,
    indeterminate = false,
    disabled = false,
    label,
    hint,
    onChange,
    className = '',
    ...props
}) {
    const [isHovered, setIsHovered] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    const handleChange = (e) => {
        if (!disabled && onChange) {
            onChange(e.target.checked);
        }
    };

    const getCheckboxClasses = () => {
        let classes = ['checkbox-box'];
        
        if (checked || indeterminate) {
            classes.push('checkbox-checked');
        }
        if (indeterminate) {
            classes.push('checkbox-indeterminate');
        }
        if (disabled) {
            classes.push('checkbox-disabled');
        }
        if (isFocused && !disabled) {
            classes.push('checkbox-focused');
        }
        if (isHovered && !disabled) {
            classes.push('checkbox-hovered');
        }
        
        return classes.join(' ');
    };

    return (
        <label 
            className={`checkbox-container ${disabled ? 'checkbox-container-disabled' : ''} ${className}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            {...props}
        >
            <div className="checkbox-wrapper">
                <input
                    type="checkbox"
                    checked={checked}
                    disabled={disabled}
                    onChange={handleChange}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    className="checkbox-input"
                    ref={(el) => {
                        if (el) {
                            el.indeterminate = indeterminate;
                        }
                    }}
                />
                <div className={getCheckboxClasses()}>
                    {checked && !indeterminate && (
                        <svg className="checkbox-checkmark" viewBox="0 0 16 16" fill="none">
                            <path 
                                d="M3.5 8L6.5 11L12.5 5" 
                                stroke="currentColor" 
                                strokeWidth="2" 
                                strokeLinecap="round" 
                                strokeLinejoin="round"
                            />
                        </svg>
                    )}
                    {indeterminate && (
                        <div className="checkbox-indeterminate-mark" />
                    )}
                </div>
            </div>
            {(label || hint) && (
                <div className="checkbox-content">
                    {label && <span className="checkbox-label">{label}</span>}
                    {hint && <span className="checkbox-hint">{hint}</span>}
                </div>
            )}
        </label>
    );
}

export default Checkbox;



