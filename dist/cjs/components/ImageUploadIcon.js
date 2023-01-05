"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageUploadIcon = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("@chakra-ui/react");
const react_2 = require("@cloudinary/react");
const tabler_icons_react_1 = require("tabler-icons-react");
const cloudinary_1 = require("../lib/cloudinary");
const CloudinaryContextProvider_1 = require("./CloudinaryContextProvider");
function ImageUploadIcon(props) {
    const { status, publicId } = props, otherProps = __rest(props, ["status", "publicId"]);
    const { CLOUDINARY_CLOUD_NAME } = (0, CloudinaryContextProvider_1.useCloudinary)();
    if (status === 'uploaded') {
        return ((0, jsx_runtime_1.jsx)(react_2.AdvancedImage, { cldImg: (0, cloudinary_1.cloudinaryImages)(CLOUDINARY_CLOUD_NAME).getUploadThumbnail(publicId), plugins: [(0, react_2.placeholder)({ mode: 'pixelate' })] }));
    }
    if (status === 'error') {
        return (0, jsx_runtime_1.jsx)(tabler_icons_react_1.X, Object.assign({}, otherProps));
    }
    if (status === 'uploading') {
        return (0, jsx_runtime_1.jsx)(react_1.Spinner, { m: 4, size: 'lg' });
    }
    return (0, jsx_runtime_1.jsx)(tabler_icons_react_1.PhotoPlus, Object.assign({}, otherProps, { size: 80 }));
}
exports.ImageUploadIcon = ImageUploadIcon;
//# sourceMappingURL=ImageUploadIcon.js.map