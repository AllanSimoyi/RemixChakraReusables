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
import { Img, Spinner } from '@chakra-ui/react';
import { thumbnail } from '@cloudinary/url-gen/actions/resize';
import { useMemo } from 'react';
import { PhotoPlus, X } from 'tabler-icons-react';
import { useCloudinary } from './CloudinaryContextProvider';
export function ImageUploadIcon(props) {
    const { status, publicId, boxSize } = props, otherProps = __rest(props, ["status", "publicId", "boxSize"]);
    const { CloudinaryUtil } = useCloudinary();
    if (status === 'uploaded') {
        const imageSrc = useMemo(() => {
            return CloudinaryUtil
                .image(publicId)
                .resize(thumbnail().width(60).height(60))
                .format('auto')
                .quality('auto')
                .toURL();
        }, [publicId]);
        return (_jsx(Img, { src: imageSrc, width: boxSize || "60px", height: boxSize || "60px" }));
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