import * as React from "react";
import {HeaderComponent} from "./header.component";
import {ContentComponent} from "./content.component";

export class NotesComponent extends React.Component {
    render() {
        return <div className="notes">
            <HeaderComponent />
            <ContentComponent />
        </div>
    }
}