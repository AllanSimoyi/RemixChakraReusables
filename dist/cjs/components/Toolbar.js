"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Toolbar = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("@chakra-ui/react");
const AppTitle_1 = require("./AppTitle");
const CenteredView_1 = require("./CenteredView");
const ToolbarNavItem_1 = require("./ToolbarNavItem");
function Toolbar(props) {
    const { appTitle, currentUserName } = props;
    const bgColor = (0, react_1.useColorModeValue)("rgba(255, 255, 255, 0.8)", "rgba(0, 0, 0, 0.2)");
    return ((0, jsx_runtime_1.jsx)(react_1.VStack, Object.assign({ w: "100%", as: "header", zIndex: 99, boxShadow: "sm", align: "stretch", position: "relative", backdropFilter: "saturate(180%) blur(5px)", backgroundColor: bgColor, style: { position: 'sticky' }, sx: { position: '-webkit-sticky', top: '0' } }, { children: (0, jsx_runtime_1.jsx)(CenteredView_1.CenteredView, { children: (0, jsx_runtime_1.jsxs)(react_1.Stack, Object.assign({ py: 4, px: 4, spacing: { base: 2, lg: 6 }, align: { base: "stretch", lg: "center" }, direction: { base: "column", lg: "row" } }, { children: [(0, jsx_runtime_1.jsx)(AppTitle_1.AppTitle, { title: appTitle }), (0, jsx_runtime_1.jsx)(react_1.Spacer, {}), (0, jsx_runtime_1.jsxs)(react_1.Show, Object.assign({ above: "lg" }, { children: [!currentUserName && ((0, jsx_runtime_1.jsx)(ToolbarNavItem_1.ToolbarNavItem, { navItem: {
                                    text: "Create Account",
                                    href: "/join",
                                    primary: true,
                                } })), currentUserName && ((0, jsx_runtime_1.jsx)(react_1.Text, Object.assign({ fontSize: "sm", title: currentUserName }, { children: currentUserName })))] }))] })) }) })));
}
exports.Toolbar = Toolbar;
//# sourceMappingURL=Toolbar.js.map