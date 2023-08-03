/*
Article heere: https://www.js-craft.io/blog/using-react-context-nextjs-13/
*/

"use client";
import { createContext, useContext, useState } from "react";

const ThemeContext = createContext({});

export const ContextProvider = ({ children }) => {
  const [name, setName] = useState();
  return (
    <ThemeContext.Provider value={{ name, setName }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
