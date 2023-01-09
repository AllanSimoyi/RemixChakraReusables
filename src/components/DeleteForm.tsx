import { Form } from "@remix-run/react";
import { useDelete } from "../hooks/useDelete";
import { METHOD_IDENTIFIER, DELETE_METHOD } from "../lib/core.validations";
import { DeleteConfirmation } from "./DeleteConfirmation";

interface Props {
  identifier: string;
  isProcessing: boolean;
  children: React.ReactNode;
}

export function DeleteForm (props: Props) {
  const { identifier, isProcessing, children } = props;

  const {
    confirmDeleteIsOpen, handleDeleteSubmit,
    onConfirmDelete, onCloseConfirmDelete, cancelDeleteRef
  } = useDelete();

  return (
    <Form method="post" onSubmit={handleDeleteSubmit}>
      <DeleteConfirmation
        identifier={identifier}
        isOpen={confirmDeleteIsOpen}
        isDeleting={isProcessing}
        onConfirm={onConfirmDelete}
        onCancel={onCloseConfirmDelete}
        cancelRef={cancelDeleteRef}
      />
      <input
        type="hidden"
        name={METHOD_IDENTIFIER}
        value={DELETE_METHOD}
      />
      {children}
    </Form>
  )
}