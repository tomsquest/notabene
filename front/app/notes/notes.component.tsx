import * as React from "react";

export class NotesComponent extends React.Component {
    render() {
        return (
            <div className="notes-container">
                <header className="notes-header">
                    <div className="notes-header-icon"></div>
                    <div className="notes-header-title">Notes</div>
                    <div className="notes-header-button"></div>
                </header>
                <div className="notes-content">
                    <div className="notes-item">Note 1</div>
                    <div className="notes-item">Note 2</div>
                    <div className="notes-item">Note 3</div>
                </div>
                {/*<footer className="notes-footer"></footer>*/}
            </div>
        )
    }
}