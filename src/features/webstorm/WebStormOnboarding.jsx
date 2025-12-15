import { useState } from 'react';
import Stripe from '../../ui/components/stripe/Stripe';
import StripeContainer from '../../ui/components/stripe/StripeContainer';
import StatusBar from '../../ui/components/statusbar/StatusBar';
import Icon from '../../ui/components/icon/Icon';
import IdeIcon from './IdeIcon';
import './WebStormOnboarding.css';

/**
 * WebStorm Onboarding component - Welcome screen for WebStorm IDE
 * 
 * Layout structure:
 * - Main Toolbar (top) with macOS controls and right-side actions
 * - Left Stripe (vertical toolbar)
 * - Welcome Content (center)
 * - Right Stripe (vertical toolbar)
 * - Status Bar (bottom)
 */
function WebStormOnboarding({
    className = "",
    onboardingScreen = "1",
    welcomeOption = "1",
    onImportJetBrains,
    onImportVSCode,
    onImportCursor,
    onCustomize,
    ...props
}) {
    // Left stripe state
    const [leftStripeSelection, setLeftStripeSelection] = useState(null);
    
    // Right stripe state
    const [rightStripeSelection, setRightStripeSelection] = useState(null);
    
    // Bottom stripe items state
    const [bottomStripeSelection, setBottomStripeSelection] = useState(null);

    // Status bar breadcrumbs for welcome screen
    const breadcrumbs = [
        { label: 'Welcome to WebStorm' }
    ];

    return (
        <div className={`webstorm-onboarding ${className}`} {...props}>
            {/* Main Toolbar */}
            <div className="onboarding-toolbar">
                {/* Left side - macOS Window Controls */}
                <div className="toolbar-left-side">
                    <div className="window-controls">
                        <div className="window-control close"></div>
                        <div className="window-control minimize"></div>
                        <div className="window-control maximize"></div>
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
            <div className="onboarding-content">
                {/* Left Stripe */}
                <div className="onboarding-stripe onboarding-stripe-left">
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

                {/* Welcome Content */}
                <div className="onboarding-center">
                    <div className="welcome-content">
                        {/* WebStorm Icon */}
                        <div className="welcome-icon">
                            <IdeIcon product="WebStorm" size="36" os="Windows" />
                        </div>

                        {/* Welcome Title */}
                        <h1 className="welcome-title">Welcome to WebStorm</h1>

                        {/* Cards Container */}
                        <div className="welcome-cards">
                            {/* Import Settings Card */}
                            <div className="welcome-card">
                                <p className="card-title">Import settings from an IDE</p>
                                
                                <div className="card-buttons">
                                    <button 
                                        className="import-button"
                                        onClick={onImportJetBrains}
                                    >
                                        <div className="import-button-icons">
                                            <IdeIcon product="IDEA Ultimate" size="16" os="Windows" />
                                            <IdeIcon product="PyCharm Pro" size="16" os="Windows" />
                                            <IdeIcon product="WebStorm" size="16" os="Windows" />
                                        </div>
                                        <span className="import-button-text">JetBrains IDEs</span>
                                        <Icon name="general/chevronDown" size={16} className="dropdown-icon" />
                                    </button>

                                    <button 
                                        className="import-button"
                                        onClick={onImportVSCode}
                                    >
                                        <div className="vscode-icon">
                                            <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.8 1L4.8 6.4L2.4 4.8L1 5.6V10.4L2.4 11.2L4.8 9.6L10.8 15L15 13.2V2.8L10.8 1ZM2.4 8.8V7.2L3.4 8L2.4 8.8ZM10.4 11.2L6 8L10.4 4.8V11.2Z" fill="#007ACC"/>
                                            </svg>
                                        </div>
                                        <span className="import-button-text">Visual Studio Code</span>
                                    </button>

                                    <button 
                                        className="import-button"
                                        onClick={onImportCursor}
                                    >
                                        <div className="cursor-icon">
                                            <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect width="16" height="16" rx="3" fill="#000"/>
                                                <path d="M4 12L12 4M12 4H6M12 4V10" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </div>
                                        <span className="import-button-text">Cursor</span>
                                    </button>
                                </div>
                            </div>

                            {/* Customize Card */}
                            <div className="welcome-card">
                                <p className="card-description">
                                    Customize interface, plugins,<br />and keymap from scratch
                                </p>
                                
                                <div className="card-buttons card-buttons-centered">
                                    <button 
                                        className="import-button"
                                        onClick={onCustomize}
                                    >
                                        <span className="import-button-text">Customize</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Stripe */}
                <div className="onboarding-stripe onboarding-stripe-right">
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

export default WebStormOnboarding;

