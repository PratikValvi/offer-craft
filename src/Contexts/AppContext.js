import { createContext, useReducer, useContext } from "react";
import { initialState, reducer } from "../Reducers/AppReducer";

export const AppContext = createContext(null);

export const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
