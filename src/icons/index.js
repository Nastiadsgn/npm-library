// Auto-generated icon registry that mirrors the IntelliJ Platform directory layout.
// Consumers should reference icons by their relative path without the ".svg" suffix,
// e.g. "general/add" or "nodes/pluginLogo".

// Use the SVGR inline loader to force SVGs to be loaded as React components.
// The '!' prefix bypasses CRA's default SVG handling.
// We disable svgo to preserve SVG content and enable exportType=default.
const svgContext = require.context(
    '!!@svgr/webpack?exportType=default!./',
    true,
    /\.svg$/
);

const sanitizeKey = (filePath) =>
    filePath
        .replace('./', '')
        .replace(/\.svg$/, '')
        .replace(/\\/g, '/');

const buildRegistry = () =>
    svgContext.keys().reduce((acc, filePath) => {
        const moduleExports = svgContext(filePath);
        // With exportType=default, SVGR exports the component as default
        const IconComponent = moduleExports?.default || moduleExports;

        if (IconComponent && typeof IconComponent === 'function') {
            acc[sanitizeKey(filePath)] = IconComponent;
        } else if (process.env.NODE_ENV !== 'production') {
            // eslint-disable-next-line no-console
            console.warn(`Icon "${filePath}" failed to load as React component:`, typeof IconComponent);
        }

        return acc;
    }, {});

const iconRegistry = buildRegistry();

export const iconNames = Object.keys(iconRegistry).sort();

export const getIcon = (name) => iconRegistry[name];

export default iconRegistry;
