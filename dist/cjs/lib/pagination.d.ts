interface GetPageNumberProps {
    skip: number;
    take: number;
}
export declare function getPageNumber(props: GetPageNumberProps): number;
interface GetNumPagesProps {
    numItems: number;
    take: number;
}
export declare function getNumPages(props: GetNumPagesProps): number;
export {};
