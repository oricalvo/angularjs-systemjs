import {appModule} from "./app.module";

require("./app.component.css");

export class AppComponent {
    constructor() {
    }
}

appModule.component("appRoot", {
    controller: AppComponent,
    template: require("./app.component.html")
});
