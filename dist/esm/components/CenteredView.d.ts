/// <reference types="react" />
import { LayoutProps } from "@chakra-ui/react";
import type { StackProps } from "@chakra-ui/react";
interface Props extends StackProps {
    children: React.ReactNode;
    innerProps?: StackProps;
    w?: LayoutProps["w"];
}
export declare function CenteredView(props: Props): JSX.Element;
export {};
