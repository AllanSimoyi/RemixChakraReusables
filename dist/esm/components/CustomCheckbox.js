import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Checkbox, HStack, Text } from "@chakra-ui/react";
import { useCallback, useState } from "react";
import { useField } from "./ActionContextProvider";
export function CustomCheckbox(props) {
    const { name, children } = props;
    const { value, error: errors } = useField(name);
    const [checked, setChecked] = useState(value || false);
    const handleOnChange = useCallback(() => {
        setChecked(prevState => !prevState);
    }, []);
    return (_jsxs(HStack, Object.assign({ align: "center", spacing: 2 }, { children: [_jsx("input", { type: "hidden", name: name, value: checked ? "true" : "false" }), _jsx(Checkbox, Object.assign({ w: "100%", colorScheme: "primary", isChecked: checked, isInvalid: !!(errors === null || errors === void 0 ? void 0 : errors.length), onChange: handleOnChange }, { children: _jsx(Text, Object.assign({ fontSize: "sm" }, { children: children })) }))] })));
}
//# sourceMappingURL=CustomCheckbox.js.map