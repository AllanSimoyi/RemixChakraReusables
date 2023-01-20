var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { json } from "@remix-run/node";
import { z } from "zod";
export function displayNumItems(numProperties, singular, plural, suffix = "listed") {
    return `${numProperties} ${numProperties === 1 ? singular : plural} ${suffix}`;
}
export var ResponseMessage;
(function (ResponseMessage) {
    ResponseMessage["Unauthorised"] = "You're not authorised to access this resource";
    ResponseMessage["InvalidId"] = "Invalid ID provided";
    ResponseMessage["RecordNotFound"] = "Record not found";
    ResponseMessage["DeletedRecord"] = "Record was deleted";
    ResponseMessage["InvalidMethod"] = "Invalid request method provided";
})(ResponseMessage || (ResponseMessage = {}));
export var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["BadRequest"] = 400] = "BadRequest";
    StatusCode[StatusCode["Unauthorised"] = 401] = "Unauthorised";
    StatusCode[StatusCode["Forbidden"] = 403] = "Forbidden";
    StatusCode[StatusCode["NotFound"] = 404] = "NotFound";
})(StatusCode || (StatusCode = {}));
export const Responses = {
    RecordNotFound: function () {
        return new Response(ResponseMessage.RecordNotFound, { status: StatusCode.NotFound });
    },
};
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
    .refine((n) => n >= 0);
export const PositiveIntSchema = z
    .number()
    .int()
    .min(1)
    .or(StringNumber)
    .refine((n) => n > 0);
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
export var PageSize;
(function (PageSize) {
    PageSize[PageSize["Sixteen"] = 16] = "Sixteen";
    PageSize[PageSize["ThirtyTwo"] = 32] = "ThirtyTwo";
    PageSize[PageSize["FortyEight"] = 48] = "FortyEight";
    PageSize[PageSize["FiftySix"] = 56] = "FiftySix";
})(PageSize || (PageSize = {}));
export const PAGE_SIZE_OPTIONS = [
    PageSize.Sixteen,
    PageSize.ThirtyTwo,
    PageSize.FortyEight,
    PageSize.FiftySix,
];
export function badRequest(data) {
    return json({ success: false, err: data }, { status: 400 });
}
;
export function getRawFormFields(request) {
    return __awaiter(this, void 0, void 0, function* () {
        const formData = yield request.formData();
        return Object.fromEntries(formData.entries());
    });
}
export function getValidatedId(rawId) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield RecordIdSchema.safeParseAsync(rawId);
        if (!result.success) {
            throw new Response(ResponseMessage.InvalidId, { status: StatusCode.BadRequest });
        }
        return result.data;
    });
}
export const METHOD_IDENTIFIER = "_method";
export const DELETE_METHOD = "_delete";
export function getIsOnlyDeleteMethod(formData) {
    return formData.get(METHOD_IDENTIFIER) === DELETE_METHOD;
}
export function ensureOnlyDeleteMethod(formData) {
    if (formData.get(METHOD_IDENTIFIER) !== DELETE_METHOD) {
        throw new Response(ResponseMessage.InvalidMethod, { status: StatusCode.BadRequest });
    }
}
export function processBadRequest(zodError, fields) {
    const { formErrors, fieldErrors } = zodError.flatten();
    return badRequest({
        fields,
        fieldErrors,
        formError: formErrors.join(", ")
    });
}
export function formResultProps(data) {
    return {
        success: !!(data === null || data === void 0 ? void 0 : data.success),
        data: (data === null || data === void 0 ? void 0 : data.success) ? data.data : undefined,
        err: (data === null || data === void 0 ? void 0 : data.success) ? undefined : data === null || data === void 0 ? void 0 : data.err,
    };
}
//# sourceMappingURL=core.validations.js.map