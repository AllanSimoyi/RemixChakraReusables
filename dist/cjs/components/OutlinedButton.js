"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OutlinedButton = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("@chakra-ui/react");
function OutlinedButton(props) {
    return ((0, jsx_runtime_1.jsx)(react_1.Button, Object.assign({ variant: "outline", fontSize: "sm" }, props, { children: props.children })));
}
exports.OutlinedButton = OutlinedButton;
//# sourceMappingURL=OutlinedButton.js.map