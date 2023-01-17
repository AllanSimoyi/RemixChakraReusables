import { json } from "@remix-run/node";
import { z } from "zod";

export function displayNumItems (numProperties: number, singular: string, plural: string, suffix = "listed") {
  return `${numProperties} ${numProperties === 1 ? singular : plural} ${suffix}`;
}

export type Result<Ok, Err> = { success: true, data: Ok } | { success: false, err: Err }

export type CustomActionData<SchemaType extends z.ZodType<any, any, any>> = {
  formError?: string
  fields?: z.infer<SchemaType>;
  fieldErrors?: inferSafeParseErrors<SchemaType>
};

export enum ResponseMessage {
  Unauthorised = "You're not authorised to access this resource",
  InvalidId = "Invalid ID provided",
  RecordNotFound = "Record not found",
  DeletedRecord = "Record was deleted",
  InvalidMethod = "Invalid request method provided",
}

export enum StatusCode {
  BadRequest = 400,
  Unauthorised = 401,
  Forbidden = 403,
  NotFound = 404,
}

export const Responses = {
  RecordNotFound: function () {
    return new Response(
      ResponseMessage.RecordNotFound,
      { status: StatusCode.NotFound }
    );
  },
}

export const CleanPositiveIntSchema = z.number().positive();
export const StringNumber = z.string().regex(/\d+/).transform(Number);
export const RecordIdSchema = z.string().min(1).max(50);
export const PerhapsEmptyRecordIdSchema = z.string().max(50);

export const FullNameSchema = z.string().min(3).max(50);
export const PhoneNumberSchema = z.string().min(6).max(50);

export const PositiveDecimalSchema = z
  .number()
  .positive()
  .or(StringNumber)
  .refine((n) => n > 0);

export const PerhapsZeroDecimalSchema = z
  .number()
  .min(0)
  .or(StringNumber)
  .refine((n) => n >= 0);

export const PerhapsZeroIntSchema = z
  .number()
  .int()
  .min(0)
  .or(StringNumber)
  .refine((n) => n >= 0)

export const PositiveIntSchema = z
  .number()
  .int()
  .min(1)
  .or(StringNumber)
  .refine((n) => n > 0)

export const DateSchema = z.preprocess((arg) => {
  if (typeof arg == "string" || arg instanceof Date) {
    return new Date(arg);
  }
}, z.date());

export const BooleanSchema = z.preprocess((arg) => {
  if (typeof arg === "string") {
    return arg === "true";
  }
}, z.boolean());

export const RequiredImageIdSchema = z
  .string()
  .min(1, "Please select an image")
  .max(800);

export const ImageIdSchema = z.string().max(800);

export const PaginationSchema = z.object({
  skip: PerhapsZeroIntSchema.optional(),
  take: PositiveIntSchema.optional(),
});

export enum PageSize {
  Sixteen = 16,
  ThirtyTwo = 32,
  FortyEight = 48,
  FiftySix = 56,
}

export const PAGE_SIZE_OPTIONS: PageSize[] = [
  PageSize.Sixteen,
  PageSize.ThirtyTwo,
  PageSize.FortyEight,
  PageSize.FiftySix,
]

export type inferSafeParseErrors<T extends z.ZodType<any, any, any>> = {
  [P in keyof z.infer<T>]?: string[];
};

interface BaseActionData {
  formError?: string;
  fields?: {
    [index: string]: any;
  }
  fieldErrors?: {
    [index: string]: string[] | undefined;
  }
}

export function badRequest (data: BaseActionData) {
  return json(data, { status: 400 });
};

export async function getRawFormFields (request: Request) {
  const formData = await request.formData();
  return Object.fromEntries(formData.entries());
}

export async function getValidatedId (rawId: any) {
  const result = await RecordIdSchema.safeParseAsync(rawId);
  if (!result.success) {
    throw new Response(ResponseMessage.InvalidId, { status: StatusCode.BadRequest });
  }
  return result.data;
}

export const METHOD_IDENTIFIER = "_method";
export const DELETE_METHOD = "_delete";

export function getIsOnlyDeleteMethod (formData: FormData) {
  return formData.get(METHOD_IDENTIFIER) === DELETE_METHOD;
}

export function ensureOnlyDeleteMethod (formData: FormData) {
  if (formData.get(METHOD_IDENTIFIER) !== DELETE_METHOD) {
    throw new Response(ResponseMessage.InvalidMethod, { status: StatusCode.BadRequest });
  }
}

export function processBadRequest<DataType> (zodError: z.ZodError<DataType>, fields: any) {
  const { formErrors, fieldErrors } = zodError.flatten();
  return badRequest({ fields, fieldErrors, formError: formErrors.join(", ") });
}