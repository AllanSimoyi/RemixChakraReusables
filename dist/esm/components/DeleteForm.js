import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Form } from "@remix-run/react";
import { useDelete } from "../hooks/useDelete";
import { CoreActionMethod } from "../lib/core.validations";
import { DeleteConfirmation } from "./DeleteConfirmation";
export function DeleteForm(props) {
    const { identifier, isProcessing, children } = props;
    const { confirmDeleteIsOpen, handleDeleteSubmit, onConfirmDelete, onCloseConfirmDelete, cancelDeleteRef } = useDelete();
    return (_jsxs(Form, Object.assign({ method: "post", onSubmit: handleDeleteSubmit }, { children: [_jsx(DeleteConfirmation, { identifier: identifier, isOpen: confirmDeleteIsOpen, isDeleting: isProcessing, onConfirm: onConfirmDelete, onCancel: onCloseConfirmDelete, cancelRef: cancelDeleteRef }), _jsx("input", { type: "hidden", name: CoreActionMethod.MethodNameForDelete, value: CoreActionMethod.Delete }), children] })));
}
//# sourceMappingURL=DeleteForm.js.map