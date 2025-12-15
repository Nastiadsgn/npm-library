import { IDEApp } from './templates';
import './ui/styles/Themes.css';
import './App.css';

function App() {
    return (
        <IDEApp 
            theme="island"
            projectName="my-project"
            projectIcon="MP"
            projectColor="cobalt"
            branchName="main"
            runConfig="Development"
        />
    );
}

export default App;
