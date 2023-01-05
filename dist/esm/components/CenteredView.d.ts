/// <reference types="react" />
import type { StackProps } from "@chakra-ui/react";
interface Props extends StackProps {
    children: React.ReactNode;
    innerProps?: StackProps;
}
export declare function CenteredView(props: Props): JSX.Element;
export {};
