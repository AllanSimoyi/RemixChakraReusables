/// <reference types="react" />
interface AccompanyingFieldsProps {
    accompanyingFields: {
        name: string;
        value: string;
    }[];
}
interface Props extends AccompanyingFieldsProps {
    skip: number;
    take: number;
    numItems: number;
}
export declare function CustomPagination(props: Props): JSX.Element;
export {};
