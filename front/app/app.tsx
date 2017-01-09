import * as React from "react";
import * as ReactDom from "react-dom";
import {Hello} from "./hello/Hello";

ReactDom.render(
    <Hello compiler="TypeScript" framework="React"/>,
    document.getElementById("app")
);

console.log('React loaded');