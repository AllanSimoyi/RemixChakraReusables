interface Props {
    numItems: number;
    skip: number;
    take: number;
}
export declare function usePagination(props: Props): {
    onFirstPage: boolean;
    onLastPage: boolean;
    skipValues: {
        firstPage: number | undefined;
        previousPage: number | undefined;
        nextPage: number | undefined;
        lastPage: number | undefined;
    };
};
export {};
