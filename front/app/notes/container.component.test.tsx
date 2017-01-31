import * as React from "react";
import * as ReactDom from "react-dom";
import Container from "./container.component";

test("render", () => {
    ReactDom.render(<Container />, document.createElement("div"))
})
