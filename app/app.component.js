"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_module_1 = require("./app.module");
require("./app.component.css");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
exports.AppComponent = AppComponent;
app_module_1.appModule.component("appRoot", {
    controller: AppComponent,
    template: require("./app.component.html")
});
//# sourceMappingURL=app.component.js.map