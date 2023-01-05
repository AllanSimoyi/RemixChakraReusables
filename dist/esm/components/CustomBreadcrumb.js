import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Text } from "@chakra-ui/react";
import { Link } from "@remix-run/react";
import { ChevronRight } from "tabler-icons-react";
export function CustomBreadcrumb(props) {
    const { items, color } = props;
    return (_jsx(Breadcrumb, Object.assign({ spacing: '8px', separator: _jsx(ChevronRight, { color: 'black' }) }, { children: items.map((item, index) => {
            const isLastItem = index === items.length - 1;
            return (_jsxs(BreadcrumbItem, Object.assign({ color: isLastItem ? undefined : color, isCurrentPage: isLastItem ? true : undefined }, { children: [item.href && (_jsx(BreadcrumbLink, Object.assign({ as: Link, to: item.href }, { children: item.value }))), !item.href && (_jsx(Text, Object.assign({ size: "sm" }, { children: item.value })))] }), index));
        }) })));
}
//# sourceMappingURL=CustomBreadcrumb.js.map