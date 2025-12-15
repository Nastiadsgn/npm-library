import { useState, useRef, useEffect } from 'react';
import './CodeExample.css';

// TODO: Investigate other libraries with ready-to-use code editors (CodeMirror, Monaco Editor, Prism)
function CodeExample({ 
    code: initialCode = '',
    placeholder = 'Enter your code here...',
    showLineNumbers = true,
    resizable = false,
    language = 'javascript',
    className = '',
    ...props 
}) {
    const [code, setCode] = useState(initialCode);
    const [currentLine, setCurrentLine] = useState(1);
    const [isFocused, setIsFocused] = useState(false);
    const textareaRef = useRef(null);
    const lineNumbersRef = useRef(null);

    const handleChange = (event) => {
        setCode(event.target.value);
        updateCurrentLine();
    };

    const updateCurrentLine = () => {
        if (textareaRef.current) {
            const textarea = textareaRef.current;
            const cursorPosition = textarea.selectionStart;
            const textBeforeCursor = textarea.value.substring(0, cursorPosition);
            const lineNumber = textBeforeCursor.split('\n').length;
            setCurrentLine(lineNumber);
        }
    };

    useEffect(() => {
        const textarea = textareaRef.current;
        
        const handleScroll = () => {
            if (lineNumbersRef.current && textareaRef.current) {
                lineNumbersRef.current.scrollTop = textareaRef.current.scrollTop;
            }
        };

        const handleSelectionChange = () => {
            updateCurrentLine();
        };

        const handleFocus = () => {
            setIsFocused(true);
            updateCurrentLine();
        };

        const handleBlur = () => {
            setIsFocused(false);
        };
        
        if (textarea) {
            textarea.addEventListener('scroll', handleScroll);
            textarea.addEventListener('click', handleSelectionChange);
            textarea.addEventListener('keyup', handleSelectionChange);
            textarea.addEventListener('focus', handleFocus);
            textarea.addEventListener('blur', handleBlur);
            
            return () => {
                textarea.removeEventListener('scroll', handleScroll);
                textarea.removeEventListener('click', handleSelectionChange);
                textarea.removeEventListener('keyup', handleSelectionChange);
                textarea.removeEventListener('focus', handleFocus);
                textarea.removeEventListener('blur', handleBlur);
            };
        }
    }, []);

    const getLineNumbers = () => {
        const lines = code.split('\n').length;
        return Array.from({ length: lines }, (_, i) => i + 1);
    };

    const getCurrentLineHighlight = () => {
        if (!textareaRef.current) return { top: 0, height: 0 };
        
        const textarea = textareaRef.current;
        const lineHeight = parseInt(window.getComputedStyle(textarea).lineHeight);
        const paddingTop = parseInt(window.getComputedStyle(textarea).paddingTop);
        
        const top = paddingTop + (currentLine - 1) * lineHeight - textarea.scrollTop;
        
        return {
            top: `${top}px`,
            height: `${lineHeight}px`
        };
    };



    return (
        <div className={`code-example ${className} ${showLineNumbers ? 'with-line-numbers' : ''} ${resizable ? 'resizable' : ''}`} {...props}>
            {showLineNumbers && (
                <div className="line-numbers" ref={lineNumbersRef}>
                    {getLineNumbers().map(lineNum => (
                        <div 
                            key={lineNum} 
                            className={`line-number ${isFocused && lineNum === currentLine ? 'current' : ''}`}
                        >
                            {lineNum}
                        </div>
                    ))}
                </div>
            )}
            <div className="code-input-container">
                {isFocused && (
                    <div 
                        className="current-line-highlight"
                        style={getCurrentLineHighlight()}
                    />
                )}
                <textarea
                    ref={textareaRef}
                    className="code-input"
                    value={code}
                    onChange={handleChange}
                    placeholder={placeholder}
                    spellCheck={false}
                />
            </div>
        </div>
    );
}

export default CodeExample;