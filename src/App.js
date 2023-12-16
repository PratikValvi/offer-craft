import React, { useRef, useState } from "react";
import TinymceEditor from "./Components/TinymceEditor";
import OfferLetterForm from "./Components/OfferLetterForm";
import { Container, Grid } from "@chakra-ui/react";
import NavBar from "./Components/NavBar";
import { enableButton, disableButton } from "./utility";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const addVariableButtonRef = useRef(null);

  const [editingField, setEditingField] = useState(null);
  const [formFields, setFormFields] = useState([
    { id: uuidv4(), label: "Field", value: "Value" },
    { id: uuidv4(), label: "Field", value: "Value" },
    // Add more fields as needed
  ]);

  const handleAddField = (value) => {
    const newField = { id: uuidv4(), label: "Field", value: value };
    setFormFields([newField, ...formFields]);
    return newField.id;
  };

  const handleEditField = (fieldId) => {
    setEditingField(fieldId === editingField ? null : fieldId);
  };

  const handleLabelChange = (fieldId, newLabel) => {
    const updatedFields = formFields.map((field) => {
      if (field.id === fieldId) {
        return { ...field, label: newLabel };
      }
      return field;
    });
    setFormFields(updatedFields);
  };

  const handleInputChange = (e, fieldId) => {
    const updatedFields = formFields.map((field) => {
      if (field.id === fieldId) {
        return { ...field, value: e.target.value };
      }
      return field;
    });
    setFormFields(updatedFields);
  };

  const handleDeleteField = (fieldId) => {
    const updatedFields = formFields.filter((field) => field.id !== fieldId);
    setFormFields(updatedFields);
  };

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

  const handleSelectTemplate = (selectedTemplate) => {
    console.log("Selected Template: ", selectedTemplate);
  };

  return (
    <>
      <NavBar />
      <Container maxW="100%" p={2} centerContent>
        <Grid
          templateColumns={{ base: "100%", md: "3fr 1fr" }}
          gap={4}
          w="100%"
        >
          <TinymceEditor
            ref={addVariableButtonRef}
            handleSelectionChange={handleSelectionChange}
            handleAddField={handleAddField}
            handleSelectTemplate={handleSelectTemplate}
          />
          <OfferLetterForm
            editingField={editingField}
            formFields={formFields}
            ref={addVariableButtonRef}
            handleEditField={handleEditField}
            handleLabelChange={handleLabelChange}
            handleInputChange={handleInputChange}
            handleDeleteField={handleDeleteField}
          />
        </Grid>
      </Container>
    </>
  );
};

export default App;
