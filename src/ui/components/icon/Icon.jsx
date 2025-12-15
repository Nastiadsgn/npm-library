import iconRegistry from '../../../icons';
import { useTheme } from '../../../ThemeContext';

const normalizeName = (name) =>
    name
        ?.replace(/^\.\//, '')
        .replace(/\.svg$/, '')
        .replace(/\\/g, '/');

function Icon({ name, size = 16, className, forceTheme, ...props }) {
    const { theme: contextTheme } = useTheme();
    const theme = forceTheme || contextTheme;
    const normalizedName = normalizeName(name);
    
    // For dark theme, try to find the _dark variant first
    let iconEntry = null;
    let resolvedName = normalizedName;
    
    if (normalizedName) {
        if (theme === 'dark') {
            // Try dark variant first (append _dark suffix)
            // File pattern: name_dark.svg or name@size_dark.svg
            const darkName = `${normalizedName}_dark`;
            
            if (iconRegistry[darkName]) {
                iconEntry = iconRegistry[darkName];
                resolvedName = darkName;
            } else {
                // Fall back to original name
                iconEntry = iconRegistry[normalizedName];
            }
        } else {
            iconEntry = iconRegistry[normalizedName];
        }
    }

    if (!iconEntry) {
        // eslint-disable-next-line no-console
        console.warn(`Icon "${name}" not found`);
        return null;
    }

    if (typeof iconEntry === 'string') {
        return (
            <img
                src={iconEntry}
                width={size}
                height={size}
                className={`icon ${className || ''}`}
                alt={resolvedName}
                {...props}
            />
        );
    }

    const IconComponent = iconEntry;

    return (
        <IconComponent
            width={size}
            height={size}
            className={`icon ${className || ''}`}
            {...props}
        />
    );
}

export default Icon;
