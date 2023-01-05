import { useDisclosure } from "@chakra-ui/react";
import { useSubmit } from "@remix-run/react";
import { useCallback, useRef, useState } from "react";
export function useDelete() {
    const submit = useSubmit();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const cancelDeleteRef = useRef();
    const [target, setTarget] = useState(undefined);
    const handleDeleteSubmit = useCallback((event) => {
        event.preventDefault();
        setTarget(event.currentTarget);
        onOpen();
    }, [onOpen]);
    const onConfirmDelete = useCallback(() => {
        onClose();
        if (target) {
            submit(target, { replace: true });
        }
    }, [submit, onClose, target]);
    return {
        confirmDeleteIsOpen: isOpen,
        handleDeleteSubmit,
        onConfirmDelete,
        onCloseConfirmDelete: onClose,
        cancelDeleteRef
    };
}
//# sourceMappingURL=useDelete.js.map