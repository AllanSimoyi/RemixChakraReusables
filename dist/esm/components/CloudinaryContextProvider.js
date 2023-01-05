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
import { useContext } from "react";
import { createContext, useState } from "react";
export const CloudinaryContext = createContext(undefined);
export function CloudinaryContextProvider(props) {
    const { children } = props, restOfProps = __rest(props, ["children"]);
    const [state] = useState(restOfProps);
    return (_jsx(CloudinaryContext.Provider, Object.assign({ value: state }, { children: children })));
}
export function useCloudinary() {
    const context = useContext(CloudinaryContext);
    if (!context) {
        throw new Error(`useCloudinary must be used within a CloudinaryContextProvider`);
    }
    return context;
}
//# sourceMappingURL=CloudinaryContextProvider.js.map