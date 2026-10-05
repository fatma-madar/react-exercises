import { createContext, useContext, useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

//  إنشاء السياق
const ThemeContext = createContext();

// المزوّد Provider
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useLocalStorage('theme', 'light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

//  هوك مختصر للاستخدام
export function useTheme() {
  return useContext(ThemeContext);
}