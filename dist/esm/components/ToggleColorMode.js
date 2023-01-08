import { jsx as _jsx } from "react/jsx-runtime";
import { IconButton, useColorMode } from "@chakra-ui/react";
import { Moon, Sun } from "tabler-icons-react";
export function ToggleColorMode(props) {
    const { colorMode, toggleColorMode } = useColorMode();
    return (_jsx(IconButton, Object.assign({ onClick: toggleColorMode, variant: "ghost", icon: colorMode === "dark" ? _jsx(Sun, {}) : _jsx(Moon, {}) }, props)));
}
//# sourceMappingURL=ToggleColorMode.js.map