import { useState, useRef, useEffect } from 'react';
import Icon from '../icon/Icon';
import './Dropdown.css';

function Dropdown({
    options = [],
    value,
    placeholder = 'Select...',
    disabled = false,
    error = false,
    hint,
    label,
    layout = 'vertical', // 'vertical' or 'horizontal'
    labelWidth,
    onChange,
    className = '',
    ...props
}) {
    const [isOpen, setIsOpen] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const dropdownRef = useRef(null);

    const selectedOption = options.find(opt => opt.value === value);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleToggle = () => {
        if (!disabled) {
            setIsOpen(!isOpen);
        }
    };

    const handleSelect = (option) => {
        if (!option.disabled && onChange) {
            onChange(option.value);
        }
        setIsOpen(false);
    };

    const handleKeyDown = (e) => {
        if (disabled) return;
        
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setIsOpen(!isOpen);
        } else if (e.key === 'Escape') {
            setIsOpen(false);
        } else if (e.key === 'ArrowDown' && isOpen) {
            e.preventDefault();
            // Move to next option logic could be added here
        } else if (e.key === 'ArrowUp' && isOpen) {
            e.preventDefault();
            // Move to previous option logic could be added here
        }
    };

    const getDropdownClasses = () => {
        let classes = ['dropdown'];
        
        if (disabled) classes.push('dropdown-disabled');
        if (error) classes.push('dropdown-error');
        if (isFocused && !disabled) classes.push('dropdown-focused');
        if (isOpen) classes.push('dropdown-open');
        
        return classes.join(' ');
    };

    const isHorizontal = layout === 'horizontal';
    const labelStyle = labelWidth ? { width: labelWidth } : {};

    return (
        <div className={`dropdown-container ${isHorizontal ? 'dropdown-container-horizontal' : 'dropdown-container-vertical'} ${className}`} ref={dropdownRef} {...props}>
            {label && <label className="dropdown-label" style={labelStyle}>{label}:</label>}
            <div className="dropdown-field-wrapper">
            <div
                className={getDropdownClasses()}
                onClick={handleToggle}
                onKeyDown={handleKeyDown}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                tabIndex={disabled ? -1 : 0}
                role="listbox"
                aria-expanded={isOpen}
                aria-disabled={disabled}
            >
                <div className="dropdown-content">
                    <span className={`dropdown-value ${!selectedOption ? 'dropdown-placeholder' : ''}`}>
                        {selectedOption ? selectedOption.label : placeholder}
                    </span>
                    <div className="dropdown-chevron">
                        <Icon name="general/chevronDown" size={16} />
                    </div>
                </div>
            </div>
            
            {isOpen && !disabled && (
                <div className="dropdown-menu">
                    {options.map((option) => (
                        <div
                            key={option.value}
                            className={`dropdown-option ${option.value === value ? 'dropdown-option-selected' : ''} ${option.disabled ? 'dropdown-option-disabled' : ''}`}
                            onClick={() => handleSelect(option)}
                        >
                            {option.label}
                        </div>
                    ))}
                </div>
            )}
            
            {hint && <span className="dropdown-hint">{hint}</span>}
            </div>
        </div>
    );
}

export default Dropdown;

