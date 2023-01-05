"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Footer = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("@chakra-ui/react");
const dayjs_1 = __importDefault(require("dayjs"));
const CenteredView_1 = require("./CenteredView");
function Footer(props) {
    const { appTitle, developerName, developerLink } = props;
    const bgColor = (0, react_1.useColorModeValue)(react_1.theme.colors.gray[200], react_1.theme.colors.gray[600]);
    const linkColor = (0, react_1.useColorModeValue)(react_1.theme.colors.blue[600], react_1.theme.colors.blue[200]);
    return ((0, jsx_runtime_1.jsx)(react_1.VStack, Object.assign({ align: "stretch", bgColor: bgColor }, { children: (0, jsx_runtime_1.jsx)(CenteredView_1.CenteredView, Object.assign({ p: 4 }, { children: (0, jsx_runtime_1.jsxs)(react_1.Stack, Object.assign({ direction: { base: "column", lg: "row" }, spacing: { base: 1, lg: 4 }, align: "flex-start" }, { children: [(0, jsx_runtime_1.jsxs)(react_1.Text, Object.assign({ fontSize: "sm", fontWeight: "thin" }, { children: ["Copyright \u00A9 ", (0, dayjs_1.default)().format("YYYY"), " ", appTitle, " - All rights reserved."] })), (0, jsx_runtime_1.jsx)(react_1.Spacer, {}), (0, jsx_runtime_1.jsxs)(react_1.Text, Object.assign({ fontSize: "sm" }, { children: ["Developed by ", (0, jsx_runtime_1.jsx)(react_1.Link, Object.assign({ href: developerLink, target: "_blank", rel: "noopener noreferrer", color: linkColor }, { children: developerName }))] }))] })) })) })));
}
exports.Footer = Footer;
//# sourceMappingURL=Footer.js.map