import React, { useState } from 'react';
import MainToolbar from '../showcase/MainToolbar';
import StripeContainer from '../stripe/StripeContainer';
import Stripe from '../stripe/Stripe';
import StatusBar from '../statusbar/StatusBar';
import ToolWindow from '../toolwindow/ToolWindow';
import Tree from '../tree/Tree';
import TabBar from '../tabs/TabBar';
import Tab from '../tabs/Tab';
import CodeExample from '../showcase/CodeExample';
import './IDELayout.css';

/**
 * IDELayout component - unified IDE window layout supporting multiple themes
 * 
 * Themes:
 * - default: Traditional flat layout with solid borders
 * - island: Modern design with rounded panels, gaps, and gradient backgrounds
 * 
 * Layout structure:
 * - Main Toolbar (top)
 * - Left Stripe (vertical toolbar)
 * - Main Content Area (tool windows + editor)
 * - Right Stripe (vertical toolbar)
 * - Status Bar (bottom)
 */
function IDELayout({
    theme = 'default', // 'default' or 'island'
    projectName = "intellij",
    projectIcon = "IJ",
    projectColor = "cobalt",
    branchName = "main",
    runConfig = "IDEA Community",
    className = "",
    ...props
}) {
    // Left stripe state
    const [leftStripeSelection, setLeftStripeSelection] = useState('project');
    const [showLeftPanel, setShowLeftPanel] = useState(true);
    
    // Right stripe state
    const [rightStripeSelection, setRightStripeSelection] = useState(theme === 'island' ? 'ai' : null);
    const [showRightPanel, setShowRightPanel] = useState(theme === 'island');
    
    // Bottom stripe items state
    const [bottomStripeSelection, setBottomStripeSelection] = useState('terminal');
    const [showBottomPanel, setShowBottomPanel] = useState(theme === 'island');

    // Editor tabs state
    const [activeEditorTab, setActiveEditorTab] = useState('4');
    const editorTabs = [
        { id: '1', label: 'FunctionUtils.java', icon: 'fileTypes/java' },
        { id: '2', label: 'add-hover.svg', icon: 'fileTypes/svg' },
        { id: '3', label: 'add.svg', icon: 'fileTypes/svg' },
        { id: '4', label: 'AdapterScript.java', icon: 'fileTypes/java', closable: true },
        { id: '5', label: 'AdapterScriptInterface.java', icon: 'fileTypes/java' },
    ];

    // Terminal tabs state
    const [activeTerminalTab, setActiveTerminalTab] = useState('local');
    const terminalTabs = [
        { id: 'local', label: 'Local', closable: true },
        { id: 'local1', label: 'Local (1)', closable: true },
    ];

    // Project tree data
    const projectTreeData = [
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

    // Status bar breadcrumbs
    const breadcrumbs = [
        { label: projectName, module: true },
        { label: 'src' },
        { label: 'main' },
        { label: 'java' },
        { label: 'AdapterScript', icon: true, iconName: 'nodes/class' }
    ];

    // Status bar widgets
    const widgets = [
        { type: 'text', text: '39:34' },
        { type: 'text', text: 'LF' },
        { type: 'text', text: 'UTF-8' },
        { type: 'icon', iconName: 'general/unlocked' }
    ];

    const handleLeftStripeClick = (id) => {
        if (leftStripeSelection === id) {
            setShowLeftPanel(!showLeftPanel);
        } else {
            setLeftStripeSelection(id);
            setShowLeftPanel(true);
        }
    };

    const handleRightStripeClick = (id) => {
        if (rightStripeSelection === id) {
            setShowRightPanel(!showRightPanel);
        } else {
            setRightStripeSelection(id);
            setShowRightPanel(true);
        }
    };

    const handleBottomStripeClick = (id) => {
        if (bottomStripeSelection === id) {
            setShowBottomPanel(!showBottomPanel);
        } else {
            setBottomStripeSelection(id);
            setShowBottomPanel(true);
        }
    };

    const themeClass = theme === 'island' ? 'ide-layout-island' : 'ide-layout-default';

    return (
        <div className={`ide-layout ${themeClass} ${className}`} {...props}>
            {/* Main Toolbar */}
            <MainToolbar 
                projectName={projectName}
                projectIcon={projectIcon}
                projectColor={projectColor}
                branchName={branchName}
                runConfig={runConfig}
            />
            
            {/* Main Content Area */}
            <div className="ide-layout-content">
                {/* Left Stripe */}
                <div className="ide-layout-stripe ide-layout-stripe-left">
                    <StripeContainer className="stripe-section-top">
                        <Stripe 
                            icon="toolwindows/project@20x20"
                            state={leftStripeSelection === 'project' && showLeftPanel ? 'selected' : 'default'}
                            title="Project"
                            onClick={() => handleLeftStripeClick('project')}
                        />
                        <Stripe 
                            icon="toolwindows/commit@20x20"
                            state={leftStripeSelection === 'commit' && showLeftPanel ? 'selected' : 'default'}
                            title="Commit"
                            onClick={() => handleLeftStripeClick('commit')}
                        />
                        <Stripe 
                            icon="toolwindows/vcs@20x20"
                            state={leftStripeSelection === 'pullRequests' && showLeftPanel ? 'selected' : 'default'}
                            title="Pull Requests"
                            onClick={() => handleLeftStripeClick('pullRequests')}
                        />
                        <StripeContainer.Separator />
                        <Stripe 
                            icon="toolwindows/structure@20x20"
                            state={leftStripeSelection === 'structure' && showLeftPanel ? 'selected' : 'default'}
                            title="Structure"
                            onClick={() => handleLeftStripeClick('structure')}
                        />
                    </StripeContainer>
                    <StripeContainer className="stripe-section-bottom">
                        <Stripe 
                            icon="toolwindows/services@20x20"
                            state={bottomStripeSelection === 'terminal' && showBottomPanel ? 'selected' : 'default'}
                            title="Terminal"
                            onClick={() => handleBottomStripeClick('terminal')}
                        />
                        <Stripe 
                            icon="toolwindows/run@20x20"
                            state={bottomStripeSelection === 'run' && showBottomPanel ? 'selected' : 'default'}
                            title="Run"
                            onClick={() => handleBottomStripeClick('run')}
                        />
                        <Stripe 
                            icon="toolwindows/debug@20x20"
                            state={bottomStripeSelection === 'debug' && showBottomPanel ? 'selected' : 'default'}
                            title="Debug"
                            onClick={() => handleBottomStripeClick('debug')}
                        />
                    </StripeContainer>
                </div>

                {/* Center Content Area */}
                <div className="ide-layout-center">
                    {/* Top Row: Tool Windows and Editor */}
                    <div className="ide-layout-top-row">
                        {/* Left Tool Window (Project) */}
                        {showLeftPanel && (
                            <ToolWindow
                                title={leftStripeSelection === 'project' ? 'Project' : 
                                       leftStripeSelection === 'commit' ? 'Commit' :
                                       leftStripeSelection === 'pullRequests' ? 'Pull Requests' : 'Structure'}
                                width={280}
                                height="auto"
                                actions={['more', 'minimize']}
                                className="ide-layout-tool-window ide-layout-tool-window-left"
                            >
                                <Tree 
                                    data={projectTreeData}
                                    onNodeSelect={(id) => console.log('Selected:', id)}
                                    onNodeToggle={(id) => console.log('Toggled:', id)}
                                />
                            </ToolWindow>
                        )}

                        {/* Editor Area */}
                        <div className="ide-layout-editor-area">
                            <div className="ide-layout-editor-tabs">
                                {theme === 'default' ? (
                                    editorTabs.map((tab) => (
                                        <Tab
                                            key={tab.id}
                                            label={tab.label}
                                            icon={tab.icon}
                                            active={tab.id === activeEditorTab}
                                            closable={tab.id === activeEditorTab || tab.closable}
                                            onClick={() => setActiveEditorTab(tab.id)}
                                        />
                                    ))
                                ) : (
                                    <TabBar 
                                        tabs={editorTabs.map(t => ({ label: t.label, icon: t.icon, closable: t.closable }))} 
                                        direction="horizontal" 
                                        size="small" 
                                    />
                                )}
                            </div>
                            <div className="ide-layout-editor-content">
                                <CodeExample showLineNumbers={true} />
                            </div>
                        </div>

                        {/* Right Tool Window (AI Assistant) */}
                        {showRightPanel && (
                            <ToolWindow
                                title={rightStripeSelection === 'ai' ? 'AI Assistant' : 
                                       rightStripeSelection === 'database' ? 'Database' :
                                       rightStripeSelection === 'maven' ? 'Maven' : 'Notifications'}
                                width={320}
                                height="auto"
                                actions={['add', 'more', 'minimize']}
                                className="ide-layout-tool-window ide-layout-tool-window-right"
                            >
                                <div style={{ padding: '12px', color: 'var(--text-secondary)', fontSize: '13px' }}>
                                    {rightStripeSelection === 'ai' ? 'AI Assistant ready to help...' : 'No content available'}
                                </div>
                            </ToolWindow>
                        )}
                    </div>

                    {/* Bottom Tool Window (Terminal) */}
                    {showBottomPanel && (
                        <ToolWindow
                            title="Terminal"
                            width="auto"
                            height={180}
                            headerType="tabs"
                            tabs={terminalTabs}
                            activeTab={activeTerminalTab === 'local' ? 0 : 1}
                            onTabChange={(index) => setActiveTerminalTab(index === 0 ? 'local' : 'local1')}
                            actions={['add', 'more', 'minimize']}
                            className="ide-layout-tool-window ide-layout-tool-window-bottom"
                        >
                            <div style={{ padding: '12px', color: 'var(--text-secondary)', fontFamily: 'monospace', fontSize: '13px' }}>
                                $ _
                            </div>
                        </ToolWindow>
                    )}
                </div>

                {/* Right Stripe */}
                <div className="ide-layout-stripe ide-layout-stripe-right">
                    <StripeContainer className="stripe-section-top">
                        <Stripe 
                            icon="toolwindows/toolWindowAskAI@20x20"
                            state={rightStripeSelection === 'ai' && showRightPanel ? 'selected' : 'default'}
                            title="AI Assistant"
                            onClick={() => handleRightStripeClick('ai')}
                        />
                        <Stripe 
                            icon="toolwindows/services@20x20"
                            state={rightStripeSelection === 'database' && showRightPanel ? 'selected' : 'default'}
                            title="Database"
                            onClick={() => handleRightStripeClick('database')}
                        />
                        <Stripe 
                            icon="toolwindows/dependencies@20x20"
                            state={rightStripeSelection === 'maven' && showRightPanel ? 'selected' : 'default'}
                            title="Maven"
                            onClick={() => handleRightStripeClick('maven')}
                        />
                        <StripeContainer.Separator />
                        <Stripe 
                            icon="toolwindows/notifications@20x20"
                            state={rightStripeSelection === 'notifications' && showRightPanel ? 'selected' : 'default'}
                            title="Notifications"
                            onClick={() => handleRightStripeClick('notifications')}
                        />
                    </StripeContainer>
                </div>
            </div>

            {/* Status Bar */}
            <StatusBar 
                breadcrumbs={breadcrumbs}
                widgets={widgets}
            />
        </div>
    );
}

export default IDELayout;



