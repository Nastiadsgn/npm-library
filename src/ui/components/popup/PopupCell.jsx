import Icon from '../icon/Icon';
import './PopupCell.css';
import '../../styles/Typography.css';

function PopupCell(props) {
    let classes = ['popup-cell'];

    if (props.type === 'header') {
        classes.push('popup-cell-header');
    } else if (props.type === 'separator') {
        classes.push('popup-cell-separator');
    } else if (props.type === 'footer') {
        classes.push('popup-cell-footer');
    } else if (props.type === 'search') {
        classes.push('popup-cell-search');
    } else if (props.type === 'multiline') {
        classes.push('popup-cell-multiline');
    } else {
        classes.push('popup-cell-line');
    }

    if (props.selected) {
        classes.push('popup-cell-selected');
    }

    const renderIcon = () => {
        if (!props.icon && !props.iconGap) return null;
        
        // Render icon gap even if no icon (for alignment)
        if (!props.icon && props.iconGap) {
            return <div className="popup-cell-icon-gap" />;
        }
        
        // If icon is a string, treat it as an icon name from the registry
        if (typeof props.icon === 'string') {
            return (
                <div className="popup-cell-icon">
                    <Icon name={props.icon} size={16} />
                </div>
            );
        }
        // Otherwise render it directly (React element)
        return <div className="popup-cell-icon">{props.icon}</div>;
    };

    const renderContent = () => {
        if (props.type === 'header') {
            return (
                <div className="popup-cell-content">
                    <div className="popup-cell-header-text text-ui-default-semibold">
                        {props.children}
                    </div>
                </div>
            );
        }

        if (props.type === 'separator') {
            return (
                <>
                    {props.text && (
                        <div className="popup-cell-separator-text text-ui-small">
                            {props.text}
                        </div>
                    )}
                    <div className="popup-cell-separator-line" />
                </>
            );
        }

        if (props.type === 'search') {
            return (
                <div className="popup-cell-content popup-cell-search-content">
                    <Icon name="general/search" size={16} className="popup-cell-search-icon" />
                    <input 
                        type="text" 
                        className="popup-cell-search-input text-ui-default"
                        placeholder={props.placeholder || "Search"}
                        value={props.value || ""}
                        onChange={props.onChange}
                    />
                </div>
            );
        }

        if (props.type === 'multiline') {
            return (
                <div className="popup-cell-content">
                    {renderIcon()}
                    <div className="popup-cell-text-content">
                        <div className="popup-cell-primary-text text-ui-default">
                            {props.children}
                        </div>
                        {props.hint && (
                            <div className="popup-cell-hint-text text-ui-small">
                                {props.hint}
                            </div>
                        )}
                    </div>
                </div>
            );
        }

        // Default line type
        return (
            <div className="popup-cell-content">
                <div className="popup-cell-left-content">
                    {renderIcon()}
                    <div className="popup-cell-text-wrapper">
                        {props.mnemonicGap && (
                            <div className="popup-cell-mnemonic-gap">
                                {props.mnemonic && (
                                    <span className="popup-cell-mnemonic text-ui-default">
                                        {props.mnemonic}
                                    </span>
                                )}
                            </div>
                        )}
                        <div className="popup-cell-text text-ui-default">
                            {props.children}
                        </div>
                        {props.hint && (
                            <div className="popup-cell-inline-hint text-ui-default">
                                {props.hint}
                            </div>
                        )}
                    </div>
                </div>
                {props.shortcut && (
                    <div className="popup-cell-shortcut text-ui-default">
                        {props.shortcut}
                    </div>
                )}
                {props.submenu && (
                    <div className="popup-cell-submenu-icon">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                )}
            </div>
        );
    };

    return (
        <div className={classes.join(' ')} onClick={props.onClick}>
            {renderContent()}
        </div>
    );
}

export default PopupCell;