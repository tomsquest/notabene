import * as React from "react";

export default class Edit extends React.Component {
    render() {
        return (
            <form className="notes-edit">
                <textarea className="notes-edit__textarea" placeholder="Edit this note"/>
                <footer className="notes-edit__footer">
                    <span className="notes-edit__footer__lastsaved">last saved 10 min ago</span>
                    <input className="notes-edit__footer__save" type="submit" value="Save"/>
                </footer>
            </form>
        )
    }
}