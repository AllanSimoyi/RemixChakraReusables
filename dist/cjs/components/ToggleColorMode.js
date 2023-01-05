"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToggleColorMode = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("@chakra-ui/react");
function ToggleColorMode(props) {
    const { colorMode, toggleColorMode } = (0, react_1.useColorMode)();
    return ((0, jsx_runtime_1.jsxs)(react_1.Button, Object.assign({ onClick: toggleColorMode }, props, { children: ["Toggle ", colorMode === 'light' ? 'Dark' : 'Light'] })));
}
exports.ToggleColorMode = ToggleColorMode;
//# sourceMappingURL=ToggleColorMode.js.map