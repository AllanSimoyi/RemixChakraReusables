"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.processBadRequest = exports.ensureOnlyDeleteMethod = exports.getIsOnlyDeleteMethod = exports.getValidatedId = exports.getRawFormFields = exports.CoreActionMethod = exports.ImageUploadSizeLimit = exports.badRequest = exports.PAGE_SIZE_OPTIONS = exports.PageSize = exports.PaginationSchema = exports.ImageIdSchema = exports.RequiredImageIdSchema = exports.BooleanSchema = exports.DateSchema = exports.PositiveIntSchema = exports.PerhapsZeroIntSchema = exports.PerhapsZeroDecimalSchema = exports.PositiveDecimalSchema = exports.PhoneNumberSchema = exports.FullNameSchema = exports.PerhapsEmptyRecordIdSchema = exports.RecordIdSchema = exports.StringNumber = exports.CleanPositiveIntSchema = exports.Responses = exports.StatusCode = exports.ResponseMessage = exports.displayNumItems = void 0;
const node_1 = require("@remix-run/node");
const zod_1 = require("zod");
function displayNumItems(numProperties, singular, plural, suffix = "listed") {
    return `${numProperties} ${numProperties === 1 ? singular : plural} ${suffix}`;
}
exports.displayNumItems = displayNumItems;
var ResponseMessage;
(function (ResponseMessage) {
    ResponseMessage["Unauthorised"] = "You're not authorised to access this resource";
    ResponseMessage["InvalidId"] = "Invalid ID provided";
    ResponseMessage["RecordNotFound"] = "Record not found";
    ResponseMessage["DeletedRecord"] = "Record was deleted";
    ResponseMessage["InvalidMethod"] = "Invalid request method provided";
})(ResponseMessage = exports.ResponseMessage || (exports.ResponseMessage = {}));
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["BadRequest"] = 400] = "BadRequest";
    StatusCode[StatusCode["Unauthorised"] = 401] = "Unauthorised";
    StatusCode[StatusCode["Forbidden"] = 403] = "Forbidden";
    StatusCode[StatusCode["NotFound"] = 404] = "NotFound";
})(StatusCode = exports.StatusCode || (exports.StatusCode = {}));
exports.Responses = {
    RecordNotFound: function () {
        return new Response(ResponseMessage.RecordNotFound, { status: StatusCode.NotFound });
    },
};
exports.CleanPositiveIntSchema = zod_1.z.number().positive();
exports.StringNumber = zod_1.z.string().regex(/\d+/).transform(Number);
exports.RecordIdSchema = zod_1.z.string().min(1).max(50);
exports.PerhapsEmptyRecordIdSchema = zod_1.z.string().max(50);
exports.FullNameSchema = zod_1.z.string().min(3).max(50);
exports.PhoneNumberSchema = zod_1.z.string().min(6).max(50);
exports.PositiveDecimalSchema = zod_1.z
    .number()
    .positive()
    .or(exports.StringNumber)
    .refine((n) => n > 0);
exports.PerhapsZeroDecimalSchema = zod_1.z
    .number()
    .min(0)
    .or(exports.StringNumber)
    .refine((n) => n >= 0);
exports.PerhapsZeroIntSchema = zod_1.z
    .number()
    .int()
    .min(0)
    .or(exports.StringNumber)
    .refine((n) => n >= 0);
exports.PositiveIntSchema = zod_1.z
    .number()
    .int()
    .min(1)
    .or(exports.StringNumber)
    .refine((n) => n > 0);
exports.DateSchema = zod_1.z.preprocess((arg) => {
    if (typeof arg == "string" || arg instanceof Date) {
        return new Date(arg);
    }
}, zod_1.z.date());
exports.BooleanSchema = zod_1.z.preprocess((arg) => {
    if (typeof arg === "string") {
        return arg === "true";
    }
}, zod_1.z.boolean());
exports.RequiredImageIdSchema = zod_1.z
    .string()
    .min(1, "Please select an image")
    .max(800);
exports.ImageIdSchema = zod_1.z.string().max(800);
exports.PaginationSchema = zod_1.z.object({
    skip: exports.PerhapsZeroIntSchema.optional(),
    take: exports.PositiveIntSchema.optional(),
});
var PageSize;
(function (PageSize) {
    PageSize[PageSize["Sixteen"] = 16] = "Sixteen";
    PageSize[PageSize["ThirtyTwo"] = 32] = "ThirtyTwo";
    PageSize[PageSize["FortyEight"] = 48] = "FortyEight";
    PageSize[PageSize["FiftySix"] = 56] = "FiftySix";
})(PageSize = exports.PageSize || (exports.PageSize = {}));
exports.PAGE_SIZE_OPTIONS = [
    PageSize.Sixteen,
    PageSize.ThirtyTwo,
    PageSize.FortyEight,
    PageSize.FiftySix,
];
function badRequest(data) {
    return (0, node_1.json)(data, { status: 400 });
}
exports.badRequest = badRequest;
;
var ImageUploadSizeLimit;
(function (ImageUploadSizeLimit) {
    ImageUploadSizeLimit[ImageUploadSizeLimit["Value"] = 2000000] = "Value";
    ImageUploadSizeLimit["DisplayValue"] = "2MB";
})(ImageUploadSizeLimit = exports.ImageUploadSizeLimit || (exports.ImageUploadSizeLimit = {}));
;
var CoreActionMethod;
(function (CoreActionMethod) {
    CoreActionMethod["MethodNameForDelete"] = "_method";
    CoreActionMethod["Delete"] = "1";
})(CoreActionMethod = exports.CoreActionMethod || (exports.CoreActionMethod = {}));
function getRawFormFields(request) {
    return __awaiter(this, void 0, void 0, function* () {
        const formData = yield request.formData();
        return Object.fromEntries(formData.entries());
    });
}
exports.getRawFormFields = getRawFormFields;
function getValidatedId(rawId) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield exports.RecordIdSchema.safeParseAsync(rawId);
        if (!result.success) {
            throw new Response(ResponseMessage.InvalidId, { status: StatusCode.BadRequest });
        }
        return result.data;
    });
}
exports.getValidatedId = getValidatedId;
function getIsOnlyDeleteMethod(formData) {
    return formData.get(CoreActionMethod.MethodNameForDelete) === CoreActionMethod.Delete;
}
exports.getIsOnlyDeleteMethod = getIsOnlyDeleteMethod;
function ensureOnlyDeleteMethod(formData) {
    if (formData.get(CoreActionMethod.MethodNameForDelete) !== CoreActionMethod.Delete) {
        throw new Response(ResponseMessage.InvalidMethod, { status: StatusCode.BadRequest });
    }
}
exports.ensureOnlyDeleteMethod = ensureOnlyDeleteMethod;
function processBadRequest(zodError, fields) {
    const { formErrors, fieldErrors } = zodError.flatten();
    return badRequest({ fields, fieldErrors, formError: formErrors.join(", ") });
}
exports.processBadRequest = processBadRequest;
//# sourceMappingURL=core.validations.js.map