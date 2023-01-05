"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToolbarLayout = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("@chakra-ui/react");
const Toolbar_1 = require("./Toolbar");
const CenteredView_1 = require("./CenteredView");
const Footer_1 = require("./Footer");
function ToolbarLayout(props) {
    const { children, appTitle, developerName, developerLink } = props, restOfProps = __rest(props, ["children", "appTitle", "developerName", "developerLink"]);
    return ((0, jsx_runtime_1.jsxs)(react_1.VStack, Object.assign({ align: "stretch", spacing: 0, minH: "100vh", flexGrow: 1 }, { children: [(0, jsx_runtime_1.jsx)(Toolbar_1.Toolbar, Object.assign({ appTitle: appTitle }, restOfProps)), (0, jsx_runtime_1.jsx)(react_1.VStack, Object.assign({ align: "stretch", py: 8, as: "main" }, { children: (0, jsx_runtime_1.jsx)(CenteredView_1.CenteredView, Object.assign({ flexGrow: 1, p: 4 }, { children: children })) })), (0, jsx_runtime_1.jsx)(react_1.Spacer, {}), (0, jsx_runtime_1.jsx)(Footer_1.Footer, { appTitle: appTitle, developerName: developerName, developerLink: developerLink })] })));
}
exports.ToolbarLayout = ToolbarLayout;
//# sourceMappingURL=ToolbarLayout.js.map