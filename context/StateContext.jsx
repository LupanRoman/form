import { createContext, useState } from 'react';

const StateContext = createContext();

export function ContextProvider({ children }) {
  let planType;

  const planSelection = (e) => {
    planType = e.target.id;
    console.log(planType);
  };


  return (
    <StateContext.Provider
      value={{
        planSelection,
      }}
    >
      {children}
    </StateContext.Provider>
  );
}

export default StateContext;
