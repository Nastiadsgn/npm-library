import { useState } from 'react';
import Stripe from '../../../../ui/components/stripe/Stripe';
import StripeContainer from '../../../../ui/components/stripe/StripeContainer';
import StatusBar from '../../../../ui/components/statusbar/StatusBar';
import Icon from '../../../../ui/components/icon/Icon';
import IdeIcon from '../../IdeIcon';
import './OnboardingStep1.css';

/**
 * OnboardingStep1 - Multistep Wizard
 * 
 * Internal steps:
 * 1. Welcome screen - WebStorm icon, title, Get Started button
 * 2. Quick start with import - Import from JetBrains/VSCode/Cursor
 * 3. Everything works out of the box - Features overview
 * 4. Customize your experience - Accordion settings
 */
function OnboardingStep1({ onComplete }) {
    // Current wizard step (1 = welcome, 2 = import, 3 = out of box, 4 = customize)
    const [wizardStep, setWizardStep] = useState(1);
    
    // Left stripe state
    const [leftStripeSelection, setLeftStripeSelection] = useState(null);
    
    // Right stripe state
    const [rightStripeSelection, setRightStripeSelection] = useState(null);
    
    // Bottom stripe items state
    const [bottomStripeSelection, setBottomStripeSelection] = useState(null);

    // Accordion state for step 4
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

    const handleGetStarted = () => {
        setWizardStep(2);
    };

    const handleSkip = () => {
        if (onComplete) onComplete();
    };

    const handleImportOption = (option) => {
        console.log('Import from:', option);
        // After import, go to step 3
        setWizardStep(3);
    };

    const handleStartFromScratch = () => {
        setWizardStep(3);
    };

    const handleContinue = () => {
        setWizardStep(4);
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

    // Render welcome content (step 1)
    const renderWelcomeContent = () => (
        <div className="wizard-welcome-content">
            {/* WebStorm Icon */}
            <div className="wizard-icon">
                <IdeIcon product="WebStorm" size="48" os="Windows" />
            </div>

            {/* Welcome Title */}
            <h1 className="wizard-title">Welcome to WebStorm</h1>

            {/* Subtitle */}
            <p className="wizard-subtitle">
                Powerful IDE for TypeScript and JavaScript
            </p>

            {/* Get Started Button */}
            <button 
                className="wizard-get-started-btn"
                onClick={handleGetStarted}
            >
                Get Started
            </button>

            {/* Skip Link */}
            <button 
                className="wizard-skip-link"
                onClick={handleSkip}
            >
                Skip onboarding
            </button>
        </div>
    );

    // Render import content (step 2)
    const renderImportContent = () => (
        <div className="wizard-import-content">
            {/* Title */}
            <h1 className="wizard-title">Quick start with import</h1>

            {/* Subtitle */}
            <p className="wizard-import-subtitle">
                Import theme, keymap, and recent<br />
                projects from an IDE or a code editor
            </p>

            {/* Import Buttons */}
            <div className="wizard-import-buttons">
                {/* JetBrains IDEs */}
                <button 
                    className="wizard-import-btn"
                    onClick={() => handleImportOption('jetbrains')}
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
                    className="wizard-import-btn"
                    onClick={() => handleImportOption('vscode')}
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
                    className="wizard-import-btn"
                    onClick={() => handleImportOption('cursor')}
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

            {/* Start from scratch Link */}
            <button 
                className="wizard-skip-link"
                onClick={handleStartFromScratch}
            >
                Start from scratch
            </button>
        </div>
    );

    // Render "Everything works out of the box" content (step 3)
    const renderOutOfBoxContent = () => (
        <div className="wizard-outofbox-content">
            {/* Feature Icons */}
            <div className="wizard-feature-icons">
                {/* ESLint */}
                <div className="wizard-feature-icon">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 6L7 8.5V11.5L10 14L13 11.5V8.5L10 6Z" fill="#9DA0A8"/>
                        <path d="M10 2L3 6V14L10 18L17 14V6L10 2ZM15 13L10 16L5 13V7L10 4L15 7V13Z" fill="#FFFFFF"/>
                    </svg>
                </div>
                {/* Prettier */}
                <div className="wizard-feature-icon">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="3.75" y="2.5" width="10" height="1.25" rx="0.625" fill="#548AF7"/>
                        <rect x="3.75" y="5" width="6.25" height="1.25" rx="0.625" fill="#548AF7"/>
                        <rect x="3.75" y="7.5" width="3.75" height="1.25" rx="0.625" fill="#A571E6"/>
                        <rect x="11.25" y="5" width="5" height="1.25" rx="0.625" fill="#A571E6"/>
                        <rect x="12.5" y="7.5" width="5" height="1.25" rx="0.625" fill="#D6AE58"/>
                        <rect x="11.25" y="10" width="5" height="1.25" rx="0.625" fill="#548AF7"/>
                        <rect x="3.75" y="10" width="3.75" height="1.25" rx="0.625" fill="#DB5C5C"/>
                        <rect x="8.75" y="10" width="1.25" height="1.25" rx="0.625" fill="#D6AE58"/>
                        <rect x="3.75" y="15" width="2.5" height="1.25" rx="0.625" fill="#548AF7"/>
                        <rect x="7.5" y="15" width="1.25" height="1.25" rx="0.625" fill="#A571E6"/>
                        <rect x="3.75" y="17.5" width="5" height="1.25" rx="0.625" fill="#DB5C5C"/>
                        <rect x="6.25" y="12.5" width="7.5" height="1.25" rx="0.625" fill="#D6AE58"/>
                        <rect x="3.75" y="12.5" width="1.25" height="1.25" rx="0.625" fill="#A571E6"/>
                    </svg>
                </div>
                {/* GitHub */}
                <div className="wizard-feature-icon">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M10 1.25C5.16 1.25 1.25 5.16 1.25 10C1.25 13.87 3.77 17.15 7.27 18.31C7.72 18.39 7.88 18.11 7.88 17.87C7.88 17.66 7.87 16.98 7.87 16.27C5.5 16.77 4.97 15.16 4.97 15.16C4.56 14.15 3.97 13.87 3.97 13.87C3.15 13.32 4.03 13.33 4.03 13.33C4.94 13.39 5.42 14.26 5.42 14.26C6.23 15.65 7.56 15.28 7.91 15.05C7.99 14.49 8.22 14.12 8.47 13.87C6.55 13.62 4.53 12.89 4.53 9.53C4.53 8.57 4.88 7.79 5.44 7.17C5.35 6.92 5.03 6.03 5.52 4.82C5.52 4.82 6.28 4.55 7.87 5.68C8.58 5.46 9.29 5.35 10 5.35C10.71 5.35 11.42 5.46 12.13 5.68C13.72 4.55 14.48 4.82 14.48 4.82C14.97 6.03 14.65 6.92 14.56 7.17C15.12 7.79 15.47 8.57 15.47 9.53C15.47 12.9 13.44 13.62 11.51 13.86C11.83 14.17 12.12 14.78 12.12 15.72C12.12 17.05 12.11 17.62 12.11 17.87C12.11 18.11 12.27 18.4 12.73 18.31C16.23 17.15 18.75 13.87 18.75 10C18.75 5.16 14.84 1.25 10 1.25Z" fill="#FFFFFE"/>
                    </svg>
                </div>
                {/* ABC/Spell Checker */}
                <div className="wizard-feature-icon">
                    <span className="feature-icon-text">ABC</span>
                </div>
            </div>

            {/* Title */}
            <h1 className="wizard-title">Everything works out of the box</h1>

            {/* Subtitle */}
            <p className="wizard-outofbox-subtitle">
                Prettier, ESLint, Spell Checker, Git support and many<br />
                more features are already built-in and ready to use
            </p>

            {/* Continue Button */}
            <button 
                className="wizard-get-started-btn"
                onClick={handleContinue}
            >
                Continue
            </button>
        </div>
    );

    // Clear selection for a section
    const clearSelection = (section, e) => {
        e.stopPropagation(); // Prevent accordion toggle
        setCustomizeSelections(prev => ({
            ...prev,
            [section]: null
        }));
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

    // Render "Customize your experience" content (step 4)
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

    // Render current step content
    const renderContent = () => {
        switch (wizardStep) {
            case 1:
                return renderWelcomeContent();
            case 2:
                return renderImportContent();
            case 3:
                return renderOutOfBoxContent();
            case 4:
                return renderCustomizeContent();
            default:
                return renderWelcomeContent();
        }
    };

    return (
        <div className="multistep-wizard">
            {/* Main Toolbar */}
            <div className="wizard-toolbar">
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
            <div className="wizard-content">
                {/* Left Stripe */}
                <div className="wizard-stripe wizard-stripe-left">
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
                <div className="wizard-center">
                    <div className="editor">
                        {/* Background gradient effects (only on welcome step) */}
                        {wizardStep === 1 && (
                            <div className="wizard-bg-effects">
                                <div className="wizard-bg-ellipse wizard-bg-ellipse-1"></div>
                                <div className="wizard-bg-ellipse wizard-bg-ellipse-2"></div>
                                <div className="wizard-bg-ellipse wizard-bg-ellipse-3"></div>
                            </div>
                        )}

                        {renderContent()}
                    </div>
                </div>

                {/* Right Stripe */}
                <div className="wizard-stripe wizard-stripe-right">
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

export default OnboardingStep1;
