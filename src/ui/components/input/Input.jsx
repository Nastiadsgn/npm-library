import './Input.css';

function Input(props) {
    let classes = ['input'];
    
    if (props.disabled) {
        classes.push('input-disabled');
    } else if (props.error || props.invalid) {
        classes.push('input-error');
    }
    
    if (props.size === 'small') {
        classes.push('input-small');
        classes.push('text-ui-small');
    } else {
        classes.push('input-default');
        classes.push('text-ui-default');
    }

    const handleChange = (e) => {
        if (props.onChange) {
            props.onChange(e);
        }
    };

    const inputElement = (
        <input
            className={classes.join(' ')}
            type={props.type || 'text'}
            placeholder={props.placeholder}
            value={props.value}
            disabled={props.disabled}
            onChange={handleChange}
            onFocus={props.onFocus}
            onBlur={props.onBlur}
        />
    );

    // If no label, just return the input
    if (!props.label) {
        return (
            <div className="input-wrapper">
                {inputElement}
            </div>
        );
    }

    // Layout: horizontal (default) or vertical
    const layoutClass = props.layout === 'vertical' ? 'input-container-vertical' : 'input-container-horizontal';
    const labelWidthStyle = props.labelWidth ? { width: props.labelWidth } : {};

    return (
        <div className={`input-container ${layoutClass}`}>
            <label className="input-label" style={labelWidthStyle}>
                {props.label}:
            </label>
            <div className="input-field-wrapper">
                {inputElement}
            </div>
        </div>
    );
}

export default Input;