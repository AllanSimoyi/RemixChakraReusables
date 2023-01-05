import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { Link as ChakraLink, Spacer, Stack, Text, theme, useColorModeValue, VStack } from "@chakra-ui/react";
import dayjs from "dayjs";
import { CenteredView } from "./CenteredView";
export function Footer(props) {
    const { appTitle, developerName, developerLink } = props;
    const bgColor = useColorModeValue(theme.colors.gray[200], theme.colors.gray[600]);
    const linkColor = useColorModeValue(theme.colors.blue[600], theme.colors.blue[200]);
    return (_jsx(VStack, Object.assign({ align: "stretch", bgColor: bgColor }, { children: _jsx(CenteredView, Object.assign({ p: 4 }, { children: _jsxs(Stack, Object.assign({ direction: { base: "column", lg: "row" }, spacing: { base: 1, lg: 4 }, align: "flex-start" }, { children: [_jsxs(Text, Object.assign({ fontSize: "sm", fontWeight: "thin" }, { children: ["Copyright \u00A9 ", dayjs().format("YYYY"), " ", appTitle, " - All rights reserved."] })), _jsx(Spacer, {}), _jsxs(Text, Object.assign({ fontSize: "sm" }, { children: ["Developed by ", _jsx(ChakraLink, Object.assign({ href: developerLink, target: "_blank", rel: "noopener noreferrer", color: linkColor }, { children: developerName }))] }))] })) })) })));
}
//# sourceMappingURL=Footer.js.map