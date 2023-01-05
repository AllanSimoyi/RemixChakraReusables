export function getPageNumber(props) {
    if (!props.take || !props.skip) {
        return 1;
    }
    return (props.skip / props.take) + 1;
}
export function getNumPages(props) {
    if (!props.take || !props.numItems) {
        return 1;
    }
    return Math.ceil(props.numItems / props.take);
}
//# sourceMappingURL=pagination.js.map