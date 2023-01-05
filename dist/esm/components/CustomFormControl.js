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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FormControl, FormErrorMessage, FormHelperText, FormLabel } from "@chakra-ui/form-control";
export function CustomFormControl(props) {
    const { label, labelProps, helperText, error, children } = props, formControlProps = __rest(props, ["label", "labelProps", "helperText", "error", "children"]);
    return (_jsxs(FormControl, Object.assign({ isInvalid: !!error }, formControlProps, { children: [label && (_jsx(FormLabel, Object.assign({ fontSize: "sm", style: { width: "100%" } }, labelProps, { children: label }))), children, helperText && (_jsx(FormHelperText, Object.assign({ fontSize: "sm" }, { children: helperText }))), error && (_jsx(FormErrorMessage, Object.assign({ fontSize: "sm" }, { children: error })))] })));
}
export default CustomFormControl;
//# sourceMappingURL=CustomFormControl.js.map