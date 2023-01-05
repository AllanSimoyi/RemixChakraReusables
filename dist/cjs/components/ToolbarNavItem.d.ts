/// <reference types="react" />
import type { BorderProps, StackProps } from "@chakra-ui/react";
export interface NavItem {
    text: string;
    href: string;
    primary?: boolean;
}
interface Props extends StackProps {
    navItem: NavItem;
    borderRadius?: BorderProps["borderRadius"];
}
export declare function ToolbarNavItem(props: Props): JSX.Element;
export {};
