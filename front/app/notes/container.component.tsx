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
        }
    }

    componentDidMount() {
        const notes = new NotesApi().list();
        this.setState({notes});
    }

    render() {
        return (
            <div className="notes-container">
                <List notes={this.state.notes}/>
                <Edit />
            </div>
        )
    }
}