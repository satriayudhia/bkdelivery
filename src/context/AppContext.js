import React, { createContext, useReducer } from "react";

export const AppContext = createContext();

const initialState = {
  carts: localStorage.getItem("carts")
    ? JSON.parse(localStorage.getItem("carts") || "")
    : [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_CART":
      localStorage.setItem("carts", JSON.stringify(action.payload));
      return {
        ...state,
        carts: action.payload,
      };
    default:
      throw new Error();
  }
};

export const AppContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={[state, dispatch]}>
      {props.children}
    </AppContext.Provider>
  );
};
