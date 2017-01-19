import * as React from "react";
import List from "./list.component";
import Edit from "./edit.component";

export default class NotesContainer extends React.Component {
    render() {
        return (
            <div>
                <List/>
                <Edit />
            </div>
        )
    }
}