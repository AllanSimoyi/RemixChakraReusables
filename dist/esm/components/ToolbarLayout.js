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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Spacer, VStack } from "@chakra-ui/react";
import { Toolbar } from "./Toolbar";
import { CenteredView } from "./CenteredView";
import { Footer } from "./Footer";
export function ToolbarLayout(props) {
    const { children, appTitle, developerName, developerLink } = props, restOfProps = __rest(props, ["children", "appTitle", "developerName", "developerLink"]);
    return (_jsxs(VStack, Object.assign({ align: "stretch", spacing: 0, minH: "100vh", flexGrow: 1 }, { children: [_jsx(Toolbar, Object.assign({ appTitle: appTitle }, restOfProps)), _jsx(VStack, Object.assign({ align: "stretch", py: 8, as: "main" }, { children: _jsx(CenteredView, Object.assign({ flexGrow: 1, p: 4 }, { children: children })) })), _jsx(Spacer, {}), _jsx(Footer, { appTitle: appTitle, developerName: developerName, developerLink: developerLink })] })));
}
//# sourceMappingURL=ToolbarLayout.js.map