import Button from '../button/Button';
import Checkbox from '../checkbox/Checkbox';
import Icon from '../icon/Icon';
import './DialogFooter.css';
import '../../styles/Typography.css';

function DialogFooter({ buttons = [], helpIcon = false, footerCheckbox = null }) {
    return (
        <div className="dialog-footer">
            <div className="dialog-footer-border" />
            
            <div className="dialog-footer-content">
                <div className="dialog-footer-left">
                    {helpIcon && (
                        <button className="dialog-footer-help" aria-label="Help">
                            <Icon name="general/help" size={16} />
                        </button>
                    )}
                    {footerCheckbox && (
                        <Checkbox
                            checked={footerCheckbox.checked}
                            onChange={footerCheckbox.onChange}
                            label={footerCheckbox.label}
                        />
                    )}
                </div>
                
                <div className="dialog-footer-buttons">
                    {buttons.map((button, index) => (
                        <Button
                            key={index}
                            type={button.type || 'secondary'}
                            onClick={button.onClick}
                            disabled={button.disabled}
                        >
                            {button.label}
                        </Button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default DialogFooter;

