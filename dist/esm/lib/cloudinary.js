var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export var UploadState;
(function (UploadState) {
    UploadState["Uploading"] = "uploading";
    UploadState["Uploaded"] = "uploaded";
    UploadState["Error"] = "error";
    UploadState["Idle"] = "idle";
})(UploadState || (UploadState = {}));
export function uploadToCloudinary(file, CLOUD_NAME, UPLOAD_RESET) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            const formData = new FormData();
            formData.append('file', file);
            formData.append('upload_preset', UPLOAD_RESET);
            formData.append('tags', 'rte');
            formData.append('context', '');
            const uploadUrl = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/upload`;
            try {
                const response = yield fetch(uploadUrl, {
                    method: 'POST',
                    body: formData
                });
                const result = yield response.json();
                if (!result) {
                    throw new Error("No result from cloudinary upload, please try again");
                }
                const { public_id: publicId, url, width, height } = result;
                return resolve({
                    success: true,
                    data: { publicId, url, width, height, },
                });
            }
            catch ({ message }) {
                const defaultErrorMessage = "Cloudinary upload failed";
                console.error(defaultErrorMessage, message);
                return resolve({
                    success: false,
                    err: new Error(defaultErrorMessage),
                });
            }
        }));
    });
}
//# sourceMappingURL=cloudinary.js.map