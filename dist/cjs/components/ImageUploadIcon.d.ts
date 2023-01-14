/// <reference types="react" />
import type { Icon as TablerIcon } from 'tabler-icons-react';
import type { UploadState } from '../lib/cloudinary';
type Props = React.ComponentProps<TablerIcon> & {
    status: UploadState;
    publicId: string;
    boxSize?: number;
};
export declare function ImageUploadIcon(props: Props): JSX.Element;
export {};
