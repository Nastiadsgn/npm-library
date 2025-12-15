import { useState } from 'react';
import Stripe from '../../../../ui/components/stripe/Stripe';
import StripeContainer from '../../../../ui/components/stripe/StripeContainer';
import StatusBar from '../../../../ui/components/statusbar/StatusBar';
import Icon from '../../../../ui/components/icon/Icon';
import IdeIcon from '../../IdeIcon';
import './OnboardingStep1C.css';

/**
 * OnboardingStep1C - Import or Customize Welcome Screen
 * 
 * Screens:
 * 1. Welcome - Two panels: Import settings OR Customize from scratch
 * 2. Customize - Accordion-based customization (Theme, Scale, Editor, Keymap, Plugins)
 */
function OnboardingStep1C({ onComplete }) {
    // Current screen: 'welcome' or 'customize'
    const [currentScreen, setCurrentScreen] = useState('welcome');

    // Left stripe state
    const [leftStripeSelection, setLeftStripeSelection] = useState(null);
    
    // Right stripe state
    const [rightStripeSelection, setRightStripeSelection] = useState(null);
    
    // Bottom stripe items state
    const [bottomStripeSelection, setBottomStripeSelection] = useState(null);

    // Accordion state for customize screen
    const [expandedSection, setExpandedSection] = useState('theme');
    const [customizeSelections, setCustomizeSelections] = useState({
        theme: null,
        interfaceScale: null,
        editorScheme: null,
        keymap: null,
        plugins: null
    });

    // Status bar breadcrumbs
    const breadcrumbs = [
        { label: 'Welcome to WebStorm' }
    ];

    const handleImportJetBrains = () => {
        console.log('Import from JetBrains IDEs');
        // Could expand to show more options or proceed to import
    };

    const handleImportVSCode = () => {
        console.log('Import from VS Code');
        if (onComplete) onComplete();
    };

    const handleImportCursor = () => {
        console.log('Import from Cursor');
        if (onComplete) onComplete();
    };

    const handleCustomize = () => {
        setCurrentScreen('customize');
    };

    const handleFinalGetStarted = () => {
        if (onComplete) onComplete();
    };

    const toggleSection = (section) => {
        // Always keep one panel open - only switch, don't close
        if (expandedSection !== section) {
            setExpandedSection(section);
        }
    };

    const selectOption = (section, value) => {
        setCustomizeSelections(prev => ({
            ...prev,
            [section]: value
        }));
    };

    // Clear selection for a section
    const clearSelection = (section, e) => {
        e.stopPropagation(); // Prevent accordion toggle
        setCustomizeSelections(prev => ({
            ...prev,
            [section]: null
        }));
    };

    // Get shortcuts based on selected keymap
    const getKeymapShortcuts = (keymap) => {
        const shortcuts = {
            'WebStorm': [
                { icon: 'general/search', action: 'Search Everywhere', prefix: 'Double', keys: ['⇧'] },
                { icon: 'general/search', action: 'Go to File', keys: ['⇧', '⌘', 'O'] },
                { icon: 'general/history', action: 'Recent Files', keys: ['⌘', 'E'] },
                { icon: 'actions/replace', action: 'Search in File', keys: ['⌘', 'F'] },
                { icon: 'toolWindow/terminal', action: 'Toggle Terminal', keys: ['⌥', 'F12'] },
            ],
            'VS Code': [
                { icon: 'general/search', action: 'Search Everywhere', keys: ['Ctrl', 'Shift', 'P'] },
                { icon: 'general/search', action: 'Go to File', keys: ['Ctrl', 'P'] },
                { icon: 'general/history', action: 'Recent Files', keys: ['Ctrl', 'Tab'] },
                { icon: 'actions/replace', action: 'Search in File', keys: ['Ctrl', 'F'] },
                { icon: 'toolWindow/terminal', action: 'Toggle Terminal', keys: ['Ctrl', '`'] },
            ],
            'Emacs': [
                { icon: 'general/search', action: 'Search Everywhere', keys: ['M-x'] },
                { icon: 'general/search', action: 'Go to File', keys: ['C-x', 'C-f'] },
                { icon: 'general/history', action: 'Recent Files', keys: ['C-x', 'C-r'] },
                { icon: 'actions/replace', action: 'Search in File', keys: ['C-s'] },
                { icon: 'toolWindow/terminal', action: 'Toggle Terminal', keys: ['M-x', 'term'] },
            ],
            'Sublime Text': [
                { icon: 'general/search', action: 'Search Everywhere', keys: ['⌘', 'Shift', 'P'] },
                { icon: 'general/search', action: 'Go to File', keys: ['⌘', 'P'] },
                { icon: 'general/history', action: 'Recent Files', keys: ['⌘', 'Ctrl', 'P'] },
                { icon: 'actions/replace', action: 'Search in File', keys: ['⌘', 'F'] },
                { icon: 'toolWindow/terminal', action: 'Toggle Terminal', keys: ['Ctrl', '`'] },
            ],
        };
        return shortcuts[keymap] || shortcuts['WebStorm'];
    };

    // Render accordion item
    const renderAccordionItem = (id, label, isExpanded, hasSelection, content) => (
        <div className={`accordion-item ${isExpanded ? 'accordion-item-expanded' : ''}`}>
            <button 
                className="accordion-header"
                onClick={() => toggleSection(id)}
            >
                <div 
                    className={`accordion-checkbox ${hasSelection ? 'accordion-checkbox-checked' : ''}`}
                    onClick={hasSelection ? (e) => clearSelection(id, e) : undefined}
                    role={hasSelection ? "button" : undefined}
                    tabIndex={hasSelection ? 0 : undefined}
                >
                    {hasSelection && (
                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                            <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    )}
                </div>
                <span className="accordion-label">{label}</span>
                <div className={`accordion-chevron ${isExpanded ? 'accordion-chevron-down' : ''}`}>
                    <Icon name="general/chevronRight" size={16} />
                </div>
            </button>
            {isExpanded && (
                <div className="accordion-content">
                    {content}
                </div>
            )}
        </div>
    );

    // Render welcome content
    const renderWelcomeContent = () => (
        <div className="onboarding-c-welcome">
            {/* WebStorm Icon */}
            <div className="onboarding-c-icon">
                <IdeIcon product="WebStorm" size="48" os="Windows" />
            </div>

            {/* Welcome Title */}
            <h1 className="onboarding-c-title">Welcome to WebStorm</h1>

            {/* Subtitle */}
            <p className="onboarding-c-subtitle">
                Powerful IDE for JavaScript and TypeScript
            </p>

            {/* Two Panels */}
            <div className="onboarding-c-panels">
                {/* Left Panel - Import */}
                <div className="onboarding-c-panel">
                    <p className="onboarding-c-panel-title">
                        Import settings from an IDE
                    </p>

                    <div className="onboarding-c-panel-buttons">
                        {/* JetBrains IDEs */}
                        <button 
                            className="onboarding-c-import-btn"
                            onClick={handleImportJetBrains}
                        >
                            <div className="import-btn-icons import-btn-icons-scaled">
                                <IdeIcon product="IDEA Ultimate" size="24" os="Windows" />
                                <IdeIcon product="PyCharm Pro" size="24" os="Windows" />
                                <IdeIcon product="PhpStorm" size="24" os="Windows" />
                            </div>
                            <span className="import-btn-text">JetBrains IDEs</span>
                            <Icon name="general/chevronDown" size={16} className="import-btn-chevron" />
                        </button>

                        {/* Visual Studio Code */}
                        <button 
                            className="onboarding-c-import-btn"
                            onClick={handleImportVSCode}
                        >
                            <div className="import-btn-icon vscode-icon">
                                <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.8 1L4.8 6.4L2.4 4.8L1 5.6V10.4L2.4 11.2L4.8 9.6L10.8 15L15 13.2V2.8L10.8 1ZM2.4 8.8V7.2L3.4 8L2.4 8.8ZM10.4 11.2L6 8L10.4 4.8V11.2Z" fill="#007ACC"/>
                                </svg>
                            </div>
                            <span className="import-btn-text">Visual Studio Code</span>
                        </button>

                        {/* Cursor */}
                        <button 
                            className="onboarding-c-import-btn"
                            onClick={handleImportCursor}
                        >
                            <div className="import-btn-icon cursor-icon">
                                <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="16" height="16" rx="3" fill="#000"/>
                                    <path d="M4 12L12 4M12 4H6M12 4V10" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <span className="import-btn-text">Cursor</span>
                        </button>
                    </div>
                </div>

                {/* Right Panel - Customize */}
                <div className="onboarding-c-panel">
                    <p className="onboarding-c-panel-description">
                        Customize interface, plugins,<br />
                        and keymap from scratch
                    </p>

                    <button 
                        className="onboarding-c-customize-btn"
                        onClick={handleCustomize}
                    >
                        Customize
                    </button>
                </div>
            </div>
        </div>
    );

    // Render "Customize your experience" content
    const renderCustomizeContent = () => (
        <div className="wizard-customize-content">
            {/* Title */}
            <h1 className="wizard-title">Customize your experience</h1>

            {/* Accordion */}
            <div className="wizard-accordion">
                {/* Theme */}
                {renderAccordionItem(
                    'theme',
                    'Theme',
                    expandedSection === 'theme',
                    customizeSelections.theme !== null,
                    <div className="accordion-theme-content">
                        <p className="accordion-description">
                            You can change theme any time in the settings.<br />
                            More themes are available in the Plugin Marketplace
                        </p>
                        <div className="theme-options">
                            <button 
                                className={`theme-option ${customizeSelections.theme === 'dark' ? 'theme-option-selected' : ''}`}
                                onClick={() => selectOption('theme', 'dark')}
                            >
                                <div className="theme-preview">
                                    <img src={require('../images/dark.jpg')} alt="Dark theme" />
                                </div>
                                <span className="theme-label">Dark</span>
                            </button>
                            <button 
                                className={`theme-option ${customizeSelections.theme === 'light' ? 'theme-option-selected' : ''}`}
                                onClick={() => selectOption('theme', 'light')}
                            >
                                <div className="theme-preview">
                                    <img src={require('../images/light.jpg')} alt="Light theme" />
                                </div>
                                <span className="theme-label">Light</span>
                            </button>
                            <button 
                                className={`theme-option ${customizeSelections.theme === 'sync' ? 'theme-option-selected' : ''}`}
                                onClick={() => selectOption('theme', 'sync')}
                            >
                                <div className="theme-preview">
                                    <img src={require('../images/sync_with_os.jpg')} alt="Sync with OS" />
                                </div>
                                <span className="theme-label">Sync with OS</span>
                            </button>
                        </div>
                    </div>
                )}

                {/* Interface scale */}
                {renderAccordionItem(
                    'interfaceScale',
                    'Interface scale',
                    expandedSection === 'interfaceScale',
                    customizeSelections.interfaceScale !== null,
                    <div className="accordion-scale-content">
                        <p className="accordion-description">
                            Adjust the size of UI elements
                        </p>
                        <div className="scale-options">
                            {['100%', '125%', '150%', '175%', '200%'].map(scale => (
                                <button 
                                    key={scale}
                                    className={`scale-option ${customizeSelections.interfaceScale === scale ? 'scale-option-selected' : ''}`}
                                    onClick={() => selectOption('interfaceScale', scale)}
                                >
                                    {scale}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* Editor scheme */}
                {renderAccordionItem(
                    'editorScheme',
                    'Editor scheme',
                    expandedSection === 'editorScheme',
                    customizeSelections.editorScheme !== null,
                    <div className="accordion-scheme-content">
                        <p className="accordion-description">
                            Choose color scheme for the editor
                        </p>
                        <div className="editor-scheme-options">
                            <button 
                                className={`theme-option ${customizeSelections.editorScheme === 'dark' ? 'theme-option-selected' : ''}`}
                                onClick={() => selectOption('editorScheme', 'dark')}
                            >
                                <div className="theme-preview">
                                    <img src={require('../images/editor_dark.jpg')} alt="Dark" />
                                </div>
                                <span className="theme-label">Dark</span>
                            </button>
                            <button 
                                className={`theme-option ${customizeSelections.editorScheme === 'light' ? 'theme-option-selected' : ''}`}
                                onClick={() => selectOption('editorScheme', 'light')}
                            >
                                <div className="theme-preview">
                                    <img src={require('../images/editor_light.jpg')} alt="Light" />
                                </div>
                                <span className="theme-label">Light</span>
                            </button>
                            <button 
                                className={`theme-option ${customizeSelections.editorScheme === 'darcula' ? 'theme-option-selected' : ''}`}
                                onClick={() => selectOption('editorScheme', 'darcula')}
                            >
                                <div className="theme-preview">
                                    <img src={require('../images/editor_darcula.jpg')} alt="Darcula" />
                                </div>
                                <span className="theme-label">Darcula</span>
                            </button>
                            <button 
                                className={`theme-option ${customizeSelections.editorScheme === 'high_contrast' ? 'theme-option-selected' : ''}`}
                                onClick={() => selectOption('editorScheme', 'high_contrast')}
                            >
                                <div className="theme-preview">
                                    <img src={require('../images/editor_high_contrast.jpg')} alt="High Contrast" />
                                </div>
                                <span className="theme-label">High Contrast</span>
                            </button>
                        </div>
                    </div>
                )}

                {/* Keymap */}
                {renderAccordionItem(
                    'keymap',
                    'Keymap',
                    expandedSection === 'keymap',
                    customizeSelections.keymap !== null,
                    <div className="accordion-keymap-content">
                        <div className="keymap-buttons">
                            {['WebStorm', 'VS Code', 'Emacs', 'Sublime Text'].map(keymap => (
                                <button 
                                    key={keymap}
                                    className={`keymap-btn ${(customizeSelections.keymap || 'WebStorm') === keymap ? 'keymap-btn-selected' : ''}`}
                                    onClick={() => selectOption('keymap', keymap)}
                                >
                                    {keymap}
                                </button>
                            ))}
                        </div>
                        <div className="keymap-shortcuts">
                            {getKeymapShortcuts(customizeSelections.keymap || 'WebStorm').map((shortcut, index) => (
                                <div key={index} className="shortcut-item">
                                    <Icon name={shortcut.icon} size={16} />
                                    <span className="shortcut-action">{shortcut.action}</span>
                                    <div className="shortcut-keys">
                                        {shortcut.prefix && <span className="shortcut-prefix">{shortcut.prefix}</span>}
                                        {shortcut.keys.map((key, keyIndex) => (
                                            <span key={keyIndex} className="shortcut-key">{key}</span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Plugins */}
                {renderAccordionItem(
                    'plugins',
                    'Plugins',
                    expandedSection === 'plugins',
                    customizeSelections.plugins !== null,
                    <div className="accordion-plugins-content">
                        <p className="plugins-hint">
                            More plugins are available in the Plugin Marketplace
                        </p>
                        <div className="plugins-list">
                            <div className="plugin-item">
                                <div className="plugin-icon plugin-icon-eslint">
                                    <Icon name="fileTypes/eslint" size={16} />
                                </div>
                                <span className="plugin-name">ESLint</span>
                                <span className="plugin-bundled">Bundled</span>
                                <span className="plugin-check">✓</span>
                            </div>
                            <div className="plugin-item">
                                <div className="plugin-icon plugin-icon-prettier">
                                    <Icon name="fileTypes/prettier" size={16} />
                                </div>
                                <span className="plugin-name">Prettier</span>
                                <span className="plugin-bundled">Bundled</span>
                                <span className="plugin-check">✓</span>
                            </div>
                            <div className="plugin-item">
                                <div className="plugin-icon plugin-icon-rainbow"></div>
                                <span className="plugin-name">Rainbow Brackets</span>
                                <button className="plugin-install-link">Install</button>
                            </div>
                            <div className="plugin-item">
                                <div className="plugin-icon plugin-icon-vim"></div>
                                <span className="plugin-name">IdeaVim</span>
                                <button className="plugin-install-link">Install</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Get Started Button */}
            <button 
                className="wizard-secondary-btn"
                onClick={handleFinalGetStarted}
            >
                Get Started
            </button>
        </div>
    );

    return (
        <div className="onboarding-c">
            {/* Main Toolbar */}
            <div className="onboarding-c-toolbar">
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
            <div className="onboarding-c-content">
                {/* Left Stripe */}
                <div className="onboarding-c-stripe onboarding-c-stripe-left">
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
                <div className="onboarding-c-center">
                    <div className="editor">
                        {/* Background gradient effects (only on welcome screen) */}
                        {currentScreen === 'welcome' && (
                            <div className="onboarding-c-bg-effects">
                                <div className="onboarding-c-bg-ellipse onboarding-c-bg-ellipse-1"></div>
                                <div className="onboarding-c-bg-ellipse onboarding-c-bg-ellipse-2"></div>
                                <div className="onboarding-c-bg-ellipse onboarding-c-bg-ellipse-3"></div>
                            </div>
                        )}

                        {currentScreen === 'welcome' ? renderWelcomeContent() : renderCustomizeContent()}
                    </div>
                </div>

                {/* Right Stripe */}
                <div className="onboarding-c-stripe onboarding-c-stripe-right">
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

export default OnboardingStep1C;
