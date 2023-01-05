/// <reference types="react" />
interface Props {
    identifier: string;
    isOpen: boolean;
    isDeleting: boolean;
    onConfirm: () => void;
    onCancel: () => void;
    cancelRef: any;
}
export declare function DeleteConfirmation(props: Props): JSX.Element;
export {};
