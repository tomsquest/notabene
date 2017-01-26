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

    render() {
        return (
            <div className="notes-list">
                <header className="notes-list__header">
                    <div className="notes-list__header-title">Notes</div>
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