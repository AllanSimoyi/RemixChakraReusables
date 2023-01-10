/// <reference types="react" />
import type { BorderProps, ButtonProps, StackProps } from "@chakra-ui/react";
export interface NavItem {
    text: string;
    href: string;
    primary?: boolean;
}
interface Props extends StackProps {
    navItem: NavItem;
    borderRadius?: BorderProps["borderRadius"];
    buttonProps?: ButtonProps;
}
export declare function ToolbarNavItem(props: Props): JSX.Element;
export {};
