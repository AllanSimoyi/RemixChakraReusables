"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logout = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("@chakra-ui/react");
const react_2 = require("@remix-run/react");
function Logout() {
    return ((0, jsx_runtime_1.jsx)(react_2.Form, Object.assign({ action: "/logout", method: "post" }, { children: (0, jsx_runtime_1.jsx)(react_1.MenuItem, Object.assign({ type: "submit", fontSize: "sm" }, { children: "Log Out" })) })));
}
exports.Logout = Logout;
//# sourceMappingURL=Logout.js.map