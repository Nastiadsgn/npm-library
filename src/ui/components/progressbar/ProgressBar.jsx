import React from 'react';
import './ProgressBar.css';
import Icon from '../icon/Icon';

/**
 * Progress Bar component based on IntelliJ UI Guidelines
 * 
 * Props:
 * - value: Progress value from 0 to 100
 * - label: Label text to display
 * - labelPosition: 'left' | 'top' - Position of the label (default: 'left')
 * - hint: Hint text to display below (only works with labelPosition='top')
 * - showStopButton: Show stop/cancel button
 * - onStop: Callback when stop button is clicked
 * - indeterminate: If true, shows indeterminate animation
 * - className: Additional CSS class
 */
function ProgressBar({
    value = 0,
    label,
    labelPosition = 'left',
    hint,
    showStopButton = false,
    onStop,
    indeterminate = false,
    className = '',
    ...props
}) {
    const clampedValue = Math.min(100, Math.max(0, value));
    const isVertical = labelPosition === 'top';

    const containerClasses = [
        'progress-bar-container',
        isVertical ? 'progress-bar-vertical' : 'progress-bar-horizontal',
        className
    ].filter(Boolean).join(' ');

    const handleStopClick = (e) => {
        e.stopPropagation();
        if (onStop) {
            onStop();
        }
    };

    return (
        <div className={containerClasses} {...props}>
            {label && (
                <span className="progress-bar-label">{label}</span>
            )}
            
            <div className="progress-bar-content">
                <div className="progress-bar-track">
                    <div 
                        className={`progress-bar-fill ${indeterminate ? 'progress-bar-indeterminate' : ''}`}
                        style={indeterminate ? {} : { width: `${clampedValue}%` }}
                    />
                </div>
                
                {showStopButton && (
                    <button 
                        className="progress-bar-stop"
                        onClick={handleStopClick}
                        type="button"
                        aria-label="Stop"
                    >
                        <Icon name="progress/stop" size={16} />
                    </button>
                )}
            </div>
            
            {hint && isVertical && (
                <span className="progress-bar-hint">{hint}</span>
            )}
        </div>
    );
}

export default ProgressBar;

