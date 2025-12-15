import { useState } from 'react';
import TreeNode from './TreeNode';
import './Tree.css';

function Tree({ data = [], onNodeSelect, onNodeToggle }) {
    const [selectedNodeId, setSelectedNodeId] = useState(null);

    const renderTreeNodes = (nodes, level = 1) => {
        return nodes.map((node, index) => {
            const nodeId = node.id || `${level}-${index}`;
            return (
                <TreeNode
                    key={nodeId}
                    label={node.label}
                    icon={node.icon}
                    level={level}
                    hasChildren={node.children && node.children.length > 0}
                    isExpanded={node.isExpanded}
                    isSelected={selectedNodeId === nodeId}
                    onToggle={(expanded) => {
                        if (onNodeToggle) {
                            onNodeToggle(nodeId, expanded);
                        }
                    }}
                    onSelect={(selected) => {
                        if (selected) {
                            setSelectedNodeId(nodeId);
                        } else {
                            setSelectedNodeId(null);
                        }
                        if (onNodeSelect) {
                            onNodeSelect(nodeId, selected);
                        }
                    }}
                >
                    {node.children && node.children.length > 0 && 
                        renderTreeNodes(node.children, level + 1)
                    }
                </TreeNode>
            );
        });
    };

    return (
        <div className="tree">
            {renderTreeNodes(data)}
        </div>
    );
}

export default Tree;