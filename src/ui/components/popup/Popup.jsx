import './Popup.css';
import PopupCell from './PopupCell';
// TODO: Add support for custom cells
// TODO: Add opening and closing behaviour: closes on click outside, closes on escape, etc.
// TODO: Add behaviour when scrolling the content

function Popup(props) {
    let classes = ['popup'];

    if (props.visible) {
        classes.push('popup-visible');
    }

    if (props.className) {
        classes.push(props.className);
    }

    return (
        <div className={classes.join(' ')} style={props.style}>
            <div className="popup-content">
                {props.header && (
                    <PopupCell type="header">{props.header}</PopupCell>
                )}
                
                <div className="popup-options">
                    {props.children}
                </div>
                
                {props.footer && (
                    <PopupCell type="footer">{props.footer}</PopupCell>
                )}
            </div>
        </div>
    );
}

Popup.Cell = PopupCell;

export default Popup;
