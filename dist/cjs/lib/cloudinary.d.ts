import { CloudinaryImage } from "@cloudinary/url-gen";
export declare function cloudinaryImages(CLOUDINARY_CLOUD_NAME: string): {
    getThumbnail: (publicId: string) => CloudinaryImage;
    getUploadThumbnail: (publicId: string) => CloudinaryImage;
    getFullImage: (publicId: string) => CloudinaryImage;
};
export type UploadState = 'uploading' | 'uploaded' | 'error' | 'idle';
export interface ImageUploadResult {
    publicId: string;
    url: string;
    height: number;
    width: number;
}
export declare function uploadToCloudinary(file: File, CLOUD_NAME: string, UPLOAD_RESET: string): Promise<ImageUploadResult>;
