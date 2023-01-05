"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDelete = void 0;
const react_1 = require("@chakra-ui/react");
const react_2 = require("@remix-run/react");
const react_3 = require("react");
function useDelete() {
    const submit = (0, react_2.useSubmit)();
    const { isOpen, onOpen, onClose } = (0, react_1.useDisclosure)();
    const cancelDeleteRef = (0, react_3.useRef)();
    const [target, setTarget] = (0, react_3.useState)(undefined);
    const handleDeleteSubmit = (0, react_3.useCallback)((event) => {
        event.preventDefault();
        setTarget(event.currentTarget);
        onOpen();
    }, [onOpen]);
    const onConfirmDelete = (0, react_3.useCallback)(() => {
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
exports.useDelete = useDelete;
//# sourceMappingURL=useDelete.js.map