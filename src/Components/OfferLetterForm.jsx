import React, { useState, forwardRef } from "react";
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  IconButton,
  Button,
} from "@chakra-ui/react";
import { EditIcon, CheckIcon, DeleteIcon } from "@chakra-ui/icons";
import { v4 as uuidv4 } from "uuid";

const OfferLetterForm = forwardRef((props, ref) => {
  const [editingField, setEditingField] = useState(null);
  const [formFields, setFormFields] = useState([
    { id: uuidv4(), label: "Field", value: "Value" },
    { id: uuidv4(), label: "Field", value: "Value" },
    // Add more fields as needed
  ]);

  const handleInputChange = (e, fieldId) => {
    const updatedFields = formFields.map((field) => {
      if (field.id === fieldId) {
        return { ...field, value: e.target.value };
      }
      return field;
    });
    setFormFields(updatedFields);
  };

  const handleLabelEdit = (fieldId, newLabel) => {
    const updatedFields = formFields.map((field) => {
      if (field.id === fieldId) {
        return { ...field, label: newLabel };
      }
      return field;
    });
    setFormFields(updatedFields);
  };

  const handleAddField = () => {
    const newField = { id: uuidv4(), label: "Field", value: "Value" };
    setFormFields([newField, ...formFields]);
  };

  const handleEditField = (fieldId) => {
    setEditingField(fieldId === editingField ? null : fieldId);
  };

  const handleDeleteField = (fieldId) => {
    const updatedFields = formFields.filter((field) => field.id !== fieldId);
    setFormFields(updatedFields);
  };

  return (
    <Box>
      <Button
        ref={ref}
        mb={4}
        onClick={handleAddField}
        className="btn-disabled"
      >
        Add Variable
      </Button>
      <Box overflowY="auto" maxHeight="400px">
        {formFields.map((field) => (
          <Flex
            key={field.id}
            mb={4}
            alignItems="flex-start"
            flexDirection="column"
          >
            {editingField === field.id ? (
              <FormControl mb={3} pr={2}>
                <Input
                  value={field.label}
                  onChange={(e) => handleLabelEdit(field.id, e.target.value)}
                  px={2}
                />
              </FormControl>
            ) : (
              <Box mb={2}>
                <FormLabel>{field.label}</FormLabel>
              </Box>
            )}
            <Flex alignItems="center" width="100%" mb={2}>
              <FormControl
                isDisabled={editingField !== field.id}
                flex="1"
                mr={{ base: 0, md: 4 }}
              >
                <Input
                  value={field.value}
                  onChange={(e) => handleInputChange(e, field.id)}
                  px={2}
                />
              </FormControl>
              <IconButton
                aria-label={
                  editingField === field.id ? "Finish Editing" : "Edit"
                }
                icon={editingField === field.id ? <CheckIcon /> : <EditIcon />}
                onClick={() => handleEditField(field.id)}
                alignSelf="center"
                mr={2}
              />
              <IconButton
                aria-label="Delete"
                icon={<DeleteIcon />}
                onClick={() => handleDeleteField(field.id)}
                alignSelf="center"
                mr={2}
              />
            </Flex>
          </Flex>
        ))}
      </Box>
    </Box>
  );
});

export default OfferLetterForm;
