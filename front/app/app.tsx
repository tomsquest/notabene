import "whatwg-fetch";
import * as React from "react";
import * as ReactDom from "react-dom";
import NotesContainer from "./notes/container.component";

ReactDom.render(
    <NotesContainer />,
    document.getElementById("app"),
    () => console.log("App loaded")
);