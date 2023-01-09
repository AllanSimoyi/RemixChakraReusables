var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { CloudConfig, CloudinaryImage } from "@cloudinary/url-gen";
import { fill, thumbnail } from "@cloudinary/url-gen/actions/resize";
import { byRadius } from "@cloudinary/url-gen/actions/roundCorners";
export function cloudinaryImages(CLOUDINARY_CLOUD_NAME) {
    return {
        getThumbnail: (publicId, width = 250, height = 250) => {
            try {
                let myImage = new CloudinaryImage(publicId, new CloudConfig({ cloudName: CLOUDINARY_CLOUD_NAME }));
                myImage
                    .resize(fill().width(width).height(height))
                    .format('auto')
                    .quality('auto');
                return myImage;
            }
            catch (error) {
                return new CloudinaryImage(publicId, new CloudConfig({ cloudName: CLOUDINARY_CLOUD_NAME }));
            }
        },
        getUploadThumbnail: (publicId, width = 80, height = 80) => {
            try {
                let myImage = new CloudinaryImage(publicId, new CloudConfig({ cloudName: CLOUDINARY_CLOUD_NAME }));
                myImage
                    .resize(thumbnail().width(width).height(height))
                    .roundCorners(byRadius(5))
                    .format('auto')
                    .quality('auto');
                return myImage;
            }
            catch (error) {
                return new CloudinaryImage(publicId, new CloudConfig({ cloudName: CLOUDINARY_CLOUD_NAME }));
            }
        },
        getFullImage: (publicId) => {
            try {
                let myImage = new CloudinaryImage(publicId, new CloudConfig({ cloudName: CLOUDINARY_CLOUD_NAME }));
                myImage
                    .roundCorners(byRadius(5))
                    .format('auto')
                    .quality('auto');
                return myImage;
            }
            catch (error) {
                return new CloudinaryImage(publicId, new CloudConfig({ cloudName: CLOUDINARY_CLOUD_NAME }));
            }
        }
    };
}
export function uploadToCloudinary(file, CLOUD_NAME, UPLOAD_RESET) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            const formData = new FormData();
            formData.append('file', file);
            formData.append('upload_preset', UPLOAD_RESET);
            formData.append('tags', 'rte');
            formData.append('context', '');
            const url = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/upload`;
            try {
                const response = yield fetch(url, {
                    method: 'POST',
                    body: formData
                });
                const result = yield response.json();
                return resolve({
                    publicId: result.public_id,
                    url: result.url,
                    width: result.width,
                    height: result.height,
                });
            }
            catch ({ message }) {
                console.error('Upload to Cloudinary failed:', message);
                return reject(new Error('Upload to Cloudinary failed'));
            }
        }));
    });
}
// fetch(url, {
//   method: 'POST',
//   body: formData,
// })
//   .then((response) => response.json())
//   .then((result) => {
//     return resolve({
//       publicId: result.public_id as string,
//       url: result.url as string,
//       width: result.width as number,
//       height: result.height as number,
//     });
//   })
//   .catch(({ message }) => {
//     console.error('Upload to Cloudinary failed:', message as string);
//     reject(new Error('Upload to Cloudinary failed'));
//   });
//# sourceMappingURL=cloudinary.js.map