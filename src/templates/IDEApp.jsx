import React from 'react';
import IDELayout from '../ui/components/idelayout/IDELayout';
import { ThemeProvider } from '../ThemeContext';

/**
 * IDEApp - A ready-to-use full-screen IDE application template
 * 
 * This template provides a complete IDE application that fills the entire
 * viewport. Perfect for building IDE-like prototypes or applications.
 * 
 * Features:
 * - Full-screen IDE layout filling the entire viewport
 * - Theme support (island or default)
 * - Interactive tool windows (toggle with stripe buttons)
 * - Project tree, code editor, terminal, and AI assistant panels
 * - Main toolbar with project selector and run configurations
 * - Status bar with breadcrumb navigation
 * 
 * @example Basic Usage
 * ```jsx
 * import { IDEApp } from 'jetbrainswebtest';
 * import 'jetbrainswebtest/dist/styles.css';
 * 
 * function App() {
 *   return <IDEApp projectName="my-app" />;
 * }
 * ```
 * 
 * @example With Custom Theme
 * ```jsx
 * <IDEApp 
 *   theme="default"
 *   projectName="my-project"
 *   projectIcon="MP"
 *   projectColor="grass"
 *   branchName="feature/new-ui"
 *   runConfig="Development Server"
 * />
 * ```
 * 
 * @param {Object} props
 * @param {'island'|'default'} [props.theme='island'] - IDE theme style
 * @param {string} [props.projectName='my-project'] - Project name shown in toolbar
 * @param {string} [props.projectIcon='MP'] - Two-letter project icon
 * @param {string} [props.projectColor='cobalt'] - Project icon color (cobalt, grass, amber, violet, teal, plum, ocean)
 * @param {string} [props.branchName='main'] - Git branch name
 * @param {string} [props.runConfig='Development'] - Run configuration name
 * @param {string} [props.className] - Additional CSS class
 */
export function IDEApp({
    theme = 'island',
    projectName = 'my-project',
    projectIcon = 'MP',
    projectColor = 'cobalt',
    branchName = 'main',
    runConfig = 'Development',
    className = '',
    ...props
}) {
    return (
        <ThemeProvider>
            <div className={`ide-app ${className}`} style={ideAppStyles}>
                <IDELayout 
                    theme={theme}
                    projectName={projectName}
                    projectIcon={projectIcon}
                    projectColor={projectColor}
                    branchName={branchName}
                    runConfig={runConfig}
                    {...props}
                />
            </div>
        </ThemeProvider>
    );
}

// Inline styles for the app container to avoid CSS file dependency issues
const ideAppStyles = {
    width: '100vw',
    height: '100vh',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
};

// CSS that should be added to index.css or App.css
IDEApp.requiredCSS = `
/* Required CSS for IDEApp - add to your global styles */
* {
  box-sizing: border-box;
}

html, body, #root {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.ide-app .ide-layout {
  width: 100%;
  height: 100%;
  min-height: 100vh;
  border-radius: 0;
  border: none;
}

.ide-app .ide-layout-island,
.ide-app .ide-layout-default {
  border-radius: 0;
}

.ide-app .main-toolbar {
  border-radius: 0;
}
`;

export default IDEApp;

