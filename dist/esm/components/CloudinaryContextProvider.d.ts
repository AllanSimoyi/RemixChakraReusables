/// <reference types="react" />
interface ContextProps {
    CLOUDINARY_CLOUD_NAME: string;
    CLOUDINARY_UPLOAD_RESET: string;
}
export declare const CloudinaryContext: import("react").Context<ContextProps | undefined>;
interface Props {
    children: React.ReactNode;
    CLOUDINARY_CLOUD_NAME: string;
    CLOUDINARY_UPLOAD_RESET: string;
}
export declare function CloudinaryContextProvider(props: Props): JSX.Element;
export declare function useCloudinary(): ContextProps;
export {};
