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
exports.CenteredView = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("@chakra-ui/react");
function CenteredView(props) {
    const { children, innerProps, w } = props, restOfProps = __rest(props, ["children", "innerProps", "w"]);
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)(react_1.HStack, Object.assign({ justify: "center", align: "stretch" }, restOfProps, { children: (0, jsx_runtime_1.jsx)(react_1.VStack, Object.assign({ align: "stretch", w: w || { base: "100%", md: "100%", lg: "90%" } }, innerProps, { children: children })) })) }));
}
exports.CenteredView = CenteredView;
//# sourceMappingURL=CenteredView.js.map