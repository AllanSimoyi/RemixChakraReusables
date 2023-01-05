/// <reference types="react" />
interface Indexable {
    [x: string]: any;
}
interface BaseFieldErrors extends Indexable {
    [x: string]: string[] | undefined;
}
interface ContextProps<Fields extends Indexable, FieldErrors extends BaseFieldErrors> {
    formError?: string;
    fields?: Fields;
    fieldErrors?: FieldErrors;
    isSubmitting?: boolean;
}
export declare const ActionContext: import("react").Context<ContextProps<Indexable, BaseFieldErrors> | undefined>;
interface Props<Fields extends Indexable, FieldErrors extends BaseFieldErrors> {
    children: React.ReactNode;
    formError?: string;
    fields?: Fields;
    fieldErrors?: FieldErrors;
    isSubmitting?: boolean;
}
export declare function ActionContextProvider<Fields extends Indexable, FieldErrors extends BaseFieldErrors>(props: Props<Fields, FieldErrors>): JSX.Element;
export declare function useActionContext(): ContextProps<Indexable, BaseFieldErrors>;
export declare function useField<DataType = any>(name: string): {
    value: DataType;
    error: string[] | undefined;
};
export declare function useFormError(): string | undefined;
export declare function useIsSubmitting(): boolean | undefined;
export {};
