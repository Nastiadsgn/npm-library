import MainToolbar from './MainToolbar';
import ToolbarIconButton from '../iconbutton/IconButton';
import './ToolbarDemo.css';

const actionGroups = [
    {
        title: 'Navigation',
        description: 'Quick contextual navigation actions commonly placed near the toolbar title.',
        actions: [
            { label: 'Back', icon: 'general/left', shortcut: '⌘[' },
            { label: 'Forward', icon: 'general/right', shortcut: '⌘]' },
            { label: 'Search Everywhere', icon: 'general/search', shortcut: 'Double ⇧' }
        ]
    },
    {
        title: 'Version Control',
        description: 'Git operations surfaced directly on the main toolbar.',
        actions: [
            { label: 'Commit', icon: 'vcs/commit', shortcut: '⌘K' },
            { label: 'Update Project', icon: 'vcs/update', shortcut: '⌘T' },
            { label: 'Push', icon: 'vcs/push', shortcut: '⌘⇧K' }
        ]
    },
    {
        title: 'Build & Run',
        description: 'Typical build pipeline controls with dedicated glyphs.',
        actions: [
            { label: 'Build', icon: 'build/build', shortcut: '⌘B' },
            { label: 'Run', icon: 'run/run', shortcut: '⌃R' },
            { label: 'Debug', icon: 'run/debug', shortcut: '⌃D' }
        ]
    }
];

function ToolbarDemo() {
    return (
        <div className="component-showcase toolbar-demo-page">
            <h1>Toolbar</h1>
            <p className="toolbar-demo-description">
                A simplified IntelliJ-style main toolbar built from layout primitives and the Toolbar Icon Button component.
                Use it to preview icons, spacing, and widget composition in a realistic header scenario.
            </p>

            <div className="toolbar-demo-preview">
                <MainToolbar
                    projectName="int-ui-web-components"
                    branchName="feature/toolbar-demo"
                    runConfig="npm start"
                />
            </div>

            <div className="toolbar-demo-meta">
                <div>
                    <h3>Structure</h3>
                    <p>
                        The preview stitches together window controls, project/VCS widgets, and run actions using
                        the <code>{'<ToolbarIconButton />'}</code> component.
                    </p>
                </div>
                <div>
                    <h3>Testing Tips</h3>
                    <p>
                        Toggle the app theme to verify the toolbar respects background tokens and that icons remain legible in both modes.
                    </p>
                </div>
            </div>

            <div className="toolbar-demo-grid">
                {actionGroups.map((group) => (
                    <section key={group.title} className="toolbar-demo-section">
                        <header>
                            <h2>{group.title}</h2>
                            <p>{group.description}</p>
                        </header>
                        <div className="toolbar-action-list">
                            {group.actions.map((action) => (
                                <div key={action.label} className="toolbar-action-card">
                                    <ToolbarIconButton 
                                        icon={action.icon} 
                                        tooltip={action.label}
                                        shortcut={action.shortcut}
                                    />
                                    <div className="toolbar-action-details">
                                        <span className="toolbar-action-label">{action.label}</span>
                                        {action.shortcut && (
                                            <span className="toolbar-action-shortcut">{action.shortcut}</span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
}

export default ToolbarDemo;
