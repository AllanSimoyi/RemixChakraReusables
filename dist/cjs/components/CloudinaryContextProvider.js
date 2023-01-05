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
exports.useCloudinary = exports.CloudinaryContextProvider = exports.CloudinaryContext = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_2 = require("react");
exports.CloudinaryContext = (0, react_2.createContext)(undefined);
function CloudinaryContextProvider(props) {
    const { children } = props, restOfProps = __rest(props, ["children"]);
    const [state] = (0, react_2.useState)(restOfProps);
    return ((0, jsx_runtime_1.jsx)(exports.CloudinaryContext.Provider, Object.assign({ value: state }, { children: children })));
}
exports.CloudinaryContextProvider = CloudinaryContextProvider;
function useCloudinary() {
    const context = (0, react_1.useContext)(exports.CloudinaryContext);
    if (!context) {
        throw new Error(`useCloudinary must be used within a CloudinaryContextProvider`);
    }
    return context;
}
exports.useCloudinary = useCloudinary;
//# sourceMappingURL=CloudinaryContextProvider.js.map