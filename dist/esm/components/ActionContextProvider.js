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
import { createContext, useContext } from "react";
export const ActionContext = createContext(undefined);
export function ActionContextProvider(props) {
    const { children } = props, restOfProps = __rest(props, ["children"]);
    return (_jsx(ActionContext.Provider, Object.assign({ value: restOfProps }, { children: children })));
}
export function useActionContext() {
    const context = useContext(ActionContext);
    if (!context) {
        throw new Error(`useActionContext must be used within an ActionContextProvider`);
    }
    return context;
}
export function useField(name) {
    var _a, _b, _c, _d;
    const contextData = useActionContext();
    if (contextData.success) {
        return {
            value: undefined,
            error: undefined,
        };
    }
    return {
        value: (_b = (_a = contextData.err) === null || _a === void 0 ? void 0 : _a.fields) === null || _b === void 0 ? void 0 : _b[name],
        error: (_d = (_c = contextData.err) === null || _c === void 0 ? void 0 : _c.fieldErrors) === null || _d === void 0 ? void 0 : _d[name]
    };
}
export function useFormError() {
    var _a;
    const contextData = useActionContext();
    if (contextData.success) {
        return undefined;
    }
    return (_a = contextData.err) === null || _a === void 0 ? void 0 : _a.formError;
}
export function useIsSubmitting() {
    const { isSubmitting } = useActionContext();
    return isSubmitting;
}
//# sourceMappingURL=ActionContextProvider.js.map