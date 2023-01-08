"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToggleColorMode = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("@chakra-ui/react");
const tabler_icons_react_1 = require("tabler-icons-react");
function ToggleColorMode(props) {
    const { colorMode, toggleColorMode } = (0, react_1.useColorMode)();
    return ((0, jsx_runtime_1.jsx)(react_1.IconButton, Object.assign({ onClick: toggleColorMode, variant: "ghost", icon: colorMode === "dark" ? (0, jsx_runtime_1.jsx)(tabler_icons_react_1.Sun, {}) : (0, jsx_runtime_1.jsx)(tabler_icons_react_1.Moon, {}) }, props)));
}
exports.ToggleColorMode = ToggleColorMode;
//# sourceMappingURL=ToggleColorMode.js.map