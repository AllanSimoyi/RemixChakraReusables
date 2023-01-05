"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomBreadcrumb = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("@chakra-ui/react");
const react_2 = require("@remix-run/react");
const tabler_icons_react_1 = require("tabler-icons-react");
function CustomBreadcrumb(props) {
    const { items, color } = props;
    return ((0, jsx_runtime_1.jsx)(react_1.Breadcrumb, Object.assign({ spacing: '8px', separator: (0, jsx_runtime_1.jsx)(tabler_icons_react_1.ChevronRight, { color: 'black' }) }, { children: items.map((item, index) => {
            const isLastItem = index === items.length - 1;
            return ((0, jsx_runtime_1.jsxs)(react_1.BreadcrumbItem, Object.assign({ color: isLastItem ? undefined : color, isCurrentPage: isLastItem ? true : undefined }, { children: [item.href && ((0, jsx_runtime_1.jsx)(react_1.BreadcrumbLink, Object.assign({ as: react_2.Link, to: item.href }, { children: item.value }))), !item.href && ((0, jsx_runtime_1.jsx)(react_1.Text, Object.assign({ size: "sm" }, { children: item.value })))] }), index));
        }) })));
}
exports.CustomBreadcrumb = CustomBreadcrumb;
//# sourceMappingURL=CustomBreadcrumb.js.map