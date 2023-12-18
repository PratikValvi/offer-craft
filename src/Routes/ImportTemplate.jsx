import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Textarea,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
} from "@chakra-ui/react";
import { useAppContext } from "../Contexts/AppContext";
import { actionType } from "../Reducers/AppReducer";

const ImportTemplate = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useAppContext();
  const initialRef = useRef(null);
  const [templateName, setTemplateName] = useState("");
  const [jsonData, setJsonData] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    setIsOpen(true);
  };

  const handleInsertClick = () => {
    dispatch({
      type: actionType.SET_IMPORTED_TEMPLATE,
      payload: {
        name: templateName,
        body: jsonData,
      },
    });
    navigate("/home");
    setIsOpen(false);
    setTemplateName("");
    setJsonData("");
  };

  const isDisabled =
    templateName.length === 0 ||
    jsonData.length === 0 ||
    state.templatesNameRecord[templateName];

  return (
    <Box
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Button colorScheme="blue" onClick={handleButtonClick}>
        Import JSON
      </Button>
      <Modal isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Import Template as JSON</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl mb={2}>
              <FormLabel>Template Name</FormLabel>
              <Input
                ref={initialRef}
                placeholder="Enter Template Name"
                onChange={(e) => setTemplateName(e.target.value)}
              />
            </FormControl>
            <Textarea
              placeholder="Paste valid JSON here..."
              height="200px"
              value={jsonData}
              onChange={(e) => setJsonData(e.target.value)}
            />
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="teal"
              mr={4}
              variant="outline"
              onClick={() => setIsOpen(false)}
            >
              Cancel
            </Button>
            <Button
              colorScheme="teal"
              variant="solid"
              onClick={handleInsertClick}
              isDisabled={isDisabled}
            >
              Insert
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default ImportTemplate;
