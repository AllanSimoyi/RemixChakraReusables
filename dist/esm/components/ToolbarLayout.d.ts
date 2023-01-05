/// <reference types="react" />
import type { ToolbarProps } from "./Toolbar";
interface Props extends ToolbarProps {
    children: React.ReactNode;
    appTitle: string;
    developerName: string;
    developerLink: string;
}
export declare function ToolbarLayout(props: Props): JSX.Element;
export {};
