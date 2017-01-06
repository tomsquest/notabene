class App {
    constructor() {
        const app = document.getElementById("app");
        console.log('App loaded', app);
        app.innerText = "Loaded !"
    }
}

export = new App

