import React, { createContext, useContext } from 'react';
import useTheme from '../hooks/useTheme';

// Define context type
type ThemeContextType = {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
};

// Create context with default values
const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => {},
});

/**
 * Custom hook to access theme context
 *
 * @returns Theme context values
 */
export const useThemeContext = () => useContext(ThemeContext);

/**
 * Theme provider component to wrap app with theme context
 *
 * @param {React.ReactNode} children - Child components
 */
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const themeControls = useTheme();

  return <ThemeContext.Provider value={themeControls}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
