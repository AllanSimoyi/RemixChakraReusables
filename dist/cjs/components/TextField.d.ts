/// <reference types="react" />
import type { InputProps } from "@chakra-ui/react";
import type { CustomFormControlProps } from "./CustomFormControl";
interface Props extends InputProps {
    label: string;
    formControlProps?: Omit<CustomFormControlProps, "label" | "children" | "error">;
}
export declare function TextField(props: Props): JSX.Element;
export {};
