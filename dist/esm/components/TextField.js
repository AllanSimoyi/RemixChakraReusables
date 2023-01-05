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
import { Input } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { useField } from "./ActionContextProvider";
import CustomFormControl from "./CustomFormControl";
export function TextField(props) {
    var _a;
    const { label, formControlProps, name } = props, restOfProps = __rest(props, ["label", "formControlProps", "name"]);
    const ref = useRef(null);
    const { value, error } = useField(name);
    useEffect(() => {
        var _a;
        if (error) {
            (_a = ref.current) === null || _a === void 0 ? void 0 : _a.scrollIntoView();
        }
    }, [error]);
    return (_jsx(CustomFormControl, Object.assign({}, formControlProps, { py: 1, label: label, error: error === null || error === void 0 ? void 0 : error.join(", "), labelProps: Object.assign(Object.assign({}, formControlProps === null || formControlProps === void 0 ? void 0 : formControlProps.labelProps), { htmlFor: ((_a = formControlProps === null || formControlProps === void 0 ? void 0 : formControlProps.labelProps) === null || _a === void 0 ? void 0 : _a.htmlFor) || props.id || props.name }) }, { children: _jsx(Input, Object.assign({ fontSize: "sm", ref: ref, name: name, defaultValue: value, placeholder: restOfProps.placeholder || label }, restOfProps)) })));
}
//# sourceMappingURL=TextField.js.map