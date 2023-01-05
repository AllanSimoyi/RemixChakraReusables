/// <reference types="react" />
import type { SelectProps } from "@chakra-ui/react";
import type { CustomFormControlProps } from "./CustomFormControl";
interface Props extends SelectProps {
    label: string;
    formControlProps?: Omit<CustomFormControlProps, "label" | "children" | "error">;
    children: React.ReactNode[];
}
export declare function CustomSelect(props: Props): JSX.Element;
export {};
