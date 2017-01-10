import * as React from "react";
import {NoteComponent} from "./note.component";

export class ContentComponent extends React.Component {
    render() {
        return <div className="content">
            <ul>
                <li><NoteComponent text="Note 1"/></li>
                <li><NoteComponent text="Note 2"/></li>
                <li><NoteComponent text="Note 3"/></li>
            </ul>
        </div>
    }
}