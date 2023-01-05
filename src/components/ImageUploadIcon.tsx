import { Spinner } from '@chakra-ui/react';
import { AdvancedImage, placeholder } from "@cloudinary/react";
import type { Icon as TablerIcon } from 'tabler-icons-react';
import { PhotoPlus, X } from 'tabler-icons-react';
import type { UploadState } from '../lib/cloudinary';
import { cloudinaryImages } from '../lib/cloudinary';
import { useCloudinary } from './CloudinaryContextProvider';

type Props = React.ComponentProps<TablerIcon> & {
  status: UploadState;
  publicId: string;
}

export function ImageUploadIcon (props: Props) {
  const { status, publicId, ...otherProps } = props;
  const { CLOUDINARY_CLOUD_NAME } = useCloudinary();
  if (status === 'uploaded') {
    return (
      <AdvancedImage
        cldImg={cloudinaryImages(CLOUDINARY_CLOUD_NAME).getUploadThumbnail(publicId)}
        plugins={[placeholder({ mode: 'pixelate' })]}
      />
    );
  }

  if (status === 'error') {
    return <X {...otherProps} />;
  }

  if (status === 'uploading') {
    return <Spinner m={4} size='lg' />;
  }

  return <PhotoPlus {...otherProps} size={80} />;
}
