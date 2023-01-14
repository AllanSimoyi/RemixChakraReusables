import { CloudConfig, CloudinaryImage } from "@cloudinary/url-gen";
import { fill, thumbnail } from "@cloudinary/url-gen/actions/resize";
import { byRadius } from "@cloudinary/url-gen/actions/roundCorners";

export function cloudinaryImages (CLOUDINARY_CLOUD_NAME: string) {
  return {
    getThumbnail: (publicId: string, width = 250, height = 250) => {
      try {
        let myImage = new CloudinaryImage(publicId, new CloudConfig({ cloudName: CLOUDINARY_CLOUD_NAME }));
        myImage
          .resize(fill().width(width).height(height))
          .format('auto')
          .quality('auto');
        return myImage;
      } catch (error) {
        return new CloudinaryImage(publicId, new CloudConfig({ cloudName: CLOUDINARY_CLOUD_NAME }));
      }
    },
    getUploadThumbnail: (publicId: string, width = 80, height = 80) => {
      try {
        let myImage = new CloudinaryImage(publicId, new CloudConfig({ cloudName: CLOUDINARY_CLOUD_NAME }));
        myImage
          .resize(thumbnail().width(width).height(height))
          .roundCorners(byRadius(5))
          .format('auto')
          .quality('auto');
        return myImage;
      } catch (error) {
        return new CloudinaryImage(publicId, new CloudConfig({ cloudName: CLOUDINARY_CLOUD_NAME }));
      }
    },
    getFullImage: (publicId: string) => {
      try {
        let myImage = new CloudinaryImage(publicId, new CloudConfig({ cloudName: CLOUDINARY_CLOUD_NAME }));
        myImage
          .roundCorners(byRadius(5))
          .format('auto')
          .quality('auto');
        return myImage;
      } catch (error) {
        return new CloudinaryImage(publicId, new CloudConfig({ cloudName: CLOUDINARY_CLOUD_NAME }));
      }
    }
  }
}

export type UploadState = 'uploading' | 'uploaded' | 'error' | 'idle';

export interface ImageUploadResult {
  publicId: string;
  url: string;
  height: number;
  width: number;
}

export async function uploadToCloudinary (file: File, CLOUD_NAME: string, UPLOAD_RESET: string) {
  return new Promise<ImageUploadResult>(async (resolve, reject) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', UPLOAD_RESET);
    formData.append('tags', 'rte');
    formData.append('context', '');

    const uploadUrl = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/upload`;

    try {
      const response = await fetch(uploadUrl, {
        method: 'POST',
        body: formData
      });

      const result = await response.json();
      if (!result) {
        throw new Error("No result from cloudinary upload, please try again");
      }

      const { public_id: publicId, url, width, height } = result;

      return resolve({ publicId, url, width, height, });
    } catch ({ message }) {
      const defaultErrorMessage = "Cloudinary upload failed";
      console.error(defaultErrorMessage, message as string);
      
      return reject(new Error(defaultErrorMessage));
    }
  });
}
