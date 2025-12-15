import React from 'react';
import ToolbarIconButton from '../iconbutton/IconButton';
import ProjectSelector from '../projectselector/ProjectSelector';
import ToolbarDropdown from '../toolbardropdown/ToolbarDropdown';
import Icon from '../icon/Icon';
import './MainToolbar.css';

function MainToolbar({ 
    projectName = "intellij",
    projectIcon = "IJ",
    projectColor = "cobalt",
    branchName = "main",
    runConfig = "IDEA Community",
    className = "",
    ...props 
}) {
    return (
        <div className={`main-toolbar ${className}`} {...props}>
            {/* Left Group - Window Controls, Project, and VCS */}
            <div className="toolbar-left-group">
            {/* macOS Window Controls */}
            <div className="window-controls">
                <div className="window-control close"></div>
                <div className="window-control minimize"></div>
                <div className="window-control maximize"></div>
            </div>

            {/* Left Side - Project and VCS */}
            <div className="toolbar-left">
                    <ProjectSelector 
                        projectName={projectName}
                        projectIcon={projectIcon}
                        projectColor={projectColor}
                    />
                    
                    <ToolbarDropdown 
                        icon="vcs/branch" 
                        text={branchName} 
                        theme="dark" 
                    />
                </div>
            </div>

            {/* Right Side - Run Widget and Actions */}
            <div className="toolbar-right">
                <div className="run-widget">
                    <div className="run-config">
                        <Icon name="runConfigurations/application" size={16} />
                        <span className="config-name">{runConfig}</span>
                        <span className="dropdown-arrow">▼</span>
                    </div>
                    <ToolbarIconButton icon="run/run" tooltip="Run" shortcut="⌃R" />
                    <ToolbarIconButton icon="run/debug" tooltip="Debug" shortcut="⌃D" />
                    <ToolbarIconButton icon="run/stop" tooltip="Stop" disabled />
                </div>
                
                <div className="toolbar-actions">
                    <ToolbarIconButton icon="codeWithMe/cwmAccess" tooltip="Code With Me" />
                    <ToolbarIconButton icon="general/search" tooltip="Search Everywhere" shortcut="Double ⇧" />
                    <ToolbarIconButton icon="general/settings" tooltip="Settings" />
                </div>
            </div>
        </div>
    );
}

export default MainToolbar;
