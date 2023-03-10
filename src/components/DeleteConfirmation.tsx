import {
  AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter,
  AlertDialogHeader, AlertDialogOverlay, Button
} from "@chakra-ui/react";

interface Props {
  identifier: string;
  isOpen: boolean
  isDeleting: boolean
  onConfirm: () => void
  onCancel: () => void
  cancelRef: any
}

export function DeleteConfirmation (props: Props) {
  const { identifier, isOpen, isDeleting, onConfirm, onCancel, cancelRef } = props

  return (
    <AlertDialog isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onCancel}>
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="sm" fontWeight="bold">
            Delete {identifier}
          </AlertDialogHeader>
          <AlertDialogBody fontSize="sm">
            Are you sure? You cant undo this action afterwards.
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button fontSize="sm" ref={cancelRef} onClick={onCancel} disabled={isDeleting}>
              Cancel
            </Button>
            <Button fontSize="sm" colorScheme="red" onClick={onConfirm} ml={3} disabled={isDeleting}>
              {!isDeleting && "Delete"}
              {isDeleting && "Deleting..."}
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  )
}
