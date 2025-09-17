import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'dark' | 'light' | 'red' | 'green' | 'purple' | 'sunset';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  themes: { value: Theme; label: string; colors: string[] }[];
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const themes = [
  { 
    value: 'dark' as Theme, 
    label: 'Dark', 
    colors: ['#0a0a0f', '#00ff87', '#a855f7'] 
  },
  { 
    value: 'light' as Theme, 
    label: 'Light', 
    colors: ['#ffffff', '#00ff87', '#64748b'] 
  },
  { 
    value: 'red' as Theme, 
    label: 'Red Neon', 
    colors: ['#0a0a0a', '#ff3b30', '#ff6b6b'] 
  },
  { 
    value: 'green' as Theme, 
    label: 'Matrix Green', 
    colors: ['#0f1a0f', '#00ff41', '#32d74b'] 
  },
  { 
    value: 'purple' as Theme, 
    label: 'Cyber Purple', 
    colors: ['#0f0a1a', '#a855f7', '#c084fc'] 
  },
  { 
    value: 'sunset' as Theme, 
    label: 'Sunset Mix', 
    colors: ['#1a0f08', '#ff6b35', '#ffa726'] 
  },
];

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    const stored = localStorage.getItem('theme') as Theme;
    if (stored && themes.some(t => t.value === stored)) {
      setTheme(stored);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}