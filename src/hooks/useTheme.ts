import { useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

/**
 * Custom hook for managing theme (dark/light mode)
 * Saves theme preference to localStorage for persistence
 *
 * @returns {Object} Theme controls - current theme and toggle function
 */
export function useTheme() {
  // Check for saved theme preference or use system preference
  const getInitialTheme = (): Theme => {
    // Check if we're in the browser
    if (typeof window !== 'undefined') {
      // Look for saved preference in localStorage
      const savedTheme = localStorage.getItem('theme') as Theme | null;

      if (savedTheme) {
        return savedTheme;
      }

      // Check for system preference
      const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      return userPrefersDark ? 'dark' : 'light';
    }

    // Default to light theme
    return 'light';
  };

  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  // Apply theme class to document
  useEffect(() => {
    const root = window.document.documentElement;

    // Remove both classes first to ensure clean state
    root.classList.remove('light', 'dark');

    // Add current theme class
    root.classList.add(theme);

    // Save preference to localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Function to toggle between themes
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return { theme, toggleTheme };
}

export default useTheme;
