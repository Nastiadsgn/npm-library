import { useState } from 'react';
import Stripe from '../../../../ui/components/stripe/Stripe';
import StripeContainer from '../../../../ui/components/stripe/StripeContainer';
import StatusBar from '../../../../ui/components/statusbar/StatusBar';
import Icon from '../../../../ui/components/icon/Icon';
import './WelcomeScreenA.css';

/**
 * Welcome Screen A - Full IDE Welcome Screen with Recent Projects
 * 
 * Features:
 * - Projects and Files action buttons (Open, New, Clone, Remote Development)
 * - Recent projects list with project icons
 * - Bottom toolbar with Customization, Explore plugins, Help
 */
function WelcomeScreenA() {
    // Left stripe state
    const [leftStripeSelection, setLeftStripeSelection] = useState(null);
    
    // Right stripe state
    const [rightStripeSelection, setRightStripeSelection] = useState(null);
    
    // Bottom stripe items state
    const [bottomStripeSelection, setBottomStripeSelection] = useState(null);

    // Status bar breadcrumbs
    const breadcrumbs = [
        { label: 'Welcome to WebStorm' }
    ];

    // Sample recent projects data
    const recentProjects = [
        {
            id: 1,
            name: 'angular-something',
            initials: 'II',
            color: 'grass',
            path: '~/ideaProject/intellij-idea'
        },
        {
            id: 2,
            name: 'calculator-unit-tests-java',
            initials: 'CU',
            color: 'teal',
            path: '~/Library/Application Support/calculator-uni...',
            branch: 'master'
        },
        {
            id: 3,
            name: 'calculator-unit-tests-java',
            initials: 'CU',
            color: 'teal',
            path: '~/Library/Application Support/calculator-uni...'
        },
        {
            id: 4,
            name: 'platform-ui-web, angularTestvd',
            initials: 'PU',
            color: 'teal',
            path: '~/Library/Application Support/calculator-uni...'
        }
    ];

    const handleOpenProject = () => {
        console.log('Open project dialog');
    };

    const handleNewProject = () => {
        console.log('New project dialog');
    };

    const handleCloneProject = () => {
        console.log('Clone project dialog');
    };

    const handleRemoteDevelopment = () => {
        console.log('Remote development dialog');
    };

    const handleProjectClick = (project) => {
        console.log('Open project:', project.name);
    };

    const handleCustomization = () => {
        console.log('Open customization');
    };

    const handleExplorePlugins = () => {
        console.log('Open plugins marketplace');
    };

    const handleHelp = () => {
        console.log('Open help');
    };

    return (
        <div className="welcome-screen">
            {/* Main Toolbar */}
            <div className="welcome-toolbar">
                {/* Left side - macOS Window Controls + Project Selector */}
                <div className="toolbar-left-side">
                    <div className="window-controls">
                        <div className="window-control close"></div>
                        <div className="window-control minimize"></div>
                        <div className="window-control maximize"></div>
                    </div>
                    <div className="project-selector">
                        <div className="project-icon">WS</div>
                        <span className="project-name">WebStorm</span>
                        <Icon name="general/chevronDown" size={16} className="project-dropdown-icon" />
                    </div>
                </div>

                {/* Right side - Actions */}
                <div className="toolbar-right-side">
                    <button className="toolbar-icon-button" title="AI Assistant">
                        <Icon name="toolwindows/toolWindowAskAI@20x20" size={20} />
                    </button>
                    <button className="toolbar-icon-button" title="Search Everywhere">
                        <Icon name="general/search@20x20" size={20} />
                    </button>
                    <button className="toolbar-icon-button" title="Settings">
                        <Icon name="general/settings@20x20" size={20} />
                    </button>
                </div>
            </div>
            
            {/* Main Content Area */}
            <div className="welcome-content">
                {/* Left Stripe */}
                <div className="welcome-stripe welcome-stripe-left">
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
                            icon="toolwindows/terminal@20x20"
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

                {/* Center Content */}
                <div className="welcome-center">
                    <div className="editor">
                        <div className="welcome-screen-content">
                        {/* Welcome Header */}
                        <div className="welcome-header">
                            <h1 className="welcome-title">Welcome to WebStorm</h1>
                        </div>

                        {/* Main Content - Two Columns */}
                        <div className="welcome-main">
                            {/* Left Column - Projects and Files */}
                            <div className="welcome-projects-files">
                                <div className="welcome-section-header">Projects and Files</div>
                                <div className="welcome-action-buttons">
                                    <button className="welcome-action-btn" onClick={handleOpenProject}>
                                        <Icon name="nodes/folder" size={16} />
                                        <span className="welcome-action-btn-text">Open...</span>
                                    </button>
                                    <button className="welcome-action-btn" onClick={handleNewProject}>
                                        <Icon name="general/add" size={16} />
                                        <span className="welcome-action-btn-text">New...</span>
                                    </button>
                                    <button className="welcome-action-btn" onClick={handleCloneProject}>
                                        <Icon name="vcs/fetch" size={16} />
                                        <span className="welcome-action-btn-text">Clone...</span>
                                    </button>
                                    <button className="welcome-action-btn" onClick={handleRemoteDevelopment}>
                                        <Icon name="nodes/desktop" size={16} />
                                        <span className="welcome-action-btn-text">Remote Development...</span>
                                    </button>
                                </div>
                            </div>

                            {/* Right Column - Recent Projects */}
                            <div className="welcome-recent-projects">
                                <div className="welcome-section-header">Recent projects</div>
                                <div className="welcome-project-list">
                                    {recentProjects.map((project) => (
                                        <div 
                                            key={project.id} 
                                            className="welcome-project-item"
                                            onClick={() => handleProjectClick(project)}
                                        >
                                            <div className={`welcome-project-icon ${project.color}`}>
                                                {project.initials}
                                            </div>
                                            <div className="welcome-project-details">
                                                <div className="welcome-project-name">{project.name}</div>
                                                <div className="welcome-project-path">{project.path}</div>
                                                {project.branch && (
                                                    <div className="welcome-project-branch">
                                                        <Icon name="toolwindows/vcs" size={16} />
                                                        <span className="welcome-project-branch-name">{project.branch}</span>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Footer Buttons */}
                        <div className="welcome-footer">
                            <button className="welcome-footer-btn" onClick={handleCustomization}>
                                <Icon name="theme/darkTheme" size={16} />
                                <span className="welcome-footer-btn-text">Customization</span>
                            </button>
                            <button className="welcome-footer-btn" onClick={handleExplorePlugins}>
                                <Icon name="nodes/plugin" size={16} />
                                <span className="welcome-footer-btn-text">Explore plugins</span>
                            </button>
                            <button className="welcome-footer-btn" onClick={handleHelp}>
                                <Icon name="general/help" size={16} />
                                <span className="welcome-footer-btn-text">Help</span>
                            </button>
                        </div>
                        </div>
                    </div>
                </div>

                {/* Right Stripe */}
                <div className="welcome-stripe welcome-stripe-right">
                    <StripeContainer className="stripe-section-top">
                        <Stripe 
                            icon="toolwindows/toolWindowChat@20x20"
                            state={rightStripeSelection === 'chat' ? 'selected' : 'default'}
                            title="AI Chat"
                            onClick={() => setRightStripeSelection('chat')}
                        />
                        <Stripe 
                            icon="toolwindows/database@20x20"
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
                widgets={[]}
            />
        </div>
    );
}

export default WelcomeScreenA;
