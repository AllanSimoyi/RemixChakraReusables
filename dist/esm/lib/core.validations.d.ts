import { z } from "zod";
export declare function displayNumItems(numProperties: number, singular: string, plural: string, suffix?: string): string;
export type CustomActionData<SchemaType extends z.ZodType<any, any, any>> = {
    formError?: string;
    fields?: z.infer<SchemaType>;
    fieldErrors?: inferSafeParseErrors<SchemaType>;
};
export declare enum ResponseMessage {
    Unauthorised = "You're not authorised to access this resource",
    InvalidId = "Invalid ID provided",
    RecordNotFound = "Record not found",
    DeletedRecord = "Record was deleted",
    InvalidMethod = "Invalid request method provided"
}
export declare enum StatusCode {
    BadRequest = 400,
    Unauthorised = 401,
    Forbidden = 403,
    NotFound = 404
}
export declare const Responses: {
    RecordNotFound: () => Response;
};
export declare const CleanPositiveIntSchema: z.ZodNumber;
export declare const StringNumber: z.ZodEffects<z.ZodString, number, string>;
export declare const RecordIdSchema: z.ZodString;
export declare const PerhapsEmptyRecordIdSchema: z.ZodString;
export declare const FullNameSchema: z.ZodString;
export declare const PhoneNumberSchema: z.ZodString;
export declare const PositiveDecimalSchema: z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodEffects<z.ZodString, number, string>]>, number, string | number>;
export declare const PerhapsZeroDecimalSchema: z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodEffects<z.ZodString, number, string>]>, number, string | number>;
export declare const PerhapsZeroIntSchema: z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodEffects<z.ZodString, number, string>]>, number, string | number>;
export declare const PositiveIntSchema: z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodEffects<z.ZodString, number, string>]>, number, string | number>;
export declare const DateSchema: z.ZodEffects<z.ZodDate, Date, unknown>;
export declare const BooleanSchema: z.ZodEffects<z.ZodBoolean, boolean, unknown>;
export declare const RequiredImageIdSchema: z.ZodString;
export declare const ImageIdSchema: z.ZodString;
export declare const PaginationSchema: z.ZodObject<{
    skip: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodEffects<z.ZodString, number, string>]>, number, string | number>>;
    take: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodEffects<z.ZodString, number, string>]>, number, string | number>>;
}, "strip", z.ZodTypeAny, {
    skip?: number | undefined;
    take?: number | undefined;
}, {
    skip?: string | number | undefined;
    take?: string | number | undefined;
}>;
export declare enum PageSize {
    Sixteen = 16,
    ThirtyTwo = 32,
    FortyEight = 48,
    FiftySix = 56
}
export declare const PAGE_SIZE_OPTIONS: PageSize[];
export type inferSafeParseErrors<T extends z.ZodType<any, any, any>> = {
    [P in keyof z.infer<T>]?: string[];
};
interface BaseActionData {
    formError?: string;
    fields?: {
        [index: string]: any;
    };
    fieldErrors?: {
        [index: string]: string[] | undefined;
    };
}
export declare function badRequest(data: BaseActionData): import("@remix-run/node").TypedResponse<BaseActionData>;
export declare function getRawFormFields(request: Request): Promise<{
    [k: string]: FormDataEntryValue;
}>;
export declare function getValidatedId(rawId: any): Promise<string>;
export declare const METHOD_IDENTIFIER = "_method";
export declare const DELETE_METHOD = "_delete";
export declare function getIsOnlyDeleteMethod(formData: FormData): boolean;
export declare function ensureOnlyDeleteMethod(formData: FormData): void;
export declare function processBadRequest<DataType>(zodError: z.ZodError<DataType>, fields: any): import("@remix-run/node").TypedResponse<BaseActionData>;
export {};
