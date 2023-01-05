import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Show, Spacer, Stack, Text, useColorModeValue, VStack } from '@chakra-ui/react';
import { AppTitle } from "./AppTitle";
import { CenteredView } from "./CenteredView";
import { ToolbarNavItem } from "./ToolbarNavItem";
export function Toolbar(props) {
    const { appTitle, currentUserName } = props;
    const bgColor = useColorModeValue("rgba(255, 255, 255, 0.8)", "rgba(0, 0, 0, 0.2)");
    return (_jsx(VStack, Object.assign({ w: "100%", as: "header", zIndex: 99, boxShadow: "sm", align: "stretch", position: "relative", backdropFilter: "saturate(180%) blur(5px)", backgroundColor: bgColor, style: { position: 'sticky' }, sx: { position: '-webkit-sticky', top: '0' } }, { children: _jsx(CenteredView, { children: _jsxs(Stack, Object.assign({ py: 4, px: 4, spacing: { base: 2, lg: 6 }, align: { base: "stretch", lg: "center" }, direction: { base: "column", lg: "row" } }, { children: [_jsx(AppTitle, { title: appTitle }), _jsx(Spacer, {}), _jsxs(Show, Object.assign({ above: "lg" }, { children: [!currentUserName && (_jsx(ToolbarNavItem, { navItem: {
                                    text: "Create Account",
                                    href: "/join",
                                    primary: true,
                                } })), currentUserName && (_jsx(Text, Object.assign({ fontSize: "sm", title: currentUserName }, { children: currentUserName })))] }))] })) }) })));
}
//# sourceMappingURL=Toolbar.js.map