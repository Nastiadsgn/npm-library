import '../../styles/Typography.css';

function Typography() {
    const textStyles = [
        // UI Text styles
        {
            name: 'UI Default',
            className: 'text-ui-default',
            font: 'Inter',
            size: '13px',
            weight: 500,
            lineHeight: '16px',
            example: 'Default UI text for buttons, inputs, and general interface elements'
        },
        {
            name: 'UI Small',
            className: 'text-ui-small',
            font: 'Inter',
            size: '12px',
            weight: 500,
            lineHeight: '16px',
            example: 'Small UI text for compact components and secondary information'
        },
        // Editor/Monospace styles
        {
            name: 'Editor Default',
            className: 'text-editor-default',
            font: 'JetBrains Mono',
            size: '13px',
            weight: 500,
            lineHeight: '22px',
            example: 'Default style for code'
        },
        {
            name: 'Editor Small',
            className: 'text-editor-small',
            font: 'JetBrains Mono',
            size: '12px',
            weight: 500,
            lineHeight: '22px',
            example: 'Small style for code'
        }
    ];

    return (
        <div className="component-showcase">
            <h1>Typography</h1>
            
            <div className="component-section">
                <h2>Text Styles</h2>
                
                <div className="typography-grid">
                    {textStyles.map((style, index) => (
                        <div key={index} className="typography-item">
                            <div className="typography-example">
                                <div className={style.className}>
                                    {style.example}
                                </div>
                            </div>
                            <div className="typography-details">
                                <div className="typography-name">{style.name}</div>
                                <div className="typography-specs">
                                    <span className="spec-item">Font: {style.font}</span>
                                    <span className="spec-item">Size: {style.size}</span>
                                    <span className="spec-item">Weight: {style.weight}</span>
                                    <span className="spec-item">Line Height: {style.lineHeight}</span>
                                </div>
                                <div className="typography-class">
                                    .{style.className}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Typography;
