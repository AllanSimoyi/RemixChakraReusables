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
import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { HStack, VStack } from "@chakra-ui/react";
export function CenteredView(props) {
    const { children, innerProps, w } = props, restOfProps = __rest(props, ["children", "innerProps", "w"]);
    return (_jsx(_Fragment, { children: _jsx(HStack, Object.assign({ justify: "center", align: "stretch" }, restOfProps, { children: _jsx(VStack, Object.assign({ align: "stretch", w: w || { base: "100%", md: "100%", lg: "90%" } }, innerProps, { children: children })) })) }));
}
//# sourceMappingURL=CenteredView.js.map