import { defaultTemplateJSON, defaultTempleName } from "../constants";

export const initialState = {
  editingVariableId: "",
  editingVariable: {
    id: "",
    label: "",
    value: "",
  },
  variablesList: [],
  templatesList: [
    {
      name: defaultTempleName,
      body: defaultTemplateJSON,
    },
  ],
  templatesNameRecord: {
    [defaultTempleName]: defaultTemplateJSON,
  },
  importedTemplate: {
    name: "",
    body: "",
  },
};

export const actionType = {
  SET_EDITING_VARIABLE_ID: "SET_EDITING_VARIABLE_ID",
  ADD_VARIABLE: "ADD_VARIABLE",
  SET_VARIABLE_LABEL: "SET_VARIABLE_LABEL",
  SET_VARIABLE_VALUE: "SET_VARIABLE_VALUE",
  DELETE_VARIABLE: "DELETE_VARIABLE",
  ADD_TEMPLATE: "ADD_TEMPLATE",
  CLEAR_VARIABLES: "CLEAR_VARIABLES",
  SET_IMPORTED_TEMPLATE: "SET_IMPORTED_TEMPLATE",
  CLEAR_IMPORTED_TEMPLATE: "CLEAR_IMPORTED_TEMPLATE",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case actionType.ADD_VARIABLE: {
      const { variablesList } = state;
      const newVariable = action.payload;
      return {
        ...state,
        variablesList: [newVariable, ...variablesList],
      };
    }
    case actionType.SET_EDITING_VARIABLE_ID: {
      const { editingVariableId, editingVariable } = state;
      const id = action.payload;
      const newId = editingVariableId === id ? "" : id;
      return {
        ...state,
        editingVariableId: newId,
        editingVariable: {
          ...editingVariable,
          id: newId,
        },
      };
    }
    case actionType.SET_VARIABLE_LABEL: {
      const { variablesList, editingVariable } = state;
      const { variableId, newLabel } = action.payload;
      const updatedVariableList = variablesList.map((variable) => {
        if (variable.id === variableId) {
          return {
            ...variable,
            label: newLabel,
          };
        }
        return variable;
      });
      return {
        ...state,
        variablesList: updatedVariableList,
        editingVariable: {
          ...editingVariable,
          label: newLabel,
        },
      };
    }
    case actionType.SET_VARIABLE_VALUE: {
      const { variablesList, editingVariable } = state;
      const { variableId, newValue } = action.payload;
      const updatedVariableList = variablesList.map((variable) => {
        if (variable.id === variableId) {
          return {
            ...variable,
            value: newValue,
          };
        }
        return variable;
      });
      return {
        ...state,
        variablesList: updatedVariableList,
        editingVariable: {
          ...editingVariable,
          value: newValue,
        },
      };
    }
    case actionType.DELETE_VARIABLE: {
      const { variablesList } = state;
      const variableId = action.payload;
      const updatedVariableList = variablesList.filter(
        (variable) => variable.id !== variableId
      );
      return {
        ...state,
        variablesList: updatedVariableList,
      };
    }
    case actionType.ADD_TEMPLATE: {
      const { templatesList, templatesNameRecord } = state;
      const newTemplate = action.payload;
      const newRecord = { ...templatesNameRecord };
      newRecord[newTemplate.name] = newTemplate.body;
      return {
        ...state,
        templatesList: [newTemplate, ...templatesList],
        templatesNameRecord: newRecord,
      };
    }
    case actionType.CLEAR_VARIABLES: {
      return {
        ...state,
        editingVariableId: "",
        editingVariable: {
          id: "",
          label: "",
          value: "",
        },
        variablesList: [],
      };
    }
    case actionType.SET_IMPORTED_TEMPLATE: {
      const importedTemplate = action.payload;
      return {
        ...state,
        importedTemplate: {
          name: importedTemplate.name,
          body: importedTemplate.body,
        },
      };
    }
    case actionType.CLEAR_IMPORTED_TEMPLATE: {
      return {
        ...state,
        importedTemplate: {
          name: "",
          body: "",
        },
      };
    }
    default:
      return state;
  }
};
