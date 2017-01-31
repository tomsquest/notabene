import * as React from "react";
import List from "./list.component";
import Edit from "./edit.component";
import {Note, Notes} from "../api";

export default class NotesContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            notes: [],
            lastEditedNote: new Note({})
        };
    }

    componentDidMount() {
        this.setState({
            notes: Notes.list(),
            lastEditedNote: Notes.lastEdited()
        });
    }

    onNewNote = () => {
        this.setState({
            lastEditedNote: new Note({title: "New note", text: "Some text"})
        })
    }

    onShowNote = (id: string) => {
        const clickedNote = Notes.list().find(note => note.id == id);
        if (clickedNote) {
            this.setState({lastEditedNote: clickedNote})
        }
    }

    onDeleteNote = (id: string) => {
        Notes.destroy(id)
        this.setState({
            notes: Notes.list(),
            lastEditedNote: Notes.lastEdited()
        })
    }

    onSaveNote = (note: Note) => {
        if (note.id)
            Notes.update(note)
        else
            Notes.create(note)

        const notes = Notes.list();
        const lastEditedNote = Notes.lastEdited();
        this.setState({notes, lastEditedNote});
    };

    render() {
        const {notes, lastEditedNote} = this.state;
        return (
            <div className="notes-container">
                <List notes={notes}
                      onShowNote={this.onShowNote}
                      onNewNote={this.onNewNote}
                      onDeleteNote={this.onDeleteNote}
                />
                <Edit note={lastEditedNote} onSubmit={this.onSaveNote}/>
            </div>
        )
    }
}