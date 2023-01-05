/// <reference types="react" />
import type { TextareaProps } from "@chakra-ui/react";
import type { CustomFormControlProps } from "./CustomFormControl";
interface Props extends TextareaProps {
    label: string;
    formControlProps?: Omit<CustomFormControlProps, "label" | "children" | "error">;
}
export declare function CustomTextArea(props: Props): JSX.Element;
export {};
