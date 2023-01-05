/// <reference types="react" />
export declare function useDelete(): {
    confirmDeleteIsOpen: boolean;
    handleDeleteSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    onConfirmDelete: () => void;
    onCloseConfirmDelete: () => void;
    cancelDeleteRef: import("react").MutableRefObject<undefined>;
};
