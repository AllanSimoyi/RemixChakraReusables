"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrimaryButton = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("@chakra-ui/react");
function PrimaryButton(props) {
    return ((0, jsx_runtime_1.jsx)(react_1.Button, Object.assign({ fontSize: "sm" }, props, { children: props.children })));
}
exports.PrimaryButton = PrimaryButton;
//# sourceMappingURL=PrimaryButton.js.map