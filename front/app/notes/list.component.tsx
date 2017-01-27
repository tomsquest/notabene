import * as React from "react";
import Note from "../api/note.model";

interface Props {
    notes: Note[],
    onNoteClick(id: string): void
}

export default class List extends React.Component<Props> {

    onNoteClick = (e: React.SyntheticEvent<HTMLDivElement>) => {
        this.props.onNoteClick(e.currentTarget.getAttribute("id"));
    }

    onAddNote = () => {
        console.log("Add note");
    }

    render() {
        return (
            <div className="notes-list">
                <header className="notes-list__header">
                    <div className="notes-list__header-title">Notes</div>
                    <a className="notes-list__header-add-note" onClick={this.onAddNote}>+</a>
                </header>
                <div className="notes-list__content">
                    {this.props.notes.map((note) =>
                        <div className="notes-list__item"
                             key={note.id} id={note.id}
                             onClick={this.onNoteClick}>
                            {note.title}
                        </div>
                    )}
                </div>
            </div>
        )
    }
}