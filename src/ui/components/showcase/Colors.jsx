import '../../styles/Colors.css';

function Colors() {
    const editorColors = [
        { name: 'Default text', variable: '--editor-default-text' },
        { name: 'Error', variable: '--editor-error' },
        { name: 'Warning', variable: '--editor-warning' },
        { name: 'Link', variable: '--editor-link' },
        { name: 'TODO', variable: '--editor-todo' },
        { name: 'Keyword', variable: '--editor-keyword' },
        { name: 'Method declaration', variable: '--editor-method' },
        { name: 'Constant / Field', variable: '--editor-constant' },
        { name: 'String', variable: '--editor-string' },
        { name: 'Number', variable: '--editor-number' },
        { name: 'Comment', variable: '--editor-comment' },
        { name: 'Doc comment', variable: '--editor-doc-comment' },
        { name: 'Metadata / Annotation', variable: '--editor-annotation' },
        { name: 'Type parameter', variable: '--editor-type-parameter' },
        { name: 'Implicit anonymous class parameter', variable: '--editor-implicit-param' },
        { name: 'HTML tag', variable: '--editor-html-tag' }
    ];

    const colorScales = [
        {
            name: 'Gray',
            colors: [
                { name: 'Gray White', value: '#FFFFFF', variable: '--gray-white' },
                { name: 'Gray 10', value: '#F7F6F8', variable: '--gray-10' },
                { name: 'Gray 20', value: '#EBEBED', variable: '--gray-20' },
                { name: 'Gray 30', value: '#E1E1E4', variable: '--gray-30' },
                { name: 'Gray 40', value: '#CFD0D4', variable: '--gray-40' },
                { name: 'Gray 50', value: '#B6B8BD', variable: '--gray-50' },
                { name: 'Gray 60', value: '#9C9FA6', variable: '--gray-60' },
                { name: 'Gray 70', value: '#81858D', variable: '--gray-70' },
                { name: 'Gray 80', value: '#6F737C', variable: '--gray-80' },
                { name: 'Gray 90', value: '#5B5F68', variable: '--gray-90' },
                { name: 'Gray 100', value: '#4C5158', variable: '--gray-100' },
                { name: 'Gray 110', value: '#3B3D42', variable: '--gray-110' },
                { name: 'Gray 120', value: '#313337', variable: '--gray-120' },
                { name: 'Gray 130', value: '#252629', variable: '--gray-130' },
                { name: 'Gray 140', value: '#191A1C', variable: '--gray-140' },
                { name: 'Gray Black', value: '#000000', variable: '--gray-black' }
            ]
        },
        {
            name: 'Blue',
            colors: [
                { name: 'Blue 10', value: '#F5F6FE', variable: '--blue-10' },
                { name: 'Blue 20', value: '#E5EBFC', variable: '--blue-20' },
                { name: 'Blue 30', value: '#D5E0FA', variable: '--blue-30' },
                { name: 'Blue 40', value: '#BDD0F8', variable: '--blue-40' },
                { name: 'Blue 50', value: '#9AB9F5', variable: '--blue-50' },
                { name: 'Blue 60', value: '#739EF2', variable: '--blue-60' },
                { name: 'Blue 70', value: '#4981F1', variable: '--blue-70' },
                { name: 'Blue 80', value: '#2D6CE9', variable: '--blue-80' },
                { name: 'Blue 90', value: '#2E5BB5', variable: '--blue-90' },
                { name: 'Blue 100', value: '#2C4E91', variable: '--blue-100' },
                { name: 'Blue 110', value: '#263C69', variable: '--blue-110' },
                { name: 'Blue 120', value: '#213254', variable: '--blue-120' },
                { name: 'Blue 130', value: '#1A263C', variable: '--blue-130' },
                { name: 'Blue 140', value: '#131A28', variable: '--blue-140' }
            ]
        },
        {
            name: 'Green',
            colors: [
                { name: 'Green 10', value: '#F3F8F1', variable: '--green-10' },
                { name: 'Green 20', value: '#E2EFE3', variable: '--green-20' },
                { name: 'Green 30', value: '#D1E6D4', variable: '--green-30' },
                { name: 'Green 40', value: '#B8D8BE', variable: '--green-40' },
                { name: 'Green 50', value: '#92C49F', variable: '--green-50' },
                { name: 'Green 60', value: '#69AD7F', variable: '--green-60' },
                { name: 'Green 70', value: '#38965F', variable: '--green-70' },
                { name: 'Green 80', value: '#25824F', variable: '--green-80' },
                { name: 'Green 90', value: '#2A6B44', variable: '--green-90' },
                { name: 'Green 100', value: '#29593B', variable: '--green-100' },
                { name: 'Green 110', value: '#24432E', variable: '--green-110' },
                { name: 'Green 120', value: '#203828', variable: '--green-120' },
                { name: 'Green 130', value: '#19291E', variable: '--green-130' },
                { name: 'Green 140', value: '#121D15', variable: '--green-140' }
            ]
        },
        {
            name: 'Red',
            colors: [
                { name: 'Red 10', value: '#FFF3F3', variable: '--red-10' },
                { name: 'Red 20', value: '#FFE5E5', variable: '--red-20' },
                { name: 'Red 30', value: '#FFD7D7', variable: '--red-30' },
                { name: 'Red 40', value: '#FFC1C2', variable: '--red-40' },
                { name: 'Red 50', value: '#FD9EA2', variable: '--red-50' },
                { name: 'Red 60', value: '#F17B82', variable: '--red-60' },
                { name: 'Red 70', value: '#E05663', variable: '--red-70' },
                { name: 'Red 80', value: '#D03B4E', variable: '--red-80' },
                { name: 'Red 90', value: '#A93542', variable: '--red-90' },
                { name: 'Red 100', value: '#8B313A', variable: '--red-100' },
                { name: 'Red 110', value: '#67292E', variable: '--red-110' },
                { name: 'Red 120', value: '#542427', variable: '--red-120' },
                { name: 'Red 130', value: '#3D1C1D', variable: '--red-130' },
                { name: 'Red 140', value: '#2A1314', variable: '--red-140' }
            ]
        },
        {
            name: 'Yellow',
            colors: [
                { name: 'Yellow 10', value: '#FFF6ED', variable: '--yellow-10' },
                { name: 'Yellow 20', value: '#FAE9D7', variable: '--yellow-20' },
                { name: 'Yellow 30', value: '#F4DDC2', variable: '--yellow-30' },
                { name: 'Yellow 40', value: '#EBCBA4', variable: '--yellow-40' },
                { name: 'Yellow 50', value: '#DCB179', variable: '--yellow-50' },
                { name: 'Yellow 60', value: '#CA954D', variable: '--yellow-60' },
                { name: 'Yellow 70', value: '#B5781F', variable: '--yellow-70' },
                { name: 'Yellow 80', value: '#9D681A', variable: '--yellow-80' },
                { name: 'Yellow 90', value: '#7F571E', variable: '--yellow-90' },
                { name: 'Yellow 100', value: '#6A4A1E', variable: '--yellow-100' },
                { name: 'Yellow 110', value: '#4F391B', variable: '--yellow-110' },
                { name: 'Yellow 120', value: '#413018', variable: '--yellow-120' },
                { name: 'Yellow 130', value: '#302414', variable: '--yellow-130' },
                { name: 'Yellow 140', value: '#21180E', variable: '--yellow-140' }
            ]
        },
        {
            name: 'Orange',
            colors: [
                { name: 'Orange 10', value: '#FFF4EE', variable: '--orange-10' },
                { name: 'Orange 20', value: '#FFE7DB', variable: '--orange-20' },
                { name: 'Orange 30', value: '#FFD8C5', variable: '--orange-30' },
                { name: 'Orange 40', value: '#FFC3A9', variable: '--orange-40' },
                { name: 'Orange 50', value: '#F7A480', variable: '--orange-50' },
                { name: 'Orange 60', value: '#E98457', variable: '--orange-60' },
                { name: 'Orange 70', value: '#D6632E', variable: '--orange-70' },
                { name: 'Orange 90', value: '#BC4C16', variable: '--orange-90' },
                { name: 'Orange 100', value: '#9D441A', variable: '--orange-100' },
                { name: 'Orange 110', value: '#833B1B', variable: '--orange-110' },
                { name: 'Orange 130', value: '#612F19', variable: '--orange-130' },
                { name: 'Orange 140', value: '#4C2716', variable: '--orange-140' },
                { name: 'Orange 150', value: '#3F2114', variable: '--orange-150' },
                { name: 'Orange 160', value: '#28150D', variable: '--orange-160' }
            ]
        },
        {
            name: 'Purple',
            colors: [
                { name: 'Purple 10', value: '#FBF6FE', variable: '--purple-10' },
                { name: 'Purple 20', value: '#EEE8FD', variable: '--purple-20' },
                { name: 'Purple 30', value: '#E4DDFC', variable: '--purple-30' },
                { name: 'Purple 40', value: '#D5C9FB', variable: '--purple-40' },
                { name: 'Purple 50', value: '#BEADF9', variable: '--purple-50' },
                { name: 'Purple 60', value: '#A88EF8', variable: '--purple-60' },
                { name: 'Purple 70', value: '#946AF9', variable: '--purple-70' },
                { name: 'Purple 90', value: '#7F52E0', variable: '--purple-90' },
                { name: 'Purple 100', value: '#6A4BB5', variable: '--purple-100' },
                { name: 'Purple 110', value: '#584291', variable: '--purple-110' },
                { name: 'Purple 130', value: '#423468', variable: '--purple-130' },
                { name: 'Purple 140', value: '#342B51', variable: '--purple-140' },
                { name: 'Purple 150', value: '#2B2442', variable: '--purple-150' },
                { name: 'Purple 160', value: '#1B1728', variable: '--purple-160' }
            ]
        },
        {
            name: 'Teal',
            colors: [
                { name: 'Teal 10', value: '#F3F8F6', variable: '--teal-10' },
                { name: 'Teal 20', value: '#E2EEEC', variable: '--teal-20' },
                { name: 'Teal 30', value: '#D0E5E2', variable: '--teal-30' },
                { name: 'Teal 40', value: '#B7D7D2', variable: '--teal-40' },
                { name: 'Teal 50', value: '#90C2BC', variable: '--teal-50' },
                { name: 'Teal 60', value: '#63ABA4', variable: '--teal-60' },
                { name: 'Teal 70', value: '#28938C', variable: '--teal-70' },
                { name: 'Teal 90', value: '#1C7B75', variable: '--teal-90' },
                { name: 'Teal 100', value: '#256964', variable: '--teal-100' },
                { name: 'Teal 110', value: '#265854', variable: '--teal-110' },
                { name: 'Teal 130', value: '#23423F', variable: '--teal-130' },
                { name: 'Teal 140', value: '#1E3533', variable: '--teal-140' },
                { name: 'Teal 150', value: '#1B2C2B', variable: '--teal-150' },
                { name: 'Teal 160', value: '#121C1A', variable: '--teal-160' }
            ]
        }
    ];

    return (
        <div className="component-showcase">
            <h1>Colors</h1>
            
            <div className="component-section">
                <h2>Editor Colors</h2>
                <p style={{ marginBottom: '20px', color: 'var(--text-secondary)', fontSize: '14px' }}>
                    Colors automatically switch between light and dark theme variants based on current theme.
                </p>
                
                <div className="color-palette">
                    {editorColors.map((color, colorIndex) => (
                        <div key={colorIndex} className="color-item">
                            <div 
                                className="color-swatch" 
                                style={{ backgroundColor: `var(${color.variable})` }}
                            ></div>
                            <div className="color-details">
                                <div className="color-name">{color.name}</div>
                                <div className="color-variable">{color.variable}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            <div className="component-section">
                <h2>Color Scales</h2>
                
                <div className="color-scales">
                    {colorScales.map((scale, scaleIndex) => (
                        <div key={scaleIndex} className="color-scale">
                            <h3 className="color-scale-title">{scale.name}</h3>
                            <div className="color-palette">
                                {scale.colors.map((color, colorIndex) => (
                                    <div key={colorIndex} className="color-item">
                                        <div 
                                            className="color-swatch" 
                                            style={{ backgroundColor: color.value }}
                                        ></div>
                                        <div className="color-details">
                                            <div className="color-name">{color.name}</div>
                                            <div className="color-value">{color.value}</div>
                                            <div className="color-variable">{color.variable}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Colors;