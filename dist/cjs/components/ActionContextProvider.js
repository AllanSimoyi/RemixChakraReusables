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
exports.useIsSubmitting = exports.useFormError = exports.useField = exports.useActionContext = exports.ActionContextProvider = exports.ActionContext = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
exports.ActionContext = (0, react_1.createContext)(undefined);
function ActionContextProvider(props) {
    const { children } = props, restOfProps = __rest(props, ["children"]);
    return ((0, jsx_runtime_1.jsx)(exports.ActionContext.Provider, Object.assign({ value: restOfProps }, { children: children })));
}
exports.ActionContextProvider = ActionContextProvider;
function useActionContext() {
    const context = (0, react_1.useContext)(exports.ActionContext);
    if (!context) {
        throw new Error(`useActionContext must be used within an ActionContextProvider`);
    }
    return context;
}
exports.useActionContext = useActionContext;
function useField(name) {
    const { fields, fieldErrors } = useActionContext();
    return {
        value: fields === null || fields === void 0 ? void 0 : fields[name],
        error: fieldErrors === null || fieldErrors === void 0 ? void 0 : fieldErrors[name],
    };
}
exports.useField = useField;
function useFormError() {
    const { formError } = useActionContext();
    return formError;
}
exports.useFormError = useFormError;
function useIsSubmitting() {
    const { isSubmitting } = useActionContext();
    return isSubmitting;
}
exports.useIsSubmitting = useIsSubmitting;
//# sourceMappingURL=ActionContextProvider.js.map