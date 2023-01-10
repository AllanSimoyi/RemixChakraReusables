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
exports.ToolbarNavItem = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("@chakra-ui/react");
const react_2 = require("@remix-run/react");
function ToolbarNavItem(props) {
    const { navItem, borderRadius = 5, buttonProps } = props, restOfProps = __rest(props, ["navItem", "borderRadius", "buttonProps"]);
    return ((0, jsx_runtime_1.jsx)(react_1.VStack, Object.assign({ align: "stretch", p: 0 }, restOfProps, { children: (0, jsx_runtime_1.jsx)(react_1.Button, Object.assign({ as: react_2.Link, to: navItem.href, prefetch: "intent", variant: navItem.primary ? "solid" : "outline", colorScheme: navItem.primary ? "primary" : undefined, fontWeight: navItem.primary ? "bold" : "thin", fontSize: "sm", borderRadius: borderRadius }, buttonProps, { children: navItem.text })) }), navItem.text));
}
exports.ToolbarNavItem = ToolbarNavItem;
//# sourceMappingURL=ToolbarNavItem.js.map