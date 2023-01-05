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
export function UltraCenteredView(props) {
    const { children } = props, restOfProps = __rest(props, ["children"]);
    return (_jsx(_Fragment, { children: _jsx(HStack, Object.assign({ justify: "center", align: "stretch" }, restOfProps, { children: _jsx(VStack, Object.assign({ align: "stretch", w: { base: "100%", md: "72%", lg: "50%" } }, { children: children })) })) }));
}
//# sourceMappingURL=UltraCenteredView.js.map