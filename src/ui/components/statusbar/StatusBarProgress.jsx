import './StatusBarProgress.css';

/**
 * StatusBarProgress component - displays a progress indicator in the status bar
 * 
 * @param {Object} props - Component props
 * @param {string} [props.label='Indexing...'] - Text label to show
 * @param {number} [props.value] - Progress value (0-100). If not provided, shows indeterminate animation
 * @param {boolean} [props.showStop=true] - Whether to show the stop button
 * @param {Function} [props.onStop] - Callback when stop button is clicked
 * @param {string} [props.className] - Additional CSS classes
 */
function StatusBarProgress({
    label = 'Indexing...',
    value,
    showStop = true,
    onStop,
    className,
    ...props
}) {
    const isIndeterminate = value === undefined || value === null;
    const progressWidth = isIndeterminate ? undefined : `${Math.min(100, Math.max(0, value))}%`;

    const handleStop = (e) => {
        e.stopPropagation();
        if (onStop) {
            onStop();
        }
    };

    return (
        <div className={`status-bar-progress ${className || ''}`} {...props}>
            {label && (
                <span className="status-bar-progress-label">{label}</span>
            )}
            <div className="status-bar-progress-track">
                <div 
                    className={`status-bar-progress-fill ${isIndeterminate ? 'indeterminate' : ''}`}
                    style={progressWidth ? { width: progressWidth } : undefined}
                />
            </div>
            {showStop && (
                <button
                    className="status-bar-progress-stop"
                    onClick={handleStop}
                    aria-label="Stop"
                    type="button"
                >
                    <div className="status-bar-progress-stop-icon" />
                </button>
            )}
        </div>
    );
}

export default StatusBarProgress;
