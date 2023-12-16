import React, { useRef, forwardRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { TINYMCE_API_KEY, tinymceEditorConfig } from "../constants";
import { Box, Flex, Button } from "@chakra-ui/react";
import CustomSelect from "./Shared/CustomSelect";
import { extractTextFromHTML } from "../utility";

const TinymceEditor = forwardRef((props, ref) => {
  const {
    handleAddField,
    handleSelectionChange,
    handleSelectTemplate,
    handleSaveAsTemplate,
  } = props;

  const tinymceEditorRef = useRef(null);

  const onEditorInit = (event, editor) => {
    tinymceEditorRef.current = editor;
    editor.on("selectionchange", (e) => {
      handleSelectionChange(e, tinymceEditorRef.current);
    });
  };

  const handleAddVariableButtonClick = () => {
    const editor = tinymceEditorRef.current;
    const selectionContent = editor.selection.getContent();
    const text = extractTextFromHTML(selectionContent);
    const id = handleAddField(text);
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
          ref={ref}
          onClick={handleAddVariableButtonClick}
          mr={4}
          variant="solid"
        >
          Add Variable
        </Button>
        <CustomSelect
          width="200px"
          mr={4}
          options={["Template 1", "Template 2", "Template 3"]}
          onSelect={handleSelectTemplate}
        />
        <Button
          onClick={handleSaveAsTemplate}
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
});

export default TinymceEditor;
