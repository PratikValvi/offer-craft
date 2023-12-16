import React from 'react';

import {
  CheckIcon,
  DeleteIcon,
  EditIcon,
} from '@chakra-ui/icons';
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Input,
} from '@chakra-ui/react';

import { useFormContext } from '../Contexts/FormContext';
import { actionType } from '../Reducers/FormReducer';

const OfferLetterForm = () => {
  const { state, dispatch } = useFormContext();
  const { editingVariableId, variablesList } = state;

  const handleEditVariable = (variableId) => {
    dispatch({ type: actionType.SET_EDITING_VARIABLE_ID, payload: variableId });
  };

  const handleLabelChange = (e, variableId) => {
    const payload = {
      variableId: variableId,
      newLabel: e.target.value,
    };
    dispatch({ type: actionType.SET_VARIABLE_LABEL, payload: payload });
  };

  const handleValueChange = (e, variableId) => {
    const payload = {
      variableId: variableId,
      newValue: e.target.value,
    };
    dispatch({ type: actionType.SET_VARIABLE_VALUE, payload: payload });
  };

  const handleDeleteVariable = (variableId) => {
    dispatch({ type: actionType.DELETE_VARIABLE, payload: variableId });
  };

  return (
    <Box>
      <Heading as="h2" textAlign="center" mb={4}>
        Variables
      </Heading>
      <Box overflowY="auto" maxHeight="400px">
        {variablesList.map((variable) => (
          <Flex
            key={variable.id}
            mb={4}
            alignItems="flex-start"
            flexDirection="column"
          >
            {editingVariableId === variable.id ? (
              <FormControl mb={3} pr={2}>
                <Input
                  value={variable.label}
                  onChange={(e) => handleLabelChange(e, variable.id)}
                  px={2}
                />
              </FormControl>
            ) : (
              <Box mb={2}>
                <FormLabel>{variable.label}</FormLabel>
              </Box>
            )}
            <Flex alignItems="center" width="100%" mb={2}>
              <FormControl
                isDisabled={editingVariableId !== variable.id}
                flex="1"
                mr={{ base: 0, md: 4 }}
              >
                <Input
                  value={variable.value}
                  onChange={(e) => handleValueChange(e, variable.id)}
                  px={2}
                />
              </FormControl>
              <IconButton
                aria-label={
                  editingVariableId === variable.id ? "Finish Editing" : "Edit"
                }
                icon={
                  editingVariableId === variable.id ? (
                    <CheckIcon />
                  ) : (
                    <EditIcon />
                  )
                }
                onClick={() => handleEditVariable(variable.id)}
                alignSelf="center"
                mr={2}
              />
              <IconButton
                aria-label="Delete"
                icon={<DeleteIcon />}
                onClick={() => handleDeleteVariable(variable.id)}
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
