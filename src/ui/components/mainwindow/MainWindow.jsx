import React, { useState } from 'react';
import MainToolbar from '../showcase/MainToolbar';
import StripeContainer from '../stripe/StripeContainer';
import Stripe from '../stripe/Stripe';
import StatusBar from '../statusbar/StatusBar';
import ToolWindow from '../toolwindow/ToolWindow';
import Tab from '../tabs/Tab';
import './MainWindow.css';

/**
 * MainWindow component - represents the full IDE window layout
 * 
 * Layout structure:
 * - Main Toolbar (top)
 * - Left Stripe (vertical toolbar)
 * - Main Content Area (tool windows + editor)
 * - Right Stripe (vertical toolbar)
 * - Status Bar (bottom)
 */
function MainWindow({
    projectName = "commons-math",
    projectIcon = "CM",
    projectColor = "teal",
    branchName = "main",
    runConfig = "IDEA Community",
    className = "",
    ...props
}) {
    // Left stripe state
    const [leftStripeSelection, setLeftStripeSelection] = useState('project');
    
    // Right stripe state
    const [rightStripeSelection, setRightStripeSelection] = useState('ai');
    
    // Bottom stripe items state
    const [bottomStripeSelection, setBottomStripeSelection] = useState('terminal');

    // Editor tabs state
    const [activeEditorTab, setActiveEditorTab] = useState('4');
    const editorTabs = [
        { id: '1', label: 'FunctionUtils.java', icon: 'nodes/class' },
        { id: '2', label: 'add-hover.svg', icon: 'fileTypes/svg' },
        { id: '3', label: 'add.svg', icon: 'fileTypes/svg' },
        { id: '4', label: 'AdapterScript.java', icon: 'nodes/class', closable: true },
        { id: '5', label: 'AdapterScriptInterface.java', icon: 'nodes/interface' },
    ];

    // Terminal tabs state
    const [activeTerminalTab, setActiveTerminalTab] = useState('local');
    const terminalTabs = [
        { id: 'local', label: 'Local', closable: true },
        { id: 'local1', label: 'Local (1)', closable: true },
    ];

    // Status bar breadcrumbs
    const breadcrumbs = [
        { label: 'intellij', module: true },
        { label: 'accurate-math-core', module: true },
        { label: 'src' },
        { label: 'main' },
        { label: 'java' },
        { label: 'org' },
        { label: 'math' },
        { label: 'core' },
        { label: 'AccurateMath', icon: true, iconName: 'nodes/class' }
    ];

    // Status bar widgets
    const widgets = [
        { type: 'text', text: '39:34' },
        { type: 'text', text: 'LF' },
        { type: 'text', text: 'UTF-8' },
        { type: 'icon', iconName: 'general/unlocked' }
    ];

    return (
        <div className={`main-window ${className}`} {...props}>
            {/* Main Toolbar */}
            <MainToolbar 
                projectName={projectName}
                branchName={branchName}
                runConfig={runConfig}
            />
            
            {/* Main Content Area */}
            <div className="main-window-content">
                {/* Left Stripe */}
                <div className="main-window-stripe main-window-stripe-left">
                    <StripeContainer className="stripe-section-top">
                        <Stripe 
                            icon="toolwindows/project@20x20"
                            state={leftStripeSelection === 'project' ? 'selected' : 'default'}
                            title="Project"
                            onClick={() => setLeftStripeSelection('project')}
                        />
                        <Stripe 
                            icon="toolwindows/commit@20x20"
                            state={leftStripeSelection === 'commit' ? 'selected' : 'default'}
                            title="Commit"
                            onClick={() => setLeftStripeSelection('commit')}
                        />
                        <Stripe 
                            icon="toolwindows/vcs@20x20"
                            state={leftStripeSelection === 'pullRequests' ? 'selected' : 'default'}
                            title="Pull Requests"
                            onClick={() => setLeftStripeSelection('pullRequests')}
                        />
                        <StripeContainer.Separator />
                        <Stripe 
                            icon="toolwindows/structure@20x20"
                            state={leftStripeSelection === 'structure' ? 'selected' : 'default'}
                            title="Structure"
                            onClick={() => setLeftStripeSelection('structure')}
                        />
                        <Stripe 
                            icon="toolwindows/toolWindowOverflow@20x20"
                            state={leftStripeSelection === 'more' ? 'selected' : 'default'}
                            title="More tool windows"
                            onClick={() => setLeftStripeSelection('more')}
                        />
                    </StripeContainer>
                    <StripeContainer className="stripe-section-bottom">
                        <Stripe 
                            icon="toolwindows/services@20x20"
                            state={bottomStripeSelection === 'terminal' ? 'selected' : 'default'}
                            title="Terminal"
                            onClick={() => setBottomStripeSelection('terminal')}
                        />
                        <Stripe 
                            icon="toolwindows/run@20x20"
                            state={bottomStripeSelection === 'run' ? 'selected' : 'default'}
                            title="Run"
                            onClick={() => setBottomStripeSelection('run')}
                        />
                        <Stripe 
                            icon="toolwindows/debug@20x20"
                            state={bottomStripeSelection === 'debug' ? 'selected' : 'default'}
                            title="Debug"
                            onClick={() => setBottomStripeSelection('debug')}
                        />
                        <Stripe 
                            icon="toolwindows/find@20x20"
                            state={bottomStripeSelection === 'find' ? 'selected' : 'default'}
                            title="Find"
                            onClick={() => setBottomStripeSelection('find')}
                        />
                    </StripeContainer>
                </div>

                {/* Central Content */}
                <div className="main-window-center">
                    {/* Top Row: Tool Windows and Editor */}
                    <div className="main-window-top-row">
                        {/* Left Tool Window (Project) */}
                        <ToolWindow
                            title="Project"
                            width={280}
                            height="auto"
                            actions={['more', 'minimize']}
                            className="main-window-tool-window main-window-tool-window-left"
                        >
                            {/* Tree content would go here */}
                        </ToolWindow>

                        {/* Editor Area */}
                        <div className="editor-area">
                            <div className="editor-tabs">
                                {editorTabs.map((tab) => (
                                    <Tab
                                        key={tab.id}
                                        label={tab.label}
                                        icon={tab.icon}
                                        active={tab.id === activeEditorTab}
                                        closable={tab.id === activeEditorTab || tab.closable}
                                        onClick={() => setActiveEditorTab(tab.id)}
                                    />
                                ))}
                            </div>
                            <div className="editor-content">
                                {/* Editor content would go here */}
                            </div>
                        </div>

                        {/* Right Tool Window (AI Assistant) */}
                        <ToolWindow
                            title="AI Assistant"
                            width={320}
                            height="auto"
                            actions={['add', 'more', 'minimize']}
                            className="main-window-tool-window main-window-tool-window-right"
                        >
                            {/* AI Assistant content would go here */}
                        </ToolWindow>
                    </div>

                    {/* Bottom Tool Window (Terminal) */}
                    <ToolWindow
                        title="Terminal"
                        width="auto"
                        height={220}
                        headerType="tabs"
                        tabs={terminalTabs}
                        activeTab={activeTerminalTab === 'local' ? 0 : 1}
                        onTabChange={(index) => setActiveTerminalTab(index === 0 ? 'local' : 'local1')}
                        actions={['add', 'more', 'minimize']}
                        className="main-window-tool-window main-window-tool-window-bottom"
                    >
                        {/* Terminal content would go here */}
                    </ToolWindow>
                </div>

                {/* Right Stripe */}
                <div className="main-window-stripe main-window-stripe-right">
                    <StripeContainer className="stripe-section-top">
                        <Stripe 
                            icon="toolwindows/toolWindowAskAI@20x20"
                            state={rightStripeSelection === 'ai' ? 'selected' : 'default'}
                            title="AI Assistant"
                            onClick={() => setRightStripeSelection('ai')}
                        />
                        <Stripe 
                            icon="toolwindows/services@20x20"
                            state={rightStripeSelection === 'database' ? 'selected' : 'default'}
                            title="Database"
                            onClick={() => setRightStripeSelection('database')}
                        />
                        <Stripe 
                            icon="toolwindows/dependencies@20x20"
                            state={rightStripeSelection === 'maven' ? 'selected' : 'default'}
                            title="Maven"
                            onClick={() => setRightStripeSelection('maven')}
                        />
                        <StripeContainer.Separator />
                        <Stripe 
                            icon="toolwindows/notifications@20x20"
                            state={rightStripeSelection === 'notifications' ? 'selected' : 'default'}
                            title="Notifications"
                            onClick={() => setRightStripeSelection('notifications')}
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

export default MainWindow;

