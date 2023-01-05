/// <reference types="react" />
import type { ColorProps } from "@chakra-ui/react";
interface Item {
    value: string;
    href?: string;
}
interface Props {
    items: Item[];
    color: ColorProps["color"];
}
export declare function CustomBreadcrumb(props: Props): JSX.Element;
export {};
