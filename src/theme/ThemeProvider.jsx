import React from 'react';
import { brandConfig } from './brandConfig';

// Create a React context for the theme
export const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
  return (
    <ThemeContext.Provider value={brandConfig}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use theme
export const useTheme = () => {
  const theme = React.useContext(ThemeContext);
  
  if (!theme) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  
  return theme;
};