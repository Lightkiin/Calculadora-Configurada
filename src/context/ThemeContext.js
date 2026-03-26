import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(true);

  const theme = {
    darkMode,
    colors: darkMode
      ? {
          background: '#121212',
          text: '#fff',
          button: '#333',
        }
      : {
          background: '#f5f5f5',
          text: '#000',
          button: '#ddd',
        },
  };

  return (
    <ThemeContext.Provider value={{ theme, darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}