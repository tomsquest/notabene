import * as React from "react";

export class NotesComponent extends React.Component {
    render() {
        return (
            <div className="notes-container">
                <header className="notes-header">
                    <div className="notes-header-icon">Icon</div>
                    <div className="notes-header-title">Title</div>
                    <div className="notes-header-button">Search Button</div>
                </header>
                <div className="notes-content">
                    <div className="notes-item">Item 1</div>
                    <div className="notes-item">Item 2</div>
                    <div className="notes-item">Item 3</div>
                </div>
                <footer className="notes-footer">
                    Footer
                </footer>
            </div>
        )
    }
}