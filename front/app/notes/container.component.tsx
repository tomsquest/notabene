import * as React from "react";
import List from "./list.component";
import Edit from "./edit.component";
import NotesApi from "../api/Notes";
import Note from "../api/note.model";

export default class NotesContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            notes: [],
            lastEditedNote: new Note()
        };
    }

    componentDidMount() {
        const api = new NotesApi();
        const notes = api.list();
        const lastEditedNote = api.lastEdited();
        this.setState({notes, lastEditedNote});
    }

    onSaveNote = (note: Note) => {
        const api = new NotesApi();
        api.update(note)
        const notes = api.list();
        const lastEditedNote = api.lastEdited();
        this.setState({notes, lastEditedNote});
    };

    render() {
        const {notes, lastEditedNote} = this.state;
        return (
            <div className="notes-container">
                <List notes={notes}/>
                <Edit note={lastEditedNote} onSubmit={this.onSaveNote}/>
            </div>
        )
    }
}