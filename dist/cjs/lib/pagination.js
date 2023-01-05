"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNumPages = exports.getPageNumber = void 0;
function getPageNumber(props) {
    if (!props.take || !props.skip) {
        return 1;
    }
    return (props.skip / props.take) + 1;
}
exports.getPageNumber = getPageNumber;
function getNumPages(props) {
    if (!props.take || !props.numItems) {
        return 1;
    }
    return Math.ceil(props.numItems / props.take);
}
exports.getNumPages = getNumPages;
//# sourceMappingURL=pagination.js.map