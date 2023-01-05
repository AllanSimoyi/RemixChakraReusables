/// <reference types="react" />
import type { FormControlProps, FormLabelProps } from "@chakra-ui/form-control";
export interface CustomFormControlProps extends FormControlProps {
    label?: string;
    labelProps?: FormLabelProps;
    helperText?: string;
    error?: string;
    children: React.ReactNode;
}
export declare function CustomFormControl(props: CustomFormControlProps): JSX.Element;
export default CustomFormControl;
