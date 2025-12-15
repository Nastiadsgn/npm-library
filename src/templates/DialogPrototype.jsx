import React, { useState } from 'react';
import IDELayoutComposable from '../ui/components/idelayout/IDELayoutComposable';
import Dialog from '../ui/components/dialog/Dialog';
import Button from '../ui/components/button/Button';
import Input from '../ui/components/input/Input';
import Checkbox from '../ui/components/checkbox/Checkbox';
import MainToolbar from '../ui/components/showcase/MainToolbar';
import StatusBar from '../ui/components/statusbar/StatusBar';

/**
 * DialogPrototype - IDE layout with integrated dialog showcasing
 * 
 * This template demonstrates how to integrate dialogs with the IDE layout.
 * Perfect for prototyping settings, wizards, or any modal interactions.
 * 
 * @example
 * ```jsx
 * import { DialogPrototype } from '@jetbrains/int-ui-react/templates';
 * 
 * function App() {
 *   return (
 *     <DialogPrototype 
 *       dialogTitle="Settings"
 *       dialogContent={<YourSettingsForm />}
 *     />
 *   );
 * }
 * ```
 */
export function DialogPrototype({
    projectName = 'my-project',
    dialogTitle = 'Settings',
    dialogContent = null,
    dialogButtons = null,
    initialDialogOpen = false,
    theme = 'default',
    children,
    ...props
}) {
    const [dialogVisible, setDialogVisible] = useState(initialDialogOpen);

    const defaultDialogContent = (
        <div style={{ padding: '20px', minWidth: '400px' }}>
            <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', marginBottom: '4px', fontSize: '13px' }}>
                    Project name:
                </label>
                <Input placeholder="Enter project name" />
            </div>
            <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', marginBottom: '4px', fontSize: '13px' }}>
                    Location:
                </label>
                <Input placeholder="/path/to/project" />
            </div>
            <Checkbox label="Create Git repository" />
        </div>
    );

    const defaultButtons = [
        { 
            label: 'Cancel', 
            onClick: () => setDialogVisible(false) 
        },
        { 
            label: 'OK', 
            variant: 'primary', 
            onClick: () => setDialogVisible(false) 
        }
    ];

    return (
        <>
            <IDELayoutComposable
                theme={theme}
                showLeftPanel={false}
                showRightPanel={false}
                toolbar={
                    <MainToolbar projectName={projectName} />
                }
                statusBar={
                    <StatusBar 
                        breadcrumbs={[{ label: projectName }]}
                    />
                }
                {...props}
            >
                <div style={{ padding: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Button 
                        variant="primary" 
                        onClick={() => setDialogVisible(true)}
                    >
                        Open Dialog
                    </Button>
                    {children}
                </div>
            </IDELayoutComposable>

            <Dialog
                visible={dialogVisible}
                title={dialogTitle}
                onClose={() => setDialogVisible(false)}
                buttons={dialogButtons || defaultButtons}
                width="500px"
            >
                {dialogContent || defaultDialogContent}
            </Dialog>
        </>
    );
}

export default DialogPrototype;

