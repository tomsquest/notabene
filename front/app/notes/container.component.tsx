import * as React from "react";
import List from "./list.component";
import Edit from "./edit.component";
import NotesApi from "../api/notes";
import Note from "../api/note.model";

export default class NotesContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            notes: [],
            lastEditedNote: new Note({})
        };
    }

    componentDidMount() {
        const api = new NotesApi();
        const notes = api.list();
        const lastEditedNote = api.lastEdited();
        this.setState({notes, lastEditedNote});
    }

    onNewNote = () => {
        this.setState({lastEditedNote: new Note({title: "New note", text: "Some text"})})
    }

    onNoteClick = (id: string) => {
        const api = new NotesApi();
        const note = api.list().find(note => note.id == id);
        if (note) {
            this.setState({lastEditedNote: note})
        }
    }

    onDeleteNote = (id: string) => {
        const api = new NotesApi()
        api.delete(id)
        this.setState({notes: api.list()})
    }

    onSaveNote = (note: Note) => {
        const api = new NotesApi();
        if (note.id)
            api.update(note)
        else
            api.create(note)

        const notes = api.list();
        const lastEditedNote = api.lastEdited();
        this.setState({notes, lastEditedNote});
    };

    render() {
        const {notes, lastEditedNote} = this.state;
        return (
            <div className="notes-container">
                <List notes={notes}
                      onNoteClick={this.onNoteClick}
                      onNewNote={this.onNewNote}
                      onDeleteNote={this.onDeleteNote}
                />
                <Edit note={lastEditedNote} onSubmit={this.onSaveNote}/>
            </div>
        )
    }
}