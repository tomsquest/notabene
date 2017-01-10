import * as React from "react";
import * as ReactDom from "react-dom";
import {NotesComponent} from "./notes/notes.component";

class App extends React.Component {
    render() {
        return <div>
            <NotesComponent />
        </div>
    }
}

ReactDom.render(
    <App/>,
    document.getElementById("app")
);

console.log('NotaBene loaded');