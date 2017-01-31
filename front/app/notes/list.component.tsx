import * as React from "react";
import Note from "../api/note.model";

interface Props {
    notes: Note[],
    onNoteClick(id: string): void,
    onNewNote(): void,
}

export default class List extends React.Component<Props> {

    onNoteClick = (e: React.SyntheticEvent<HTMLDivElement>) => {
        this.props.onNoteClick(e.currentTarget.getAttribute("id"));
    }

    onNewNote = () => {
        this.props.onNewNote()
    }

    render() {
        return (
            <div className="notes-list">
                <header className="notes-list__header">
                    <div className="notes-list__header-title">Notes</div>
                    <a className="notes-list__header-add-note" onClick={this.onNewNote}>+</a>
                </header>
                <div className="notes-list__content">
                    {this.props.notes.map((note) =>
                        <div className="notes-list__item" key={note.id}>
                            <a className="notes-list__item-title"
                               id={note.id}
                               onClick={this.onNoteClick}>
                                {note.title}
                            </a>
                            <a className="notes-list__item-delete"
                               id={note.id}>
                                X
                            </a>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}