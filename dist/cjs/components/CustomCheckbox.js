"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomCheckbox = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("@chakra-ui/react");
const react_2 = require("react");
const ActionContextProvider_1 = require("./ActionContextProvider");
function CustomCheckbox(props) {
    const { name, children } = props;
    const { value, error: errors } = (0, ActionContextProvider_1.useField)(name);
    const [checked, setChecked] = (0, react_2.useState)(value || false);
    const handleOnChange = (0, react_2.useCallback)(() => {
        setChecked(prevState => !prevState);
    }, []);
    return ((0, jsx_runtime_1.jsxs)(react_1.HStack, Object.assign({ align: "center", spacing: 2 }, { children: [(0, jsx_runtime_1.jsx)("input", { type: "hidden", name: name, value: checked ? "true" : "false" }), (0, jsx_runtime_1.jsx)(react_1.Checkbox, Object.assign({ w: "100%", colorScheme: "primary", isChecked: checked, isInvalid: !!(errors === null || errors === void 0 ? void 0 : errors.length), onChange: handleOnChange }, { children: (0, jsx_runtime_1.jsx)(react_1.Text, Object.assign({ fontSize: "sm" }, { children: children })) }))] })));
}
exports.CustomCheckbox = CustomCheckbox;
//# sourceMappingURL=CustomCheckbox.js.map