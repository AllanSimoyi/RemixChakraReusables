import { Result } from "./core.validations";
export declare enum UploadState {
    Uploading = "uploading",
    Uploaded = "uploaded",
    Error = "error",
    Idle = "idle"
}
export interface ImageUploadResult {
    publicId: string;
    url: string;
    height: number;
    width: number;
}
export declare function uploadToCloudinary(file: File, CLOUD_NAME: string, UPLOAD_RESET: string): Promise<Result<ImageUploadResult, Error>>;
