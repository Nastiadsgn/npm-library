import { useState, useRef, useEffect } from 'react';
import Icon from '../icon/Icon';
import './Combobox.css';

function Combobox({
    options = [],
    value = '',
    placeholder = 'Type or select...',
    disabled = false,
    error = false,
    hint,
    label,
    layout = 'vertical', // 'vertical' or 'horizontal'
    labelWidth,
    onChange,
    onInputChange,
    className = '',
    ...props
}) {
    const [isOpen, setIsOpen] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const [inputValue, setInputValue] = useState(value);
    const comboboxRef = useRef(null);
    const inputRef = useRef(null);

    // Filter options based on input value
    const filteredOptions = options.filter(opt => 
        opt.label.toLowerCase().includes(inputValue.toLowerCase())
    );

    useEffect(() => {
        setInputValue(value);
    }, [value]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (comboboxRef.current && !comboboxRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleInputChange = (e) => {
        const newValue = e.target.value;
        setInputValue(newValue);
        setIsOpen(true);
        
        if (onInputChange) {
            onInputChange(newValue);
        }
    };

    const handleSelect = (option) => {
        if (!option.disabled) {
            setInputValue(option.label);
            if (onChange) {
                onChange(option.value);
            }
        }
        setIsOpen(false);
    };

    const handleToggle = () => {
        if (!disabled) {
            setIsOpen(!isOpen);
            if (!isOpen && inputRef.current) {
                inputRef.current.focus();
            }
        }
    };

    const handleKeyDown = (e) => {
        if (disabled) return;
        
        if (e.key === 'Escape') {
            setIsOpen(false);
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            setIsOpen(true);
        } else if (e.key === 'Enter' && isOpen && filteredOptions.length > 0) {
            e.preventDefault();
            handleSelect(filteredOptions[0]);
        }
    };

    const getComboboxClasses = () => {
        let classes = ['combobox'];
        
        if (disabled) classes.push('combobox-disabled');
        if (error) classes.push('combobox-error');
        if (isFocused && !disabled) classes.push('combobox-focused');
        if (isOpen) classes.push('combobox-open');
        
        return classes.join(' ');
    };

    const isHorizontal = layout === 'horizontal';
    const labelStyle = labelWidth ? { width: labelWidth } : {};

    return (
        <div className={`combobox-container ${isHorizontal ? 'combobox-container-horizontal' : 'combobox-container-vertical'} ${className}`} ref={comboboxRef} {...props}>
            {label && <label className="combobox-label" style={labelStyle}>{label}:</label>}
            <div className="combobox-field-wrapper">
            <div className={getComboboxClasses()}>
                <input
                    ref={inputRef}
                    type="text"
                    className="combobox-input"
                    value={inputValue}
                    placeholder={placeholder}
                    disabled={disabled}
                    onChange={handleInputChange}
                    onFocus={() => {
                        setIsFocused(true);
                        setIsOpen(true);
                    }}
                    onBlur={() => setIsFocused(false)}
                    onKeyDown={handleKeyDown}
                />
                <div className="combobox-chevron" onClick={handleToggle}>
                    <div className="combobox-separator" />
                    <Icon name="general/chevronDown" size={16} />
                </div>
            </div>
            
            {isOpen && !disabled && filteredOptions.length > 0 && (
                <div className="combobox-menu">
                    {filteredOptions.map((option) => (
                        <div
                            key={option.value}
                            className={`combobox-option ${option.value === value ? 'combobox-option-selected' : ''} ${option.disabled ? 'combobox-option-disabled' : ''}`}
                            onClick={() => handleSelect(option)}
                        >
                            {option.label}
                        </div>
                    ))}
                </div>
            )}
            
            {hint && <span className="combobox-hint">{hint}</span>}
            </div>
        </div>
    );
}

export default Combobox;

