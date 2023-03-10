import type { FormControlProps, FormLabelProps } from "@chakra-ui/form-control";
import { FormControl, FormErrorMessage, FormHelperText, FormLabel } from "@chakra-ui/form-control";

export interface CustomFormControlProps extends FormControlProps {
  label?: string
  labelProps?: FormLabelProps
  helperText?: string;
  error?: string;
  children: React.ReactNode;
}

export function CustomFormControl (props: CustomFormControlProps) {
  const { label, labelProps, helperText, error, children, ...formControlProps } = props;

  return (
    <FormControl
      isInvalid={!!error}
      {...formControlProps}
    >
      {label && (
        <FormLabel
          fontSize="sm"
          style={{ width: "100%" }}
          {...labelProps}
        >
          {label}
        </FormLabel>
      )}
      {children}
      {helperText && (
        <FormHelperText fontSize="sm">
          {helperText}
        </FormHelperText>
      )}
      {error && (
        <FormErrorMessage fontSize="sm">
          {error}
        </FormErrorMessage>
      )}
    </FormControl>
  )
}

export default CustomFormControl
