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
import { jsx as _jsx } from "react/jsx-runtime";
import { Button, VStack } from "@chakra-ui/react";
import { Link } from "@remix-run/react";
export function ToolbarNavItem(props) {
    const { navItem, borderRadius = 5 } = props, restOfProps = __rest(props, ["navItem", "borderRadius"]);
    return (_jsx(VStack, Object.assign({ align: "stretch", p: 0 }, restOfProps, { children: _jsx(Button, Object.assign({ as: Link, to: navItem.href, prefetch: "intent", variant: navItem.primary ? "solid" : "ghost", colorScheme: navItem.primary ? "primary" : undefined, fontWeight: navItem.primary ? "bold" : "thin", fontSize: "sm", borderRadius: borderRadius }, { children: navItem.text })) }), navItem.text));
}
//# sourceMappingURL=ToolbarNavItem.js.map