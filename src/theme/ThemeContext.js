import React, { createContext, useContext, useState } from 'react';
import { DarkTheme, LightTheme } from './Theme';

const ThemeContext = createContext({
  theme: DarkTheme,
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(DarkTheme);

  const toggleTheme = () => {
    setTheme(prevTheme =>
      prevTheme.mode === 'dark' ? LightTheme : DarkTheme
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
