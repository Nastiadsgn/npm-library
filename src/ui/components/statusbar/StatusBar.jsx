import StatusBarBreadcrumb from './StatusBarBreadcrumb';
import StatusBarWidget from './StatusBarWidget';
import ProgressBar from '../progressbar/ProgressBar';
import './StatusBar.css';

/**
 * Chevron separator for breadcrumbs
 */
function ChevronRight() {
    return (
        <div className="status-bar-chevron">
            <svg viewBox="0 0 7 7" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5 0.5L5 3.5L1.5 6.5" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </div>
    );
}

/**
 * StatusBar component - displays the IDE status bar with breadcrumbs, progress, and widgets
 * 
 * @param {Object} props - Component props
 * @param {boolean} [props.progress=false] - Whether to show the progress bar
 * @param {string} [props.progressLabel='Indexing...'] - Progress bar label
 * @param {number} [props.progressValue] - Progress value (0-100), undefined for indeterminate
 * @param {Function} [props.onProgressStop] - Callback when progress stop button is clicked
 * @param {Array} [props.breadcrumbs] - Array of breadcrumb items: { label, icon?, module?, onClick? }
 * @param {Array} [props.widgets] - Array of widget items: { type, text?, iconName?, onClick? }
 * @param {string} [props.className] - Additional CSS classes
 */
function StatusBar({
    progress = false,
    progressLabel = 'Indexing...',
    progressValue,
    onProgressStop,
    breadcrumbs = [],
    widgets = [],
    className,
    ...props
}) {
    // Default breadcrumbs if none provided
    const defaultBreadcrumbs = [
        { label: 'intellij', module: true },
        { label: 'accurate-math-core', module: true },
        { label: 'src' },
        { label: 'main' },
        { label: 'java' },
        { label: 'org' },
        { label: 'math' },
        { label: 'core' },
        { label: 'AccurateMath', icon: true, iconName: 'nodes/class' }
    ];

    // Default widgets if none provided
    const defaultWidgets = [
        { type: 'text', text: '39:34' },
        { type: 'text', text: 'LF' },
        { type: 'text', text: 'UTF-8' },
        { type: 'icon', iconName: 'general/unlocked' }
    ];

    const breadcrumbItems = breadcrumbs.length > 0 ? breadcrumbs : defaultBreadcrumbs;
    const widgetItems = widgets.length > 0 ? widgets : defaultWidgets;

    return (
        <div className={`status-bar ${className || ''}`} {...props}>
            {/* Top border */}
            <div className="status-bar-border" />
            
            {/* Breadcrumbs section */}
            <div className="status-bar-breadcrumbs">
                {breadcrumbItems.map((item, index) => (
                    <span key={index} style={{ display: 'contents' }}>
                        <StatusBarBreadcrumb
                            label={item.label}
                            icon={item.icon || false}
                            iconName={item.iconName}
                            module={item.module || false}
                            state={item.state || 'default'}
                            onClick={item.onClick}
                        />
                        {index < breadcrumbItems.length - 1 && <ChevronRight />}
                    </span>
                ))}
            </div>

            {/* Right section: Progress + Widgets */}
            <div className="status-bar-right">
                {/* Progress bar (optional) */}
                {progress && (
                    <div className="status-bar-progress-container">
                        <ProgressBar
                            label={progressLabel}
                            value={progressValue}
                            showStopButton={true}
                            onStop={onProgressStop}
                            indeterminate={progressValue === undefined || progressValue === null}
                        />
                    </div>
                )}

                {/* Widgets section */}
                <div className="status-bar-widgets">
                    {widgetItems.map((item, index) => (
                        <StatusBarWidget
                            key={index}
                            type={item.type || 'text'}
                            text={item.text}
                            iconName={item.iconName}
                            state={item.state || 'default'}
                            onClick={item.onClick}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default StatusBar;
