import "whatwg-fetch";
import * as React from "react";
import * as ReactDom from "react-dom";
import NotesContainer from "./notes/container.component";

class App extends React.Component {
    render() {
        return <div>
            <NotesContainer />
        </div>
    }
}

ReactDom.render(
    <App/>,
    document.getElementById("app")
);

console.log("NotaBene loaded");