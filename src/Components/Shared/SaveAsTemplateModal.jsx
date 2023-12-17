import React, { useRef } from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";

const SaveAsTemplateModal = ({
  isOpen,
  onClose,
  templateName,
  setTemplateName,
  handleSave,
  templatesNameRecord,
}) => {
  const initialRef = useRef(null);
  const isDisabled =
    templateName.length === 0 || templatesNameRecord[templateName];
  return (
    <>
      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Save Content as Template</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Template Name</FormLabel>
              <Input
                ref={initialRef}
                placeholder="Enter Template Name"
                onChange={(e) => setTemplateName(e.target.value)}
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="teal"
              variant="outline"
              onClick={() => {
                setTemplateName("");
                onClose();
              }}
            >
              Cancel
            </Button>
            <Button
              colorScheme="teal"
              variant="solid"
              ml={3}
              onClick={handleSave}
              isDisabled={isDisabled}
            >
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SaveAsTemplateModal;
