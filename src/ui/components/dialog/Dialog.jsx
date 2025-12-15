import { useEffect } from 'react';
import './Dialog.css';
import DialogHeader from './DialogHeader';
import DialogFooter from './DialogFooter';

function Dialog(props) {
    const {
        visible = false,
        title,
        children,
        onClose,
        width = 'auto',
        height = 'auto',
        className = '',
        // Footer props
        buttons = [],
        helpIcon = false,
        footerCheckbox = null,
        ...rest
    } = props;

    // Handle ESC key to close
    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === 'Escape' && visible && onClose) {
                onClose();
            }
        };

        if (visible) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [visible, onClose]);

    if (!visible) return null;

    const dialogClasses = ['dialog', className].filter(Boolean).join(' ');
    const overlayClasses = ['dialog-overlay', visible ? 'dialog-overlay-visible' : ''].filter(Boolean).join(' ');

    return (
        <div className={overlayClasses} onClick={onClose}>
            <div 
                className={dialogClasses} 
                style={{ width, height }}
                onClick={(e) => e.stopPropagation()}
                {...rest}
            >
                {title && <DialogHeader title={title} onClose={onClose} />}
                
                <div className="dialog-content">
                    {children}
                </div>
                
                {(buttons.length > 0 || helpIcon || footerCheckbox) && (
                    <DialogFooter 
                        buttons={buttons}
                        helpIcon={helpIcon}
                        footerCheckbox={footerCheckbox}
                    />
                )}
            </div>
        </div>
    );
}

// Expose subcomponents
Dialog.Header = DialogHeader;
Dialog.Footer = DialogFooter;

export default Dialog;

