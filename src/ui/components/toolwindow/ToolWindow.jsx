import ToolWindowHeader from './ToolWindowHeader';
import './ToolWindow.css';

function ToolWindow({ 
    title = "Tool Window",
    width = 300,
    height = 400,
    headerType = "label",
    tabs = [],
    activeTab = 0,
    onTabChange,
    showSeparator = false,
    actions = ['more', 'minimize'],
    onActionClick,
    children,
    className = ""
}) {
    return (
        <div 
            className={`tool-window ${className}`}
            style={{ width: `${width}px`, height: `${height}px` }}
        >
            <ToolWindowHeader
                title={title}
                type={headerType}
                tabs={tabs}
                activeTab={activeTab}
                onTabChange={onTabChange}
                showSeparator={showSeparator}
                actions={actions}
                onActionClick={onActionClick}
            />
            <div className="tool-window-content">
                {children}
            </div>
        </div>
    );
}

export default ToolWindow;