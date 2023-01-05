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
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { HStack, IconButton, Select, Stack, Text, VStack } from "@chakra-ui/react";
import { Form, useSubmit } from "@remix-run/react";
import { useCallback, useMemo } from "react";
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "tabler-icons-react";
import { usePagination } from "../hooks/usePagination";
import { PAGE_SIZE_OPTIONS } from "../lib/core.validations";
function AccompanyingFields({ accompanyingFields }) {
    return (_jsx(_Fragment, { children: accompanyingFields.map(field => (_jsx("input", { type: "hidden", name: field.name, value: field.value }, field.name))) }));
}
function PaginationButton(props) {
    const { take, accompanyingFields } = props, restOfProps = __rest(props, ["take", "accompanyingFields"]);
    return (_jsxs(Form, Object.assign({ method: "get" }, { children: [_jsx(AccompanyingFields, { accompanyingFields: accompanyingFields }), _jsx("input", { type: "hidden", name: "take", value: take }), _jsx(IconButton, Object.assign({ variant: "ghost", type: "submit", name: "skip" }, restOfProps))] })));
}
export function CustomPagination(props) {
    const { skip, take, numItems, accompanyingFields } = props;
    const submit = useSubmit();
    const { onFirstPage, onLastPage, skipValues } = usePagination({ numItems, skip, take });
    const handleChangePageSize = useCallback((event) => {
        submit(event.currentTarget.form, { method: "get" });
    }, [submit]);
    const startOfPage = useMemo(() => {
        return skip + 1;
    }, [skip]);
    const endOfPage = useMemo(() => {
        const skipTakeTotal = skip + take;
        if (skipTakeTotal > numItems) {
            return numItems;
        }
        return skipTakeTotal;
    }, [skip, take, numItems]);
    return (_jsxs(Stack, Object.assign({ align: "center", borderRadius: 5, bgColor: "blackAlpha.100", direction: { base: "column", lg: "row" } }, { children: [_jsx(VStack, Object.assign({ align: "stretch", px: 2 }, { children: _jsxs(Form, Object.assign({ method: "get" }, { children: [_jsx(AccompanyingFields, { accompanyingFields: accompanyingFields }), _jsx(Select, Object.assign({ fontSize: "sm", name: "take", value: take, onChange: handleChangePageSize, placeholder: "Items per page" }, { children: PAGE_SIZE_OPTIONS.map(option => (_jsxs("option", Object.assign({ value: option }, { children: [option, " per page"] }), option))) }))] })) })), _jsxs(HStack, Object.assign({ align: "center", px: 2 }, { children: [_jsx(PaginationButton, { title: "Go to first page", value: skipValues.firstPage, icon: _jsx(ChevronsLeft, {}), isDisabled: onFirstPage, "aria-label": 'To First Page', take: take, accompanyingFields: accompanyingFields }), _jsx(PaginationButton, { title: "Go to previous page", value: skipValues.previousPage, icon: _jsx(ChevronLeft, {}), isDisabled: onFirstPage, "aria-label": 'To Previous Page', take: take, accompanyingFields: accompanyingFields }), _jsx(VStack, Object.assign({ justify: "center", align: "center", px: 4 }, { children: _jsxs(Text, Object.assign({ fontSize: "sm" }, { children: [startOfPage, " - ", endOfPage, " of ", numItems] })) })), _jsx(PaginationButton, { title: "Go to next page", value: skipValues.nextPage, icon: _jsx(ChevronRight, {}), isDisabled: onLastPage, "aria-label": 'To Next Page', take: take, accompanyingFields: accompanyingFields }), _jsx(PaginationButton, { title: "Go to last page", value: skipValues.lastPage, icon: _jsx(ChevronsRight, {}), isDisabled: onLastPage, "aria-label": 'To Last Page', take: take, accompanyingFields: accompanyingFields })] }))] })));
}
//# sourceMappingURL=CustomPagination.js.map