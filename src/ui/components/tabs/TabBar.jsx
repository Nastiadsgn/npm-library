import { useState } from 'react';
import Tab from './Tab';
import './TabBar.css';

function TabBar(props) {
    const [activeTab, setActiveTab] = useState(0);
    const [tabs, setTabs] = useState(props.tabs || []);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    const handleTabClose = (index) => {
        const newTabs = tabs.filter((_, i) => i !== index);
        setTabs(newTabs);

        // When closing the active tab, switching to the previous one
        if (index === activeTab && activeTab > 0) {
            setActiveTab(activeTab - 1);
        } else if (index < activeTab) {
            setActiveTab(activeTab - 1);
        }
    };

    let classes = ['tab-bar'];
    if (props.direction === 'vertical') {
        classes.push('tab-bar-vertical');
    } else {
        classes.push('tab-bar-horizontal');
        if (props.wrap) {
            classes.push('tab-bar-wrap');
        }
    }
    if (props.size === 'small') {
        classes.push('tab-bar-small');
    }

    return (
        <div className={classes.join(' ')}>
            {tabs.map((tab, index) => (
                <Tab
                    key={index}
                    label={tab.label}
                    icon={tab.icon}
                    active={index === activeTab}
                    closable={tab.closable}
                    size={props.size}
                    onClick={() => handleTabClick(index)}
                    onClose={() => handleTabClose(index)}
                />
            ))}
        </div>
    );
}

export default TabBar;
