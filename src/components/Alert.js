import React, { useEffect, useContext } from "react";
import { AppContext } from "../context/AppContext";

const Alert = () => {
  const [state, dispatch] = useContext(AppContext);
  const { isOpen, message, timer } = state.alert;

  useEffect(() => {
    let timeout = setTimeout(() => {
      dispatch({
        type: "SET_ALERT",
        payload: {
          isOpen: false,
          message: message,
          timer: timer,
        },
      });
      clearTimeout(timeout);
    }, timer);
  }, [isOpen, timer]);

  return (
    <div id="slider" className={!isOpen ? "slide-out" : "slide-in"}>
      {message}
    </div>
  );
};

export default Alert;
