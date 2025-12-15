import './Button.css';
import '../../styles/Typography.css';

function Button(props) {
    let classes = ['button'];

    if (props.type === 'primary') {
        classes.push('button-primary');
    } else if (props.type === 'secondary') {
        classes.push('button-secondary');
    }

    if (props.size === 'slim') {
        classes.push('button-slim');
        classes.push('text-ui-small');
    } else {
        classes.push('button-default');
        classes.push('text-ui-default');
    }

    if (props.disabled) {
        classes.push('button-disabled');
    }

    return (
        <button className={classes.join(' ')} disabled={props.disabled}>
            {props.children}
        </button>
    );
}

export default Button;
