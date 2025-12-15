import Icon from '../icon/Icon';
import './DialogHeader.css';
import '../../styles/Typography.css';

function DialogHeader({ title, onClose }) {
    return (
        <div className="dialog-header">
            <div className="dialog-header-content">
                <div className="dialog-header-controls">
                    <button 
                        className="dialog-header-button dialog-header-close"
                        onClick={onClose}
                        aria-label="Close"
                    />
                    <button 
                        className="dialog-header-button dialog-header-minimize"
                        aria-label="Minimize"
                    />
                    <button 
                        className="dialog-header-button dialog-header-expand"
                        aria-label="Expand"
                    />
                </div>
                <h2 className="dialog-header-title text-ui-default">
                    {title}
                </h2>
            </div>
            <div className="dialog-header-border" />
        </div>
    );
}

export default DialogHeader;

