import TabBar from '../tabs/TabBar';
import Icon from '../icon/Icon';
import './ToolWindowHeader.css';

function ToolWindowHeader({ 
    title = "Header", 
    type = "label", 
    tabs = [], 
    activeTab = 0,
    onTabChange,
    showSeparator = false,
    actions = ['more', 'minimize'],
    onActionClick
}) {
    const getActionIcon = (action) => {
        switch (action) {
            case 'more':
                return 'general/moreVertical';
            case 'minimize':
                return 'general/remove';
            case 'close':
                return 'general/closeSmall';
            case 'add':
                return 'general/add';
            default:
                return null;
        }
    };

    const renderActions = () => {
        if (!actions || actions.length === 0) return null;

        return (
            <div className="tool-window-header-actions">
                {actions.map((action, index) => {
                    const iconName = getActionIcon(action);
                    return (
                        <button
                            key={index}
                            className="tool-window-action-button"
                            onClick={() => onActionClick && onActionClick(action)}
                        >
                            {iconName && <Icon name={iconName} size={16} />}
                        </button>
                    );
                })}
            </div>
        );
    };

    const renderTabs = () => {
        if (!tabs || tabs.length === 0) return null;

        return (
            <div className="tool-window-tabs">
                <TabBar 
                    tabs={tabs}
                    direction="horizontal"
                    size="small"
                    activeTab={activeTab}
                    onTabClick={onTabChange}
                    onTabClose={(index) => {
                        // Handle tab close if needed
                        console.log('Tab close:', index);
                    }}
                />
            </div>
        );
    };

    return (
        <div className="tool-window-header">
            <div className="tool-window-header-content">
                {type === 'tabs' ? (
                    <>
                        <div className="tool-window-header-left">
                            <h3 className="tool-window-header-title">{title}</h3>
                            {renderTabs()}
                        </div>
                        {renderActions()}
                    </>
                ) : (
                    <>
                        <h3 className="tool-window-header-title">{title}</h3>
                        {renderActions()}
                    </>
                )}
            </div>
            {(showSeparator || type === 'separator') && (
                <div className="tool-window-header-separator"></div>
            )}
        </div>
    );
}

export default ToolWindowHeader;