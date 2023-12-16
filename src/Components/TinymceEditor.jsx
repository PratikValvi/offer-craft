import React, { useRef } from "react";

import { v4 as uuidv4 } from "uuid";

import { Box, Button, Flex } from "@chakra-ui/react";
import { Editor } from "@tinymce/tinymce-react";

import { TINYMCE_API_KEY, tinymceEditorConfig } from "../constants";
import { useFormContext } from "../Contexts/FormContext";
import { actionType } from "../Reducers/FormReducer";
import { disableButton, enableButton, extractTextFromHTML } from "../utility";
import CustomSelect from "./Shared/CustomSelect";

const TinymceEditor = () => {
  const tinymceEditorRef = useRef(null);
  const addVariableButtonRef = useRef(null);
  const { dispatch } = useFormContext();

  const handleSelectionChange = (e, editor) => {
    if (addVariableButtonRef.current) {
      const selectionContent = editor.selection.getContent();
      const addVariableButton = addVariableButtonRef.current;
      if (selectionContent && selectionContent.length > 0) {
        enableButton(addVariableButton);
      } else {
        disableButton(addVariableButton);
      }
    }
  };

  const onEditorInit = (event, editor) => {
    tinymceEditorRef.current = editor;
    editor.on("selectionchange", (e) => {
      handleSelectionChange(e, tinymceEditorRef.current);
    });
  };

  const handleAddVariable = () => {
    const editor = tinymceEditorRef.current;
    const selectionContent = editor.selection.getContent();
    const text = extractTextFromHTML(selectionContent);
    const id = uuidv4();
    const newVariable = {
      id: id,
      label: "Label",
      value: text,
    };
    dispatch({ type: actionType.ADD_VARIABLE, payload: newVariable });
    const contentToReplace = `<dfn id="${id}">${text}</dfn>`;
    editor.selection.setContent(contentToReplace);
  };

  const handleExportPDF = () => {
    console.log("Export PDF");
  };

  return (
    <Box>
      <Flex justifyContent="flex-start" mb={4}>
        <Button
          ref={addVariableButtonRef}
          onClick={handleAddVariable}
          mr={4}
          variant="solid"
        >
          Add Variable
        </Button>
        <CustomSelect
          width="200px"
          mr={4}
          options={["Template 1", "Template 2", "Template 3"]}
          onSelect={() => {}}
        />
        <Button
          onClick={() => {}}
          mr={4}
          variant="solid"
          colorScheme="teal"
          _hover={{ bg: "teal.500" }}
        >
          Save As Template
        </Button>
        <Button
          onClick={handleExportPDF}
          variant="solid"
          colorScheme="purple"
          _hover={{ bg: "purple.500" }}
        >
          Export PDF
        </Button>
      </Flex>
      <Editor
        apiKey={process.env.TINYMCE_API_KEY ?? TINYMCE_API_KEY}
        onInit={onEditorInit}
        initialValue="<p>This is the initial content of the editor.</p>"
        init={tinymceEditorConfig}
      />
    </Box>
  );
};

export default TinymceEditor;
