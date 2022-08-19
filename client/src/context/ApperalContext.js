import { createContext, useReducer } from "react";

export const ApperalContext = createContext();

export const apperalReducer = (state, action) => {
  switch (action.type) {
    case "SET_Apperal":
      return {
        apperal: action.payload,
      };
    case "CREATE_Apperal":
      return {
        apperal: [action.payload, ...state.apperal],
      };
    case "DELETE_Apperal":
      return {
        apperal: state.apperal.filter((w) => w._id !== action.payload._id),
      };
    default:
      return state;
  }
};

export const ApperalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(apperalReducer, {
    apperal: null,
  });

  return <ApperalContext.Provider value={{ ...state, dispatch }}>{children}</ApperalContext.Provider>;
};
