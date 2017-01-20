import * as React from "react";

export default class Edit extends React.Component {
    render() {
        return (
            <form className="notes-edit-container">
                <textarea className="notes-edit-textarea" placeholder="Edit this note"/>
                <footer className="notes-edit-footer">
                    <span className="notes-edit-footer-lastsaved">last saved 10 min ago</span>
                    <input type="submit" className="notes-edit-footer-save" value="Save"/>
                </footer>
            </form>
        )
    }
}