import React from "react";
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  IconButton,
  Heading,
} from "@chakra-ui/react";
import { EditIcon, CheckIcon, DeleteIcon } from "@chakra-ui/icons";

const OfferLetterForm = (props) => {
  const {
    editingField,
    formFields,
    handleEditField,
    handleLabelChange,
    handleInputChange,
    handleDeleteField,
  } = props;

  return (
    <Box>
      <Heading as="h2" textAlign="center" mb={4}>
        Variables
      </Heading>
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
                  onChange={(e) => handleLabelChange(field.id, e.target.value)}
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
};

export default OfferLetterForm;
