export type UploadState = 'uploading' | 'uploaded' | 'error' | 'idle';
export interface ImageUploadResult {
    publicId: string;
    url: string;
    height: number;
    width: number;
}
export declare function uploadToCloudinary(file: File, CLOUD_NAME: string, UPLOAD_RESET: string): Promise<ImageUploadResult>;
