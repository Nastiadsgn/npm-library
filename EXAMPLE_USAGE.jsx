/**
 * Example: Using IDEApp from jetbrainswebtest
 * 
 * This file shows how library users can quickly create an IDE-like application
 * using the IDEApp template.
 */

// ============================================
// EXAMPLE 1: Minimal Setup
// ============================================

import { IDEApp } from 'jetbrainswebtest';
import 'jetbrainswebtest/dist/styles.css';

// Add these styles to your index.css or App.css:
// 
// * { box-sizing: border-box; }
// html, body, #root {
//   margin: 0;
//   padding: 0;
//   width: 100%;
//   height: 100%;
//   overflow: hidden;
// }
// .ide-app .ide-layout {
//   width: 100%;
//   height: 100%;
//   min-height: 100vh;
//   border-radius: 0;
//   border: none;
// }
// .ide-app .ide-layout-island,
// .ide-app .ide-layout-default {
//   border-radius: 0;
// }
// .ide-app .main-toolbar {
//   border-radius: 0;
// }

export function MinimalExample() {
    return <IDEApp />;
}


// ============================================
// EXAMPLE 2: Customized IDE App
// ============================================

export function CustomizedExample() {
    return (
        <IDEApp 
            theme="island"           // or "default" for classic look
            projectName="my-awesome-app"
            projectIcon="MA"         // Two-letter abbreviation
            projectColor="grass"     // cobalt, grass, amber, violet, teal, plum, ocean
            branchName="feature/new-ui"
            runConfig="Dev Server"
        />
    );
}


// ============================================
// EXAMPLE 3: Default Theme (Classic Look)
// ============================================

export function ClassicThemeExample() {
    return (
        <IDEApp 
            theme="default"
            projectName="spring-boot-app"
            projectIcon="SB"
            projectColor="grass"
            branchName="main"
            runConfig="SpringBootApplication"
        />
    );
}


// ============================================
// EXAMPLE 4: Using Individual Components
// ============================================

import { 
    IDELayout, 
    ThemeProvider, 
    Button, 
    Dialog,
    ToolWindow,
    Tree 
} from 'jetbrainswebtest';

export function IndividualComponentsExample() {
    return (
        <ThemeProvider>
            <div style={{ width: '100vw', height: '100vh' }}>
                <IDELayout 
                    theme="island"
                    projectName="custom-project"
                    projectIcon="CP"
                    projectColor="violet"
                />
            </div>
        </ThemeProvider>
    );
}


// ============================================
// COMPLETE APP EXAMPLE (index.js / main.jsx)
// ============================================

/*
// index.js or main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { IDEApp } from 'jetbrainswebtest';
import 'jetbrainswebtest/dist/styles.css';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <IDEApp 
      projectName="my-project"
      projectColor="cobalt"
    />
  </React.StrictMode>
);
*/


// ============================================
// Available Project Colors
// ============================================

/*
Project Color Options:
- "cobalt"  - Blue
- "grass"   - Green  
- "amber"   - Orange/Yellow
- "violet"  - Purple
- "teal"    - Teal/Cyan
- "plum"    - Pink/Magenta
- "ocean"   - Light Blue
*/
