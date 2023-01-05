import { CloudConfig, CloudinaryImage } from "@cloudinary/url-gen";
import { fill, thumbnail } from "@cloudinary/url-gen/actions/resize";
import { byRadius } from "@cloudinary/url-gen/actions/roundCorners";

export function cloudinaryImages (CLOUDINARY_CLOUD_NAME: string) {
  return {
    getThumbnail: (publicId: string) => {
      try {
        let myImage = new CloudinaryImage(publicId, new CloudConfig({ cloudName: CLOUDINARY_CLOUD_NAME }));
        myImage
          .resize(fill().width(250).height(250))
          .format('auto')
          .quality('auto');
        return myImage;
      } catch (error) {
        return new CloudinaryImage(publicId, new CloudConfig({ cloudName: CLOUDINARY_CLOUD_NAME }));
      }
    },
    getUploadThumbnail: (publicId: string) => {
      try {
        let myImage = new CloudinaryImage(publicId, new CloudConfig({ cloudName: CLOUDINARY_CLOUD_NAME }));
        myImage
          .resize(thumbnail().width(80).height(80))
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

    const url = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/upload`;

    try {
      const response = await fetch(url, {
        method: 'POST',
        body: formData
      });
      const result = await response.json();

      return resolve({
        publicId: result.public_id as string,
        url: result.url as string,
        width: result.width as number,
        height: result.height as number,
      });
    } catch ({ message }) {
      console.error('Upload to Cloudinary failed:', message as string);
      return reject(new Error('Upload to Cloudinary failed'));
    }
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
