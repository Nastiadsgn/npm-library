import React from 'react';
import IDELayoutComposable from '../ui/components/idelayout/IDELayoutComposable';
import MainToolbar from '../ui/components/showcase/MainToolbar';
import StatusBar from '../ui/components/statusbar/StatusBar';

/**
 * MinimalIDEPrototype - A minimal IDE layout with just toolbar and editor
 * 
 * Use this template when you want a simple, clean layout without side panels.
 * Perfect for focusing on the main content area.
 * 
 * @example
 * ```jsx
 * import { MinimalIDEPrototype } from '@jetbrains/int-ui-react/templates';
 * 
 * function App() {
 *   return (
 *     <MinimalIDEPrototype>
 *       <YourCustomEditor />
 *     </MinimalIDEPrototype>
 *   );
 * }
 * ```
 */
export function MinimalIDEPrototype({
    projectName = 'my-project',
    theme = 'default',
    children,
    ...props
}) {
    return (
        <IDELayoutComposable
            theme={theme}
            showLeftPanel={false}
            showRightPanel={false}
            showBottomPanel={false}
            toolbar={
                <MainToolbar projectName={projectName} />
            }
            statusBar={
                <StatusBar 
                    breadcrumbs={[{ label: projectName }]}
                    widgets={[{ type: 'text', text: 'Ready' }]}
                />
            }
            {...props}
        >
            {children}
        </IDELayoutComposable>
    );
}

export default MinimalIDEPrototype;

