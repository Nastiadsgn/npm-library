import { useState } from 'react';
import MainToolbar from '../showcase/MainToolbar';
import StripeContainer from '../stripe/StripeContainer';
import Stripe from '../stripe/Stripe';
import ToolWindow from '../toolwindow/ToolWindow';
import Tree from '../tree/Tree';
import TabBar from '../tabs/TabBar';
import CodeExample from '../showcase/CodeExample';
import './IDEWindow.css';

function IDEWindow({
    projectName = "intellij",
    projectIcon = "IJ",
    projectColor = "cobalt",
    branchName = "main",
    runConfig = "IDEA Community",
    className = "",
    ...props
}) {
    const [leftStripeSelected, setLeftStripeSelected] = useState('project');
    const [rightStripeSelected, setRightStripeSelected] = useState(null);
    const [showLeftPanel, setShowLeftPanel] = useState(true);
    const [showRightPanel, setShowRightPanel] = useState(false);

    // Project tree data
    const projectTreeData = [
        {
            id: '1',
            label: 'intellij',
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
                        {
                            id: '1-2-1',
                            label: 'java',
                            icon: 'nodes/folder',
                            isExpanded: true,
                            children: [
                                { id: '1-2-1-1', label: 'analysis', icon: 'nodes/folder' },
                                { id: '1-2-1-2', label: 'BivariateFunction.java', icon: 'fileTypes/java' },
                                { id: '1-2-1-3', label: 'FunctionUtils.java', icon: 'fileTypes/java' },
                                { id: '1-2-1-4', label: 'MultivariateFunction.java', icon: 'fileTypes/java' },
                                { id: '1-2-1-5', label: 'TrivariateFunction.java', icon: 'fileTypes/java' }
                            ]
                        },
                        { id: '1-2-2', label: 'polynomials', icon: 'nodes/folder' },
                        { id: '1-2-3', label: 'solver', icon: 'nodes/folder' }
                    ]
                },
                {
                    id: '1-3',
                    label: 'test',
                    icon: 'nodes/folder',
                    children: [
                        {
                            id: '1-3-1',
                            label: 'java',
                            icon: 'nodes/folder',
                            children: [
                                { id: '1-3-1-1', label: 'FunctionUtilsTest.java', icon: 'fileTypes/java' },
                                { id: '1-3-1-2', label: 'MonitoredFunction.java', icon: 'fileTypes/java' }
                            ]
                        }
                    ]
                },
                { id: '1-4', label: 'External Libraries', icon: 'nodes/ppLibFolder' }
            ]
        }
    ];

    // Editor tabs
    const editorTabs = [
        { label: "VetController.java", icon: "fileTypes/java", closable: true },
        { label: "PetRepository.java", icon: "fileTypes/java", closable: true },
        { label: "OwnerService.java", icon: "fileTypes/java", closable: true }
    ];

    const handleLeftStripeClick = (id) => {
        if (leftStripeSelected === id) {
            setShowLeftPanel(!showLeftPanel);
        } else {
            setLeftStripeSelected(id);
            setShowLeftPanel(true);
        }
    };

    const handleRightStripeClick = (id) => {
        if (rightStripeSelected === id) {
            setShowRightPanel(!showRightPanel);
        } else {
            setRightStripeSelected(id);
            setShowRightPanel(true);
        }
    };

    return (
        <div className={`ide-window ${className}`} {...props}>
            {/* Main Toolbar */}
            <MainToolbar 
                projectName={projectName}
                projectIcon={projectIcon}
                projectColor={projectColor}
                branchName={branchName}
                runConfig={runConfig}
            />

            {/* Main Content Area */}
            <div className="ide-content">
                {/* Left Stripe */}
                <StripeContainer className="ide-stripe-left">
                    <Stripe 
                        icon="toolwindows/project@20x20" 
                        state={leftStripeSelected === 'project' && showLeftPanel ? 'selected' : 'default'} 
                        title="Project"
                        onClick={() => handleLeftStripeClick('project')}
                    />
                    <Stripe 
                        icon="toolwindows/commit@20x20" 
                        state={leftStripeSelected === 'commit' && showLeftPanel ? 'selected' : 'default'}
                        title="Commit"
                        onClick={() => handleLeftStripeClick('commit')}
                    />
                    <Stripe 
                        icon="toolwindows/structure@20x20" 
                        state={leftStripeSelected === 'structure' && showLeftPanel ? 'selected' : 'default'}
                        title="Structure"
                        onClick={() => handleLeftStripeClick('structure')}
                    />
                    <StripeContainer.Separator />
                    <Stripe 
                        icon="toolwindows/bookmarks@20x20" 
                        state={leftStripeSelected === 'bookmarks' && showLeftPanel ? 'selected' : 'default'}
                        title="Bookmarks"
                        onClick={() => handleLeftStripeClick('bookmarks')}
                    />
                </StripeContainer>

                {/* Left Tool Window */}
                {showLeftPanel && (
                    <div className="ide-left-panel">
                        <ToolWindow
                            title={leftStripeSelected === 'project' ? 'Project' : 
                                   leftStripeSelected === 'commit' ? 'Commit' :
                                   leftStripeSelected === 'structure' ? 'Structure' : 'Bookmarks'}
                            width="100%"
                            height="100%"
                            actions={['more', 'minimize']}
                            className="ide-tool-window"
                        >
                            <Tree 
                                data={projectTreeData}
                                onNodeSelect={(id) => console.log('Selected:', id)}
                                onNodeToggle={(id) => console.log('Toggled:', id)}
                            />
                        </ToolWindow>
                    </div>
                )}

                {/* Editor Area */}
                <div className="ide-editor-area">
                    {/* Editor Tabs */}
                    <div className="ide-editor-tabs">
                        <TabBar tabs={editorTabs} direction="horizontal" size="small" />
                    </div>
                    
                    {/* Editor Content */}
                    <div className="ide-editor-content">
                        <div className="component-examples-vertical">
                            <CodeExample 
                                showLineNumbers={true}
                            />
                        </div>
                    </div>
                </div>

                {/* Right Tool Window */}
                {showRightPanel && (
                    <div className="ide-right-panel">
                        <ToolWindow
                            title={rightStripeSelected === 'notifications' ? 'Notifications' : 
                                   rightStripeSelected === 'gradle' ? 'Gradle' : 'Database'}
                            width="100%"
                            height="100%"
                            actions={['more', 'minimize']}
                            className="ide-tool-window"
                        >
                            <div style={{ padding: '12px', color: 'var(--text-secondary)', fontSize: '13px' }}>
                                No content available
                            </div>
                        </ToolWindow>
                    </div>
                )}

                {/* Right Stripe */}
                <StripeContainer className="ide-stripe-right">
                    <Stripe 
                        icon="toolwindows/notifications@20x20" 
                        state={rightStripeSelected === 'notifications' && showRightPanel ? 'selected' : 'default'}
                        title="Notifications"
                        onClick={() => handleRightStripeClick('notifications')}
                    />
                    <Stripe 
                        icon="toolwindows/gradle@20x20" 
                        state={rightStripeSelected === 'gradle' && showRightPanel ? 'selected' : 'default'}
                        title="Gradle"
                        onClick={() => handleRightStripeClick('gradle')}
                    />
                    <Stripe 
                        icon="toolwindows/database@20x20" 
                        state={rightStripeSelected === 'database' && showRightPanel ? 'selected' : 'default'}
                        title="Database"
                        onClick={() => handleRightStripeClick('database')}
                    />
                </StripeContainer>
            </div>

            {/* Status Bar */}
            <div className="ide-status-bar">
                <div className="status-bar-left">
                    <span className="status-item">Git: {branchName}</span>
                    <span className="status-item">LF</span>
                    <span className="status-item">UTF-8</span>
                </div>
                <div className="status-bar-right">
                    <span className="status-item">Java 17</span>
                    <span className="status-item">4 spaces</span>
                    <span className="status-item">Ln 1, Col 1</span>
                </div>
            </div>
        </div>
    );
}

export default IDEWindow;

