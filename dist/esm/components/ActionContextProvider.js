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
    const { fields, fieldErrors } = useActionContext();
    return {
        value: fields === null || fields === void 0 ? void 0 : fields[name],
        error: fieldErrors === null || fieldErrors === void 0 ? void 0 : fieldErrors[name],
    };
}
export function useFormError() {
    const { formError } = useActionContext();
    return formError;
}
export function useIsSubmitting() {
    const { isSubmitting } = useActionContext();
    return isSubmitting;
}
//# sourceMappingURL=ActionContextProvider.js.map