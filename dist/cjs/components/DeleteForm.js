"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteForm = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("@remix-run/react");
const useDelete_1 = require("../hooks/useDelete");
const core_validations_1 = require("../lib/core.validations");
const DeleteConfirmation_1 = require("./DeleteConfirmation");
function DeleteForm(props) {
    const { identifier, isProcessing, children } = props;
    const { confirmDeleteIsOpen, handleDeleteSubmit, onConfirmDelete, onCloseConfirmDelete, cancelDeleteRef } = (0, useDelete_1.useDelete)();
    return ((0, jsx_runtime_1.jsxs)(react_1.Form, Object.assign({ method: "post", onSubmit: handleDeleteSubmit }, { children: [(0, jsx_runtime_1.jsx)(DeleteConfirmation_1.DeleteConfirmation, { identifier: identifier, isOpen: confirmDeleteIsOpen, isDeleting: isProcessing, onConfirm: onConfirmDelete, onCancel: onCloseConfirmDelete, cancelRef: cancelDeleteRef }), (0, jsx_runtime_1.jsx)("input", { type: "hidden", name: core_validations_1.METHOD_IDENTIFIER, value: core_validations_1.DELETE_METHOD }), children] })));
}
exports.DeleteForm = DeleteForm;
//# sourceMappingURL=DeleteForm.js.map