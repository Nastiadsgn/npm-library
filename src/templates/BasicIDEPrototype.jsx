import React, { useState } from 'react';
import IDELayoutComposable from '../ui/components/idelayout/IDELayoutComposable';
import MainToolbar from '../ui/components/showcase/MainToolbar';
import StripeContainer from '../ui/components/stripe/StripeContainer';
import Stripe from '../ui/components/stripe/Stripe';
import StatusBar from '../ui/components/statusbar/StatusBar';
import ToolWindow from '../ui/components/toolwindow/ToolWindow';
import Tree from '../ui/components/tree/Tree';
import TabBar from '../ui/components/tabs/TabBar';
import CodeExample from '../ui/components/showcase/CodeExample';

/**
 * BasicIDEPrototype - A ready-to-use IDE layout template
 * 
 * This template provides a complete IDE interface that you can use as-is
 * or customize for your prototyping needs.
 * 
 * Features:
 * - Complete IDE layout with all panels
 * - Project tree on the left
 * - Editor area in the center
 * - Tool windows (left, right, bottom)
 * - Customizable through props
 * 
 * @example
 * ```jsx
 * import { BasicIDEPrototype } from '@jetbrains/int-ui-react/templates';
 * 
 * function App() {
 *   return (
 *     <BasicIDEPrototype 
 *       projectName="My Project"
 *       onFileSelect={(file) => console.log(file)}
 *     />
 *   );
 * }
 * ```
 */
export function BasicIDEPrototype({
    projectName = 'my-project',
    projectIcon = 'MP',
    projectColor = 'cobalt',
    theme = 'default',
    editorContent = null,
    projectTree = null,
    onFileSelect,
    ...props
}) {
    const [leftStripeSelection, setLeftStripeSelection] = useState('project');
    const [showLeftPanel, setShowLeftPanel] = useState(true);
    const [activeEditorTab, setActiveEditorTab] = useState('0');

    const defaultProjectTree = [
        {
            id: '1',
            label: projectName,
            icon: 'nodes/folder',
            isExpanded: true,
            children: [
                { id: '1-1', label: '.idea', icon: 'nodes/folder' },
                {
                    id: '1-2',
                    label: 'src',
                    icon: 'nodes/folder',
                    isExpanded: true,
                    children: [
                        { id: '1-2-1', label: 'main', icon: 'nodes/folder' },
                        { id: '1-2-2', label: 'test', icon: 'nodes/folder' }
                    ]
                },
                { id: '1-3', label: 'package.json', icon: 'fileTypes/json' }
            ]
        }
    ];

    const editorTabs = [
        { id: '0', label: 'App.js', icon: 'fileTypes/javascript', closable: true },
        { id: '1', label: 'index.js', icon: 'fileTypes/javascript', closable: true }
    ];

    const handleLeftStripeClick = (id) => {
        if (leftStripeSelection === id) {
            setShowLeftPanel(!showLeftPanel);
        } else {
            setLeftStripeSelection(id);
            setShowLeftPanel(true);
        }
    };

    return (
        <IDELayoutComposable
            theme={theme}
            showLeftPanel={showLeftPanel}
            toolbar={
                <MainToolbar 
                    projectName={projectName}
                    projectIcon={projectIcon}
                    projectColor={projectColor}
                />
            }
            leftStripe={
                <>
                    <StripeContainer className="stripe-section-top">
                        <Stripe 
                            icon="toolwindows/project@20x20"
                            state={leftStripeSelection === 'project' && showLeftPanel ? 'selected' : 'default'}
                            title="Project"
                            onClick={() => handleLeftStripeClick('project')}
                        />
                        <Stripe 
                            icon="toolwindows/structure@20x20"
                            state={leftStripeSelection === 'structure' && showLeftPanel ? 'selected' : 'default'}
                            title="Structure"
                            onClick={() => handleLeftStripeClick('structure')}
                        />
                    </StripeContainer>
                </>
            }
            leftPanel={
                <ToolWindow
                    title="Project"
                    width={280}
                    height="auto"
                    actions={['more', 'minimize']}
                >
                    <Tree 
                        data={projectTree || defaultProjectTree}
                        onNodeSelect={onFileSelect}
                    />
                </ToolWindow>
            }
            statusBar={
                <StatusBar 
                    breadcrumbs={[
                        { label: projectName, module: true },
                        { label: 'src' },
                        { label: 'App.js' }
                    ]}
                    widgets={[
                        { type: 'text', text: '1:1' },
                        { type: 'text', text: 'UTF-8' }
                    ]}
                />
            }
            {...props}
        >
            <div className="ide-layout-editor-tabs">
                <TabBar 
                    tabs={editorTabs} 
                    direction="horizontal" 
                    size="small"
                    activeIndex={parseInt(activeEditorTab)}
                    onTabClick={(index) => setActiveEditorTab(index.toString())}
                />
            </div>
            <div className="ide-layout-editor-content">
                {editorContent || <CodeExample showLineNumbers={true} />}
            </div>
        </IDELayoutComposable>
    );
}

export default BasicIDEPrototype;

