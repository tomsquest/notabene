import * as React from "react";

export default class Edit extends React.Component {
    render() {
        return (
            <div className="notes-edit-container">
                <textarea className="notes-edit-textarea" placeholder="Edit this note"/>
                <footer className="notes-edit-footer">
                    Footer
                </footer>
            </div>
        )
    }
}