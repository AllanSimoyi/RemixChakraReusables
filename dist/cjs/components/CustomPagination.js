"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomPagination = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("@chakra-ui/react");
const react_2 = require("@remix-run/react");
const react_3 = require("react");
const tabler_icons_react_1 = require("tabler-icons-react");
const usePagination_1 = require("../hooks/usePagination");
const core_validations_1 = require("../lib/core.validations");
function AccompanyingFields({ accompanyingFields }) {
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: accompanyingFields.map(field => ((0, jsx_runtime_1.jsx)("input", { type: "hidden", name: field.name, value: field.value }, field.name))) }));
}
function PaginationButton(props) {
    const { take, accompanyingFields } = props, restOfProps = __rest(props, ["take", "accompanyingFields"]);
    return ((0, jsx_runtime_1.jsxs)(react_2.Form, Object.assign({ method: "get" }, { children: [(0, jsx_runtime_1.jsx)(AccompanyingFields, { accompanyingFields: accompanyingFields }), (0, jsx_runtime_1.jsx)("input", { type: "hidden", name: "take", value: take }), (0, jsx_runtime_1.jsx)(react_1.IconButton, Object.assign({ variant: "ghost", type: "submit", name: "skip" }, restOfProps))] })));
}
function CustomPagination(props) {
    const { skip, take, numItems, accompanyingFields } = props;
    const submit = (0, react_2.useSubmit)();
    const { onFirstPage, onLastPage, skipValues } = (0, usePagination_1.usePagination)({ numItems, skip, take });
    const handleChangePageSize = (0, react_3.useCallback)((event) => {
        submit(event.currentTarget.form, { method: "get" });
    }, [submit]);
    const startOfPage = (0, react_3.useMemo)(() => {
        return skip + 1;
    }, [skip]);
    const endOfPage = (0, react_3.useMemo)(() => {
        const skipTakeTotal = skip + take;
        if (skipTakeTotal > numItems) {
            return numItems;
        }
        return skipTakeTotal;
    }, [skip, take, numItems]);
    return ((0, jsx_runtime_1.jsxs)(react_1.Stack, Object.assign({ align: "center", borderRadius: 5, bgColor: "blackAlpha.100", direction: { base: "column", lg: "row" } }, { children: [(0, jsx_runtime_1.jsx)(react_1.VStack, Object.assign({ align: "stretch", px: 2 }, { children: (0, jsx_runtime_1.jsxs)(react_2.Form, Object.assign({ method: "get" }, { children: [(0, jsx_runtime_1.jsx)(AccompanyingFields, { accompanyingFields: accompanyingFields }), (0, jsx_runtime_1.jsx)(react_1.Select, Object.assign({ fontSize: "sm", name: "take", value: take, onChange: handleChangePageSize, placeholder: "Items per page" }, { children: core_validations_1.PAGE_SIZE_OPTIONS.map(option => ((0, jsx_runtime_1.jsxs)("option", Object.assign({ value: option }, { children: [option, " per page"] }), option))) }))] })) })), (0, jsx_runtime_1.jsxs)(react_1.HStack, Object.assign({ align: "center", px: 2 }, { children: [(0, jsx_runtime_1.jsx)(PaginationButton, { title: "Go to first page", value: skipValues.firstPage, icon: (0, jsx_runtime_1.jsx)(tabler_icons_react_1.ChevronsLeft, {}), isDisabled: onFirstPage, "aria-label": 'To First Page', take: take, accompanyingFields: accompanyingFields }), (0, jsx_runtime_1.jsx)(PaginationButton, { title: "Go to previous page", value: skipValues.previousPage, icon: (0, jsx_runtime_1.jsx)(tabler_icons_react_1.ChevronLeft, {}), isDisabled: onFirstPage, "aria-label": 'To Previous Page', take: take, accompanyingFields: accompanyingFields }), (0, jsx_runtime_1.jsx)(react_1.VStack, Object.assign({ justify: "center", align: "center", px: 4 }, { children: (0, jsx_runtime_1.jsxs)(react_1.Text, Object.assign({ fontSize: "sm" }, { children: [startOfPage, " - ", endOfPage, " of ", numItems] })) })), (0, jsx_runtime_1.jsx)(PaginationButton, { title: "Go to next page", value: skipValues.nextPage, icon: (0, jsx_runtime_1.jsx)(tabler_icons_react_1.ChevronRight, {}), isDisabled: onLastPage, "aria-label": 'To Next Page', take: take, accompanyingFields: accompanyingFields }), (0, jsx_runtime_1.jsx)(PaginationButton, { title: "Go to last page", value: skipValues.lastPage, icon: (0, jsx_runtime_1.jsx)(tabler_icons_react_1.ChevronsRight, {}), isDisabled: onLastPage, "aria-label": 'To Last Page', take: take, accompanyingFields: accompanyingFields })] }))] })));
}
exports.CustomPagination = CustomPagination;
//# sourceMappingURL=CustomPagination.js.map