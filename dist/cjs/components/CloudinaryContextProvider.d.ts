/// <reference types="react" />
import { Cloudinary } from "@cloudinary/url-gen";
interface ContextProps {
    CLOUDINARY_CLOUD_NAME: string;
    CLOUDINARY_UPLOAD_RESET: string;
    CloudinaryUtil: Cloudinary;
}
export declare const CloudinaryContext: import("react").Context<ContextProps | undefined>;
interface Props extends ContextProps {
    children: React.ReactNode;
}
export declare function CloudinaryContextProvider(props: Props): JSX.Element;
export declare function useCloudinary(): ContextProps;
export {};
