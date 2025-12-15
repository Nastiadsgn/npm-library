import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../icon/Icon';
import './Table.css';

function Table({
    columns,
    data,
    showToolbar = false,
    toolbarActions = [],
    onAdd,
    onRemove,
    disableRemove = false,
    editable = false,
    onCellChange,
    striped = false,
    selectedRowIndex = null,
    onRowClick,
    className,
    ...props
}) {
    const containerClasses = [
        'table-container',
        className
    ].filter(Boolean).join(' ');

    const tableClasses = [
        'table',
        striped ? 'table-striped' : ''
    ].filter(Boolean).join(' ');

    // Build default toolbar actions with plus/minus icons
    const defaultToolbarActions = [];
    if (onAdd) {
        defaultToolbarActions.push({
            icon: 'general/add',
            title: 'Add',
            onClick: onAdd,
            disabled: false,
        });
    }
    if (onRemove) {
        defaultToolbarActions.push({
            icon: 'general/remove',
            title: 'Remove',
            onClick: onRemove,
            disabled: disableRemove,
        });
    }

    // Combine default actions with custom actions
    const allToolbarActions = [...defaultToolbarActions, ...toolbarActions];

    return (
        <div className={containerClasses} {...props}>
            {showToolbar && allToolbarActions.length > 0 && (
                <div className="table-toolbar">
                    {allToolbarActions.map((action, index) => (
                        <button
                            key={index}
                            className={`table-toolbar-button ${action.disabled ? 'disabled' : ''}`}
                            onClick={action.disabled ? undefined : action.onClick}
                            title={action.title}
                            disabled={action.disabled}
                        >
                            {action.icon ? (
                                <Icon name={action.icon} size={16} />
                            ) : (
                                action.label
                            )}
                        </button>
                    ))}
                </div>
            )}
            <div className={tableClasses}>
                <div className="table-header">
                    <div className="table-row">
                        {columns.map((column, index) => (
                            <div
                                key={column.key || index}
                                className="table-header-cell"
                                style={column.width ? { width: column.width } : {}}
                            >
                                {column.title}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="table-body">
                    {data.length > 0 ? (
                        data.map((row, rowIndex) => (
                            <div
                                key={row.id || rowIndex}
                                className={`table-row ${selectedRowIndex === rowIndex ? 'selected' : ''}`}
                                onClick={() => onRowClick && onRowClick(row, rowIndex)}
                            >
                                {columns.map((column, colIndex) => (
                                    <div
                                        key={column.key || colIndex}
                                        className="table-cell"
                                    >
                                        {editable && !column.render ? (
                                            <input
                                                type="text"
                                                className="table-cell-input"
                                                value={row[column.key] || ''}
                                                onChange={(e) => onCellChange && onCellChange(rowIndex, column.key, e.target.value)}
                                                onClick={(e) => e.stopPropagation()}
                                            />
                                        ) : column.icon && row[column.key] ? (
                                            <div className="table-cell-content">
                                                <Icon
                                                    name={typeof column.icon === 'function' ? column.icon(row) : column.icon}
                                                    size={16}
                                                    className="table-cell-icon"
                                                />
                                                <span>{row[column.key]}</span>
                                            </div>
                                        ) : column.render ? (
                                            column.render(row[column.key], row, rowIndex)
                                        ) : (
                                            row[column.key]
                                        )}
                                    </div>
                                ))}
                            </div>
                        ))
                    ) : (
                        <div className="table-empty">
                            No data
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

Table.propTypes = {
    columns: PropTypes.arrayOf(
        PropTypes.shape({
            key: PropTypes.string.isRequired,
            title: PropTypes.node.isRequired,
            width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
            icon: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
            render: PropTypes.func,
        })
    ).isRequired,
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    showToolbar: PropTypes.bool,
    toolbarActions: PropTypes.arrayOf(
        PropTypes.shape({
            icon: PropTypes.string,
            label: PropTypes.node,
            title: PropTypes.string,
            onClick: PropTypes.func,
        })
    ),
    onAdd: PropTypes.func,
    onRemove: PropTypes.func,
    disableRemove: PropTypes.bool,
    editable: PropTypes.bool,
    onCellChange: PropTypes.func,
    striped: PropTypes.bool,
    selectedRowIndex: PropTypes.number,
    onRowClick: PropTypes.func,
    className: PropTypes.string,
};

export default Table;

