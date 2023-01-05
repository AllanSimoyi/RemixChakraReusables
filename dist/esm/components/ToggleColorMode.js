import { jsxs as _jsxs } from "react/jsx-runtime";
import { Button, useColorMode } from "@chakra-ui/react";
export function ToggleColorMode(props) {
    const { colorMode, toggleColorMode } = useColorMode();
    return (_jsxs(Button, Object.assign({ onClick: toggleColorMode }, props, { children: ["Toggle ", colorMode === 'light' ? 'Dark' : 'Light'] })));
}
//# sourceMappingURL=ToggleColorMode.js.map