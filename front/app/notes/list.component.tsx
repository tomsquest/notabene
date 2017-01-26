import * as React from "react";
import Note from "../api/note.model";

interface Props {
    notes: Note[]
}

export default class List extends React.Component<Props> {
    render() {
        return (
            <div className="notes-list">
                <header className="notes-list__header">
                    <div className="notes-list__header-title">Notes</div>
                </header>
                <div className="notes-list__content">
                    {this.props.notes.map((note) =>
                        <div className="notes-list__item" key={note.id}>{note.title}</div>
                    )}
                </div>
            </div>
        )
    }
}