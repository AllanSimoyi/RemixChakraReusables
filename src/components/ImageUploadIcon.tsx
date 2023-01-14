import { Img, Spinner } from '@chakra-ui/react';
import { thumbnail } from '@cloudinary/url-gen/actions/resize';
import { useMemo } from 'react';
import type { Icon as TablerIcon } from 'tabler-icons-react';
import { PhotoPlus, X } from 'tabler-icons-react';
import type { UploadState } from '../lib/cloudinary';
import { useCloudinary } from './CloudinaryContextProvider';

type Props = React.ComponentProps<TablerIcon> & {
  status: UploadState;
  publicId: string;
  boxSize?: number;
}

export function ImageUploadIcon (props: Props) {
  const { status, publicId, boxSize, ...otherProps } = props;
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
    return (
      <Img
        src={imageSrc}
        width={boxSize || "60px"}
        height={boxSize || "60px"}
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
