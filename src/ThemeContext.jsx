import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    // Light theme commented out - only dark theme is active
    const [themeMode] = useState('dark'); // 'dark' only (light theme commented out)
    const [actualTheme, setActualTheme] = useState('dark');

    // Function to get system theme (commented out - light theme disabled)
    // const getSystemTheme = () => {
    //     return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    // };

    // Update actual theme based on mode
    useEffect(() => {
        // Light theme commented out - always use dark
        setActualTheme('dark');
        
        // Original theme switching logic (commented out):
        // if (themeMode === 'auto') {
        //     setActualTheme(getSystemTheme());
        //     
        //     // Listen for system theme changes
        //     const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        //     const handleChange = (e) => {
        //         if (themeMode === 'auto') {
        //             setActualTheme(e.matches ? 'dark' : 'light');
        //         }
        //     };
        //     
        //     mediaQuery.addEventListener('change', handleChange);
        //     return () => mediaQuery.removeEventListener('change', handleChange);
        // } else {
        //     setActualTheme(themeMode);
        // }
    }, [themeMode]);

    const cycleTheme = () => {
        // Light theme commented out - theme switching disabled
        // setThemeMode(current => {
        //     switch (current) {
        //         case 'light': return 'dark';
        //         case 'dark': return 'auto';
        //         case 'auto': return 'light';
        //         default: return 'light';
        //     }
        // });
    };

    return (
        <ThemeContext.Provider value={{ 
            theme: actualTheme, 
            themeMode, 
            toggleTheme: cycleTheme 
        }}>
            <div className={`theme-${actualTheme}`}>
                {children}
            </div>
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}
