"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOM = require("react-dom");
var react_router_dom_1 = require("react-router-dom");
//import 'bootstrap/dist/css/bootstrap.css';
var home_1 = require("./src/app/home");
var login_component_1 = require("./src/app/login/login.component");
var App = function () {
    return (React.createElement(react_router_dom_1.BrowserRouter, null,
        React.createElement(react_router_dom_1.Switch, null,
            React.createElement(react_router_dom_1.Route, { path: "/", component: home_1.default, exact: true }),
            React.createElement(react_router_dom_1.Route, { path: "/login", component: login_component_1.default, exact: true }),
            React.createElement(react_router_dom_1.Redirect, { to: "/" }))));
};
ReactDOM.render(React.createElement(App, null), document.getElementById('root'));
//# sourceMappingURL=app.js.map