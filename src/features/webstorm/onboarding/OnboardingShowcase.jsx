import { useState } from 'react';
import './OnboardingShowcase.css';

// Placeholder imports - will be replaced with actual variant components
import OnboardingStep1 from './variants/OnboardingStep1';
import OnboardingStep2 from './variants/OnboardingStep2';
import OnboardingStep3 from './variants/OnboardingStep3';
import OnboardingStep1C from './variants/OnboardingStep1C';
import WelcomeScreenA from './variants/WelcomeScreenA';
import WelcomeScreenB from './variants/WelcomeScreenB';

// Onboarding option names
const ONBOARDING_OPTIONS = {
    1: 'Multistep Wizard',
    2: 'Single Page',
    3: 'Minimal',
    4: 'Import or Customize'
};

// Welcome screen option names
const WELCOME_OPTIONS = {
    'A': 'Option 1',
    'B': 'Option 2'
};

/**
 * OnboardingShowcase - Demo page to preview different onboarding flow combinations
 * 
 * Allows switching between:
 * - 3 Onboarding screen variants
 * - 2 Welcome Screen variants
 * 
 * Total: 6 possible user flow combinations
 */
function OnboardingShowcase() {
    // Toggle state
    const [onboardingOption, setOnboardingOption] = useState(1);
    const [welcomeOption, setWelcomeOption] = useState('A');
    
    // Current step in the flow preview
    const [currentStep, setCurrentStep] = useState('onboarding'); // 'onboarding' or 'welcome'

    // Handler for when onboarding is complete - transition to welcome screen
    const handleOnboardingComplete = () => {
        setCurrentStep('welcome');
    };

    // Render the appropriate onboarding variant
    const renderOnboardingStep = () => {
        switch (onboardingOption) {
            case 1:
                return <OnboardingStep1 onComplete={handleOnboardingComplete} />;
            case 2:
                return <OnboardingStep2 onComplete={handleOnboardingComplete} />;
            case 3:
                return <OnboardingStep3 onComplete={handleOnboardingComplete} />;
            case 4:
                return <OnboardingStep1C onComplete={handleOnboardingComplete} />;
            default:
                return <OnboardingStep1 onComplete={handleOnboardingComplete} />;
        }
    };

    // Render the appropriate welcome screen variant
    const renderWelcomeScreen = () => {
        switch (welcomeOption) {
            case 'A':
                return <WelcomeScreenA />;
            case 'B':
                return <WelcomeScreenB />;
            default:
                return <WelcomeScreenA />;
        }
    };

    return (
        <div className="onboarding-showcase">
            {/* Toggle Controls Panel */}
            <div className="showcase-controls">
                <div className="controls-header">
                    <h2>WebStorm Onboarding Preview</h2>
                    <p className="controls-subtitle">
                        Select variants to preview different user flows
                    </p>
                </div>

                <div className="toggle-groups">
                    {/* Onboarding Toggle */}
                    <div className="toggle-group">
                        <label className="toggle-label">Onboarding</label>
                        <div className="toggle-buttons">
                            {[1, 2, 3, 4].map((option) => (
                                <button
                                    key={option}
                                    className={`toggle-button ${onboardingOption === option ? 'toggle-button-active' : ''}`}
                                    onClick={() => setOnboardingOption(option)}
                                >
                                    {ONBOARDING_OPTIONS[option]}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Welcome Screen Toggle */}
                    <div className="toggle-group">
                        <label className="toggle-label">Welcome Screen</label>
                        <div className="toggle-buttons">
                            {['A', 'B'].map((option) => (
                                <button
                                    key={option}
                                    className={`toggle-button ${welcomeOption === option ? 'toggle-button-active' : ''}`}
                                    onClick={() => setWelcomeOption(option)}
                                >
                                    {WELCOME_OPTIONS[option]}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Step Navigation */}
                <div className="step-navigation">
                    <div className="step-indicators">
                        <button
                            className={`step-indicator ${currentStep === 'onboarding' ? 'step-indicator-active' : ''}`}
                            onClick={() => setCurrentStep('onboarding')}
                        >
                            <span className="step-number">1</span>
                            <span className="step-name">Onboarding</span>
                        </button>
                        <div className="step-arrow">→</div>
                        <button
                            className={`step-indicator ${currentStep === 'welcome' ? 'step-indicator-active' : ''}`}
                            onClick={() => setCurrentStep('welcome')}
                        >
                            <span className="step-number">2</span>
                            <span className="step-name">Welcome Screen</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Preview Area */}
            <div className="showcase-preview">
                <div className="preview-container">
                    {currentStep === 'onboarding' ? renderOnboardingStep() : renderWelcomeScreen()}
                </div>
            </div>
        </div>
    );
}

export default OnboardingShowcase;
