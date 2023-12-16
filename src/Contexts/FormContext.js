import { createContext, useReducer, useContext } from "react";
import { initialState, reducer } from "../Reducers/FormReducer";

export const FormContext = createContext(null);

export const FormContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <FormContext.Provider value={{ state, dispatch }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  return useContext(FormContext);
};
