import {Bar} from "./foo/bar";

class App {

    constructor() {
        const app = document.getElementById("app");
        console.log('App loaded', app);

        const bar = new Bar();
        console.log('Bar ?', bar.do())
    }
}

export = new App

