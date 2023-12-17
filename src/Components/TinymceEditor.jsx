import React, { useRef, useEffect, useState } from "react";

import { v4 as uuidv4 } from "uuid";

import { Box, Button, Flex, Skeleton, useDisclosure } from "@chakra-ui/react";
import { Editor } from "@tinymce/tinymce-react";

import {
  TINYMCE_API_KEY,
  tinymceEditorConfig,
  initialValue,
} from "../constants";
import { useAppContext } from "../Contexts/AppContext";
import { actionType } from "../Reducers/AppReducer";
import { disableButton, enableButton, extractTextFromHTML } from "../utility";
import CustomSelect from "./Shared/CustomSelect";
import { HTMLToJSON, JSONToHTML } from "html-to-json-parser";
import SaveAsTemplateModal from "./Shared/SaveAsTemplateModal";
import { jsPDF } from "jspdf";

const TinymceEditor = () => {
  const tinymceEditorRef = useRef(null);
  const addVariableButtonRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const { state, dispatch } = useAppContext();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [templateName, setTemplateName] = useState("");

  useEffect(() => {
    if (state.editingVariable.id && state.editingVariable.value) {
      const editor = tinymceEditorRef.current;
      const id = state.editingVariable.id;
      const newValue = state.editingVariable.value;
      editor.dom.setHTML(editor.dom.get(id), newValue);
    }
  }, [state.editingVariable]);

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
    setIsLoaded(true);
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

  const handleSelectTemplate = async (e) => {
    const templateName = e.target.value;
    if (!templateName) return;
    try {
      const editor = tinymceEditorRef.current;
      const template = state.templatesList.find(
        (template) => template.name === templateName
      );
      const editorBodyJSON = template.body;
      const editorBodyHTML = await JSONToHTML(editorBodyJSON, true);
      const editorBodyElement = new DOMParser().parseFromString(
        editorBodyHTML,
        "text/html"
      ).body;
      editor.setContent(editorBodyElement.innerHTML, { format: "html" });
      dispatch({ type: actionType.CLEAR_VARIABLES });
    } catch (error) {
      console.log("Error Parsing JSON to Editor Body: ", error);
    }
  };

  const handleSave = async () => {
    try {
      const editor = tinymceEditorRef.current;
      editor.dom.setOuterHTML(editor.dom.select("dfn"), "______");
      const editorBodyHTML = editor.getBody();
      const editorBodyJSON = await HTMLToJSON(editorBodyHTML, true);
      const templateObj = {
        name: templateName,
        body: editorBodyJSON,
      };
      dispatch({ type: actionType.ADD_TEMPLATE, payload: templateObj });
    } catch (error) {
      console.log("Error Parsing Editor Body to JSON: ", error);
    } finally {
      setTemplateName("");
      onClose();
    }
  };

  const handleExportPDF = () => {
    const editor = tinymceEditorRef.current;
    const editorContent = editor.getContent();
    const text = extractTextFromHTML(editorContent);
    const doc = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });
    const maxWidth = 200;
    const splitText = doc.splitTextToSize(text, maxWidth);
    doc.setFontSize(14);
    doc.text(splitText, 20, 20);
    doc.save("OfferLeter.pdf");
  };

  const templateNamesList = state.templatesList.map(
    (template) => template.name
  );
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
          options={templateNamesList}
          onSelect={handleSelectTemplate}
        />
        <Button
          onClick={onOpen}
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
      <Skeleton
        isLoaded={isLoaded}
        fadeDuration={2}
        height={tinymceEditorConfig.height}
      >
        <Editor
          apiKey={process.env.TINYMCE_API_KEY ?? TINYMCE_API_KEY}
          onInit={onEditorInit}
          initialValue={initialValue}
          init={tinymceEditorConfig}
        />
      </Skeleton>
      <SaveAsTemplateModal
        isOpen={isOpen}
        onClose={onClose}
        templateName={templateName}
        setTemplateName={setTemplateName}
        handleSave={handleSave}
        templatesNameRecord={state.templatesNameRecord}
      />
    </Box>
  );
};

export default TinymceEditor;
