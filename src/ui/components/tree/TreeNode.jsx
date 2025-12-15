import { useState } from 'react';
import Icon from '../icon/Icon';
import './TreeNode.css';

function TreeNode({ 
    label, 
    icon, 
    level = 1, 
    hasChildren = false, 
    isExpanded = false, 
    isSelected = false, 
    onToggle, 
    onSelect, 
    children 
}) {
    const [expanded, setExpanded] = useState(isExpanded);

    const handleToggle = () => {
        const newExpanded = !expanded;
        setExpanded(newExpanded);
        if (onToggle) {
            onToggle(newExpanded);
        }
    };

    const handleSelect = () => {
        if (onSelect) {
            onSelect(!isSelected);
        }
    };

    const renderIcon = () => {
        if (!icon) return null;
        // If icon is a string, treat it as an icon name from the registry
        if (typeof icon === 'string') {
            return <Icon name={icon} size={16} className="tree-node-icon" />;
        }
        // Otherwise render it directly (React element)
        return <span className="tree-node-icon">{icon}</span>;
    };

    const indentWidth = level === 1 ? 16 : level === 2 ? 32 : 50 + (level - 3) * 18;

    return (
        <div className="tree-node-container">
            <div 
                className={`tree-node ${isSelected ? 'tree-node-selected' : ''}`}
                style={{ paddingLeft: `${indentWidth}px` }}
                onClick={handleSelect}
            >
                {hasChildren && (
                    <button 
                        className={`tree-node-toggle ${expanded ? 'expanded' : ''}`}
                        onClick={(e) => {
                            e.stopPropagation();
                            handleToggle();
                        }}
                    >
                        <Icon 
                            name={expanded ? 'general/chevronDown' : 'general/chevronRight'} 
                            size={16} 
                        />
                    </button>
                )}
                {!hasChildren && <div className="tree-node-spacer" />}
                
                {renderIcon()}
                <span className="tree-node-label">{label}</span>
            </div>
            
            {hasChildren && expanded && children && (
                <div className="tree-node-children">
                    {children}
                </div>
            )}
        </div>
    );
}

export default TreeNode;