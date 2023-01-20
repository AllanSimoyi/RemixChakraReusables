/// <reference types="react" />
import { Result } from "../lib";
type ContextProps<SuccessData = any, ActionData = any> = (Result<SuccessData, ActionData> | undefined) & {
    isSubmitting: boolean;
};
export declare const ActionContext: import("react").Context<ContextProps<any, any> | undefined>;
type Props<Ok, Err> = ContextProps<Ok, Err> & {
    children: React.ReactNode;
};
export declare function ActionContextProvider<Ok, Err>(props: Props<Ok, Err>): JSX.Element;
export declare function useActionContext<Ok, Err>(): ContextProps<Ok, Err>;
export declare function useField<FieldDataType = any>(name: string): {
    value: undefined;
    error: undefined;
} | {
    value: FieldDataType;
    error: string[] | undefined;
};
export declare function useFormError(): string | undefined;
export declare function useIsSubmitting(): boolean;
export {};
