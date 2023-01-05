var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx } from "react/jsx-runtime";
import { Spinner } from '@chakra-ui/react';
import { AdvancedImage, placeholder } from "@cloudinary/react";
import { PhotoPlus, X } from 'tabler-icons-react';
import { cloudinaryImages } from '../lib/cloudinary';
import { useCloudinary } from './CloudinaryContextProvider';
export function ImageUploadIcon(props) {
    const { status, publicId } = props, otherProps = __rest(props, ["status", "publicId"]);
    const { CLOUDINARY_CLOUD_NAME } = useCloudinary();
    if (status === 'uploaded') {
        return (_jsx(AdvancedImage, { cldImg: cloudinaryImages(CLOUDINARY_CLOUD_NAME).getUploadThumbnail(publicId), plugins: [placeholder({ mode: 'pixelate' })] }));
    }
    if (status === 'error') {
        return _jsx(X, Object.assign({}, otherProps));
    }
    if (status === 'uploading') {
        return _jsx(Spinner, { m: 4, size: 'lg' });
    }
    return _jsx(PhotoPlus, Object.assign({}, otherProps, { size: 80 }));
}
//# sourceMappingURL=ImageUploadIcon.js.map