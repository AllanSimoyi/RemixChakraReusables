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
exports.CustomFormControl = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const form_control_1 = require("@chakra-ui/form-control");
function CustomFormControl(props) {
    const { label, labelProps, helperText, error, children } = props, formControlProps = __rest(props, ["label", "labelProps", "helperText", "error", "children"]);
    return ((0, jsx_runtime_1.jsxs)(form_control_1.FormControl, Object.assign({ isInvalid: !!error }, formControlProps, { children: [label && ((0, jsx_runtime_1.jsx)(form_control_1.FormLabel, Object.assign({ fontSize: "sm", style: { width: "100%" } }, labelProps, { children: label }))), children, helperText && ((0, jsx_runtime_1.jsx)(form_control_1.FormHelperText, Object.assign({ fontSize: "sm" }, { children: helperText }))), error && ((0, jsx_runtime_1.jsx)(form_control_1.FormErrorMessage, Object.assign({ fontSize: "sm" }, { children: error })))] })));
}
exports.CustomFormControl = CustomFormControl;
exports.default = CustomFormControl;
//# sourceMappingURL=CustomFormControl.js.map