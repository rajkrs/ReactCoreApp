"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
var Home = /** @class */ (function (_super) {
    __extends(Home, _super);
    function Home() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Home.prototype.render = function () {
        return (React.createElement("div", { class: "bigblue" },
            React.createElement("h2", null, "Wlcome Home!"),
            React.createElement("p", null, "Get all basic info about app here."),
            React.createElement(react_router_dom_1.Link, { to: "/login" }, "Click here to Login")));
    };
    return Home;
}(React.Component));
exports.default = Home;
//# sourceMappingURL=home.js.map