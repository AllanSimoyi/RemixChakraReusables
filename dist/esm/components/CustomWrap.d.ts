/// <reference types="react" />
import type { WrapProps } from "@chakra-ui/react";
interface Props extends WrapProps {
    children: React.ReactNode[];
}
export declare function CustomWrap(props: Props): JSX.Element;
export {};
