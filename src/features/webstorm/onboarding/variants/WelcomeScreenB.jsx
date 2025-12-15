import { useState } from 'react';
import Stripe from '../../../../ui/components/stripe/Stripe';
import StripeContainer from '../../../../ui/components/stripe/StripeContainer';
import StatusBar from '../../../../ui/components/statusbar/StatusBar';
import Icon from '../../../../ui/components/icon/Icon';
import './WelcomeScreenB.css';

/**
 * Welcome Screen B - Alternative Welcome Screen with Horizontal Action Buttons
 * 
 * Features:
 * - Horizontal action buttons with large icons (Open, Create new, Clone, Remote Development)
 * - Centered recent projects list below buttons
 * - "Show all..." link for more projects
 * - Customization button with dropdown chevron
 */
function WelcomeScreenB() {
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

    // Sample recent projects data (fewer items for this variant)
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
            path: '~/Library/Application Support/calculator-univer...'
        },
        {
            id: 3,
            name: 'calculator-unit-tests-java',
            initials: 'CU',
            color: 'teal',
            path: '~/Library/Application Support/calculator-univer...'
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

    const handleShowAll = () => {
        console.log('Show all projects');
    };

    const handleCustomization = () => {
        console.log('Open customization dropdown');
    };

    const handleExplorePlugins = () => {
        console.log('Open plugins marketplace');
    };

    const handleHelp = () => {
        console.log('Open help');
    };

    return (
        <div className="welcome-screen-b">
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
                        {/* Welcome Title */}
                        <h1 className="welcome-title">Welcome to WebStorm</h1>

                        {/* Horizontal Action Buttons */}
                        <div className="action-buttons-row">
                            <div className="action-button-item">
                                <button className="action-button-icon" onClick={handleOpenProject}>
                                    {/* Folder icon - blue */}
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.158 6.519L12.38 6.75H12.7H19.5C20.7426 6.75 21.75 7.75736 21.75 9V18.2C21.75 19.4289 20.898 20.25 20.05 20.25H3.95C3.10206 20.25 2.25 19.4289 2.25 18.2V5.8C2.25 4.57061 3.10206 3.75 3.95 3.75H9.18255C9.38688 3.75 9.58236 3.83336 9.7238 3.98081L12.158 6.519Z" fill="#25324D" stroke="#548AF7" strokeWidth="1.5"/>
                                    </svg>
                                </button>
                                <span className="action-button-label">Open</span>
                            </div>
                            <div className="action-button-item">
                                <button className="action-button-icon" onClick={handleNewProject}>
                                    {/* Plus icon - blue */}
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M12 3C11.4477 3 11 3.44772 11 4V11H4C3.44772 11 3 11.4477 3 12C3 12.5523 3.44772 13 4 13H11V20C11 20.5523 11.4477 21 12 21C12.5523 21 13 20.5523 13 20V13H20C20.5523 13 21 12.5523 21 12C21 11.4477 20.5523 11 20 11H13V4C13 3.44772 12.5523 3 12 3Z" fill="#548AF7"/>
                                    </svg>
                                </button>
                                <span className="action-button-label">Create new</span>
                            </div>
                            <div className="action-button-item">
                                <button className="action-button-icon" onClick={handleCloneProject}>
                                    {/* VCS/Branch icon - blue */}
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="6.75" cy="6" r="3" stroke="#548AF7" strokeWidth="1.5"/>
                                        <path d="M6.75 17.25H12.75C14.4069 17.25 15.75 15.9069 15.75 14.25V12" stroke="#548AF7" strokeWidth="1.5"/>
                                        <path d="M6.75 9.75V21.75" stroke="#548AF7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <circle cx="15.75" cy="9" r="3" stroke="#548AF7" strokeWidth="1.5"/>
                                    </svg>
                                </button>
                                <span className="action-button-label">Clone</span>
                            </div>
                            <div className="action-button-item">
                                <button className="action-button-icon" onClick={handleRemoteDevelopment}>
                                    {/* Desktop/Terminal icon - blue */}
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="3.75" y="3.75" width="16.5" height="12" rx="1.5" stroke="#548AF7" strokeWidth="1.5"/>
                                        <path d="M3 19.5C3 19.2239 3.22386 19 3.5 19H20.5C20.7761 19 21 19.2239 21 19.5C21 19.7761 20.7761 20 20.5 20H3.5C3.22386 20 3 19.7761 3 19.5Z" fill="#548AF7"/>
                                        <path d="M7.5 8L10 10.5L7.5 13" stroke="#548AF7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M12 13H16" stroke="#548AF7" strokeWidth="1.5" strokeLinecap="round"/>
                                    </svg>
                                </button>
                                <span className="action-button-label">Remote<br/>Development</span>
                            </div>
                        </div>

                        {/* Recent Projects Section */}
                        <div className="recent-projects-section">
                            <div className="section-header">Recent projects</div>
                            <div className="project-list">
                                {recentProjects.map((project) => (
                                    <div 
                                        key={project.id} 
                                        className="project-item"
                                        onClick={() => handleProjectClick(project)}
                                    >
                                        <div className={`project-item-icon ${project.color}`}>
                                            {project.initials}
                                        </div>
                                        <div className="project-item-details">
                                            <div className="project-item-name">{project.name}</div>
                                            <div className="project-item-path">{project.path}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <button className="show-all-link" onClick={handleShowAll}>
                                Show all…
                            </button>
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

export default WelcomeScreenB;
