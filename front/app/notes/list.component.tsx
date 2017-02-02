import * as React from "react";
import {Note} from "../api";

interface Props {
    notes: Note[],
    onNewNote(): void,
    onShowNote(id: string): void,
    onDeleteNote(id: string): void,
}

export default class List extends React.Component<Props> {

    onNewNote = () => {
        this.props.onNewNote()
    }

    onShowNote = (e: React.SyntheticEvent<HTMLDivElement>) => {
        this.props.onShowNote(e.currentTarget.getAttribute("id"));
    }

    onDeleteNote = (e: React.SyntheticEvent<HTMLDivElement>) => {
        this.props.onDeleteNote(e.currentTarget.getAttribute("id"))
    }

    render() {
        return (
            <div className="notes-list">
                <header className="notes-list__header">
                    <div className="notes-list__header-title">Notes</div>
                    <a className="notes-list__header-new-note" onClick={this.onNewNote}>+</a>
                </header>
                <div className="notes-list__content">
                    {this.props.notes.map((note) =>
                        <div className="notes-list__item" key={note.id}>
                            <a className="notes-list__item-title"
                               id={note.id}
                               onClick={this.onShowNote}>
                                {note.title}
                            </a>
                            <a className="notes-list__item-delete"
                               id={note.id}
                               onClick={this.onDeleteNote}>
                                X
                            </a>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}