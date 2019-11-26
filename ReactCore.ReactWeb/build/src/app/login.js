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
var availity_reactstrap_validation_1 = require("availity-reactstrap-validation");
var reactstrap_1 = require("reactstrap");
var Login = /** @class */ (function (_super) {
    __extends(Login, _super);
    function Login(props) {
        var _this = _super.call(this, props) || this;
        _this.userIsRequired = false;
        _this.userIsRequired = true;
        return _this;
    }
    Login.prototype.render = function () {
        return (React.createElement("div", { class: "container h-100" },
            React.createElement("div", { class: "row h-100 justify-content-center align-items-center" },
                React.createElement("div", { class: "col-4" },
                    React.createElement("h2", null, "Sign In"),
                    React.createElement(availity_reactstrap_validation_1.AvForm, null,
                        React.createElement(availity_reactstrap_validation_1.AvField, { name: "userName", label: "Username", type: "text", errorMessage: "Invalid Username", validate: {
                                required: { value: this.userIsRequired },
                                pattern: { value: '^[A-Za-z0-9]+$' },
                                minLength: { value: 6 },
                                maxLength: { value: 16 }
                            } }),
                        React.createElement(availity_reactstrap_validation_1.AvField, { name: "password", label: "Password", type: "password", validate: {
                                required: { value: true, errorMessage: 'Please enter password' },
                                pattern: { value: '^[A-Za-z0-9]+$', errorMessage: 'Your name must be composed only with letter and numbers' },
                                minLength: { value: 6, errorMessage: 'Your name must be between 6 and 16 characters' },
                                maxLength: { value: 16, errorMessage: 'Your name must be between 6 and 16 characters' }
                            } }),
                        React.createElement(reactstrap_1.Button, { color: "primary" }, "Login")),
                    React.createElement(react_router_dom_1.Link, { to: "/home" }, "Go back to Home page")))));
    };
    return Login;
}(React.Component));
exports.default = Login;
//# sourceMappingURL=login.js.map