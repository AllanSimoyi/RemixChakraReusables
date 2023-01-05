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
import { Select } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { useField } from "./ActionContextProvider";
import CustomFormControl from "./CustomFormControl";
export function CustomSelect(props) {
    var _a;
    const { label, children, name, formControlProps } = props, restOfProps = __rest(props, ["label", "children", "name", "formControlProps"]);
    const ref = useRef(null);
    const { value, error } = useField(name);
    useEffect(() => {
        var _a;
        if (error) {
            (_a = ref.current) === null || _a === void 0 ? void 0 : _a.scrollIntoView();
        }
    }, [error]);
    return (_jsx(CustomFormControl, Object.assign({ py: 1 }, formControlProps, { label: label, error: error === null || error === void 0 ? void 0 : error.join(", "), labelProps: Object.assign(Object.assign({}, formControlProps === null || formControlProps === void 0 ? void 0 : formControlProps.labelProps), { htmlFor: ((_a = formControlProps === null || formControlProps === void 0 ? void 0 : formControlProps.labelProps) === null || _a === void 0 ? void 0 : _a.htmlFor) || props.id || props.name }) }, { children: _jsx(Select, Object.assign({ fontSize: "sm", ref: ref, name: name, defaultValue: restOfProps.value ? undefined : value }, restOfProps, { children: children })) })));
}
//# sourceMappingURL=CustomSelect.js.map