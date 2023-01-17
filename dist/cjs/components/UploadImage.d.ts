/// <reference types="react" />
import type { UploadState } from '../lib/cloudinary';
interface Props {
    onChange: (files: File[]) => void;
    uploadState: UploadState;
    uploadError: string;
    publicId: string;
    identifier: string;
    isProcessing: boolean;
    uploadSizeLimit: number;
}
export declare function UploadImage(props: Props): JSX.Element;
export {};
