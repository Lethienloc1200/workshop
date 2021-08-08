import React, { createContext, useContext, useReducer } from "react";


export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//doi chieu qua Product
export const useStateValue= () => useContext(StateContext);