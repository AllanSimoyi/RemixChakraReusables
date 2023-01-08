import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { Link as ChakraLink, Spacer, Stack, Text, theme, useColorMode, useColorModeValue, VStack } from "@chakra-ui/react";
import dayjs from "dayjs";
import { CenteredView } from "./CenteredView";
export function Footer(props) {
    const { appTitle, developerName, developerLink } = props;
    const { colorMode } = useColorMode();
    const linkColor = useColorModeValue(theme.colors.blue[600], theme.colors.blue[200]);
    return (_jsx(VStack, Object.assign({ align: "stretch", backgroundColor: colorMode === "light" ? "whiteAlpha.800" : "whiteAlpha.200" }, { children: _jsx(CenteredView, Object.assign({ p: 4 }, { children: _jsxs(Stack, Object.assign({ direction: { base: "column", lg: "row" }, spacing: { base: 1, lg: 4 }, align: "flex-start" }, { children: [_jsxs(Text, Object.assign({ fontSize: "sm", fontWeight: "thin" }, { children: ["Copyright \u00A9 ", dayjs().format("YYYY"), " ", appTitle, " - All rights reserved."] })), _jsx(Spacer, {}), _jsxs(Text, Object.assign({ fontSize: "sm" }, { children: ["Developed by ", _jsx(ChakraLink, Object.assign({ href: developerLink, target: "_blank", rel: "noopener noreferrer", color: linkColor }, { children: developerName }))] }))] })) })) })));
}
//# sourceMappingURL=Footer.js.map