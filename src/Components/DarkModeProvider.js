import React, { createContext, useContext } from 'react';
import { useColorScheme } from 'react-native';


const DarkModeContext = createContext();


export const DarkModeProvider = ({ children }) => {
  const colorScheme = useColorScheme(); 
  const isDarkMode = colorScheme === 'dark';

  return (
    <DarkModeContext.Provider value={isDarkMode}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = () => useContext(DarkModeContext);
