/// <reference types="react" />
import type { StackProps } from '@chakra-ui/react';
interface Props extends StackProps {
    status: "error" | "info" | "warning";
    children: React.ReactNode;
}
export declare function CustomAlert(props: Props): JSX.Element;
export {};
