import React, { createContext, useContext, useState } from 'react';

export const ContextValue = createContext();

export const useInputContex = () => {
  return useContext(ContextValue);
};

export const Context = ({ children }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  return (
    <ContextValue.Provider
      value={{
        nameValue: name,
        addName: setName,
        numberValue: number,
        addNumber: setNumber,
      }}
    >
      {children}
    </ContextValue.Provider>
  );
};
