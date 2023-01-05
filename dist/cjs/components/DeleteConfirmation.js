"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteConfirmation = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("@chakra-ui/react");
function DeleteConfirmation(props) {
    const { identifier, isOpen, isDeleting, onConfirm, onCancel, cancelRef } = props;
    return ((0, jsx_runtime_1.jsx)(react_1.AlertDialog, Object.assign({ isOpen: isOpen, leastDestructiveRef: cancelRef, onClose: onCancel }, { children: (0, jsx_runtime_1.jsx)(react_1.AlertDialogOverlay, { children: (0, jsx_runtime_1.jsxs)(react_1.AlertDialogContent, { children: [(0, jsx_runtime_1.jsxs)(react_1.AlertDialogHeader, Object.assign({ fontSize: "sm", fontWeight: "bold" }, { children: ["Delete ", identifier] })), (0, jsx_runtime_1.jsx)(react_1.AlertDialogBody, Object.assign({ fontSize: "sm" }, { children: "Are you sure? You cant undo this action afterwards." })), (0, jsx_runtime_1.jsxs)(react_1.AlertDialogFooter, { children: [(0, jsx_runtime_1.jsx)(react_1.Button, Object.assign({ fontSize: "sm", ref: cancelRef, onClick: onCancel, disabled: isDeleting }, { children: "Cancel" })), (0, jsx_runtime_1.jsxs)(react_1.Button, Object.assign({ fontSize: "sm", colorScheme: "red", onClick: onConfirm, ml: 3, disabled: isDeleting }, { children: [!isDeleting && "Delete", isDeleting && "Deleting..."] }))] })] }) }) })));
}
exports.DeleteConfirmation = DeleteConfirmation;
//# sourceMappingURL=DeleteConfirmation.js.map