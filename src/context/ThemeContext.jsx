import { createContext, useContext, useState } from 'react';

//  إنشاء السياق
const ThemeContext = createContext();

// المزوّد Provider
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

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