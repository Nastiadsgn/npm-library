import React from 'react';
import './IDELayout.css';

/**
 * IDELayoutComposable - A flexible, composable IDE layout for prototyping
 * 
 * This component provides slots for customizing every part of the IDE interface:
 * - Toolbar (top)
 * - Left stripe (vertical toolbar)
 * - Right stripe (vertical toolbar)  
 * - Tool windows (left, right, bottom)
 * - Editor area (center)
 * - Status bar (bottom)
 * 
 * @example Basic usage with default layout
 * ```jsx
 * <IDELayoutComposable>
 *   <div>Your custom editor content</div>
 * </IDELayoutComposable>
 * ```
 * 
 * @example Advanced usage with custom sections
 * ```jsx
 * <IDELayoutComposable
 *   toolbar={<CustomToolbar />}
 *   leftStripe={<CustomLeftStripe />}
 *   leftPanel={<CustomProjectPanel />}
 *   rightPanel={<CustomAIPanel />}
 *   statusBar={<CustomStatusBar />}
 * >
 *   <MyCustomEditor />
 * </IDELayoutComposable>
 * ```
 */
function IDELayoutComposable({
    // Theme
    theme = 'default', // 'default' or 'island'
    className = '',
    
    // Customizable slots
    toolbar = null,
    leftStripe = null,
    rightStripe = null,
    leftPanel = null,
    rightPanel = null,
    bottomPanel = null,
    statusBar = null,
    
    // Content (editor area)
    children,
    
    // Layout control
    showLeftPanel = true,
    showRightPanel = false,
    showBottomPanel = false,
    
    // Layout callbacks
    onLeftPanelToggle,
    onRightPanelToggle,
    onBottomPanelToggle,
    
    ...props
}) {
    const themeClass = theme === 'island' ? 'ide-layout-island' : 'ide-layout-default';

    return (
        <div className={`ide-layout ${themeClass} ${className}`} {...props}>
            {/* Toolbar - fully customizable */}
            {toolbar && (
                <div className="ide-layout-toolbar">
                    {toolbar}
                </div>
            )}
            
            {/* Main Content Area */}
            <div className="ide-layout-content">
                {/* Left Stripe - fully customizable */}
                {leftStripe && (
                    <div className="ide-layout-stripe ide-layout-stripe-left">
                        {leftStripe}
                    </div>
                )}

                {/* Center Content Area */}
                <div className="ide-layout-center">
                    {/* Top Row: Tool Windows and Editor */}
                    <div className="ide-layout-top-row">
                        {/* Left Tool Window - customizable */}
                        {showLeftPanel && leftPanel && (
                            <div className="ide-layout-tool-window ide-layout-tool-window-left">
                                {leftPanel}
                            </div>
                        )}

                        {/* Editor Area - main content */}
                        <div className="ide-layout-editor-area">
                            {children}
                        </div>

                        {/* Right Tool Window - customizable */}
                        {showRightPanel && rightPanel && (
                            <div className="ide-layout-tool-window ide-layout-tool-window-right">
                                {rightPanel}
                            </div>
                        )}
                    </div>

                    {/* Bottom Tool Window - customizable */}
                    {showBottomPanel && bottomPanel && (
                        <div className="ide-layout-tool-window ide-layout-tool-window-bottom">
                            {bottomPanel}
                        </div>
                    )}
                </div>

                {/* Right Stripe - fully customizable */}
                {rightStripe && (
                    <div className="ide-layout-stripe ide-layout-stripe-right">
                        {rightStripe}
                    </div>
                )}
            </div>

            {/* Status Bar - fully customizable */}
            {statusBar && (
                <div className="ide-layout-status-bar">
                    {statusBar}
                </div>
            )}
        </div>
    );
}

// Named slot components for better composition
IDELayoutComposable.Toolbar = ({ children, ...props }) => <div {...props}>{children}</div>;
IDELayoutComposable.LeftStripe = ({ children, ...props }) => <div {...props}>{children}</div>;
IDELayoutComposable.RightStripe = ({ children, ...props }) => <div {...props}>{children}</div>;
IDELayoutComposable.LeftPanel = ({ children, ...props }) => <div {...props}>{children}</div>;
IDELayoutComposable.RightPanel = ({ children, ...props }) => <div {...props}>{children}</div>;
IDELayoutComposable.BottomPanel = ({ children, ...props }) => <div {...props}>{children}</div>;
IDELayoutComposable.EditorArea = ({ children, ...props }) => <div {...props}>{children}</div>;
IDELayoutComposable.StatusBar = ({ children, ...props }) => <div {...props}>{children}</div>;

export default IDELayoutComposable;

