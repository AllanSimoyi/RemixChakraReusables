"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePagination = void 0;
const react_1 = require("react");
const pagination_1 = require("../lib/pagination");
function usePagination(props) {
    const { numItems, skip, take } = props;
    const pageNumber = (0, react_1.useMemo)(() => {
        return (0, pagination_1.getPageNumber)({ skip, take });
    }, [skip, take]);
    const onFirstPage = (0, react_1.useMemo)(() => {
        return pageNumber === 1;
    }, [pageNumber]);
    const numPages = (0, react_1.useMemo)(() => {
        return (0, pagination_1.getNumPages)({ numItems, take });
    }, [numItems, take]);
    const onLastPage = (0, react_1.useMemo)(() => {
        return pageNumber === numPages;
    }, [pageNumber, numPages]);
    const skipValues = (0, react_1.useMemo)(() => {
        return {
            firstPage: onFirstPage ? undefined : 0,
            previousPage: onFirstPage ? undefined : skip - take,
            nextPage: onLastPage ? undefined : skip + take,
            lastPage: onLastPage ? undefined : (numPages - 1) * take,
        };
    }, [onFirstPage, onLastPage, numPages, skip, take]);
    return { onFirstPage, onLastPage, skipValues };
}
exports.usePagination = usePagination;
//# sourceMappingURL=usePagination.js.map