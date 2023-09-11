import React, { createContext, useReducer } from "react";

export const AppContext = createContext();

const initialState = {
  carts: localStorage.getItem("carts")
    ? JSON.parse(localStorage.getItem("carts") || "")
    : [],
  alert: {
    isOpen: false,
    message: "item added to cart",
    timer: 3000,
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_CART":
      localStorage.setItem("carts", JSON.stringify(action.payload));
      return {
        ...state,
        carts: action.payload,
      };
    case "SET_ALERT":
      return {
        ...state,
        alert: action.payload,
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
