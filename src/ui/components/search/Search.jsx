import { useState, useRef } from 'react';
import './Search.css';

/**
 * Search component following IntelliJ UI Guidelines
 * https://plugins.jetbrains.com/docs/intellij/search-field.html
 * 
 * @param {Object} props
 * @param {string} props.value - Controlled input value
 * @param {function} props.onChange - Callback when value changes
 * @param {string} props.placeholder - Placeholder text
 * @param {boolean} props.invalid - Whether the search has an invalid/error state
 * @param {boolean} props.showClose - Whether to show the close/clear button
 * @param {function} props.onClear - Callback when clear button is clicked
 * @param {function} props.onFocus - Callback when input is focused
 * @param {function} props.onBlur - Callback when input loses focus
 * @param {string} props.className - Additional CSS classes
 */
function Search({ 
    value = '',
    onChange,
    placeholder = 'Search...',
    invalid = false,
    showClose = true,
    onClear,
    onFocus,
    onBlur,
    className = '',
    ...rest
}) {
    const [isFocused, setIsFocused] = useState(false);
    const inputRef = useRef(null);

    const handleFocus = (e) => {
        setIsFocused(true);
        onFocus?.(e);
    };

    const handleBlur = (e) => {
        setIsFocused(false);
        onBlur?.(e);
    };

    const handleChange = (e) => {
        onChange?.(e.target.value);
    };

    const handleClear = () => {
        onChange?.('');
        onClear?.();
        inputRef.current?.focus();
    };

    const contentClasses = [
        'search-content',
        isFocused ? 'focused' : '',
        invalid ? 'invalid' : ''
    ].filter(Boolean).join(' ');

    return (
        <div className={`search ${className}`.trim()}>
            <div className={contentClasses}>
                {/* Search Icon */}
                <div className="search-icon">
                    <SearchIcon />
                </div>

                {/* Input */}
                <input
                    ref={inputRef}
                    type="text"
                    className="search-input"
                    value={value}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    placeholder={placeholder}
                    {...rest}
                />

                {/* Actions */}
                <div className="search-actions">
                    {showClose && (
                        <button
                            type="button"
                            className={`search-close ${!value ? 'hidden' : ''}`}
                            onClick={handleClear}
                            tabIndex={-1}
                        >
                            <CloseIcon />
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

/**
 * Search icon (magnifying glass)
 */
function SearchIcon() {
    return (
        <svg 
            width="16" 
            height="16" 
            viewBox="0 0 16 16" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle 
                cx="7" 
                cy="7" 
                r="4.5" 
                stroke="currentColor" 
                strokeWidth="1"
            />
            <path 
                d="M10.5 10.5L13.5 13.5" 
                stroke="currentColor" 
                strokeWidth="1" 
                strokeLinecap="round"
            />
        </svg>
    );
}

/**
 * Close icon (X)
 */
function CloseIcon() {
    return (
        <svg 
            width="12" 
            height="12" 
            viewBox="0 0 12 12" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
        >
            <path 
                d="M3 3L9 9M9 3L3 9" 
                stroke="currentColor" 
                strokeWidth="1" 
                strokeLinecap="round"
            />
        </svg>
    );
}

export default Search;

