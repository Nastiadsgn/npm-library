import { useState } from 'react';
import Popup from '../popup/Popup';
import Icon from '../icon/Icon';
import './ProjectSelector.css';

function ProjectSelector(props) {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
        if (props.onClick) {
            props.onClick();
        }
    };

    const handleProjectSelect = (project) => {
        setIsOpen(false);
        if (props.onProjectSelect) {
            props.onProjectSelect(project);
        }
    };

    let classes = ['project-selector'];
    if (props.state === 'hovered' || isOpen) {
        classes.push('project-selector-hovered');
    }
    if (props.state === 'pressed') {
        classes.push('project-selector-pressed');
    }

    return (
        <div className="project-selector-container">
            <button className={classes.join(' ')} onClick={handleClick}>
                <div className="project-selector-content">
                    <div className={`project-icon ${props.projectColor ? `project-icon-${props.projectColor}` : ''}`}>
                        <div className="project-icon-background">
                            <span className="project-icon-text">
                                {props.projectIcon || 'IJ'}
                            </span>
                        </div>
                    </div>
                    <div className="project-text-dropdown">
                        <span className="project-text">
                            {props.projectName || 'Project Name'}
                        </span>
                        <div className="chevron-down">
                            <Icon name="general/chevronDown" size={16} />
                        </div>
                    </div>
                </div>
            </button>
            
            {isOpen && props.projects && (
                <Popup 
                    visible={isOpen}
                    style={{
                        position: 'absolute',
                        top: '100%',
                        left: 0,
                        right: 0,
                        marginTop: '4px',
                        minWidth: '300px',
                        zIndex: 1000
                    }}
                >
                    {props.projects.map((project, index) => (
                        <Popup.Cell 
                            key={index}
                            type="multiline"
                            icon={
                                <div className={`project-icon ${project.color ? `project-icon-${project.color}` : ''}`}>
                                    <div className="project-icon-background">
                                        <span className="project-icon-text">
                                            {project.icon || project.name?.substring(0, 2).toUpperCase()}
                                        </span>
                                    </div>
                                </div>
                            }
                            hint={project.path || `~/${project.name?.toLowerCase().replace(/\s+/g, '-')}`}
                            onClick={() => handleProjectSelect(project)}
                        >
                            {project.displayName || project.name}
                        </Popup.Cell>
                    ))}
                </Popup>
            )}
        </div>
    );
}

export default ProjectSelector;