
import { createContext, useContext, useEffect, useState } from "react";
import { initPreline } from "@/utils/prelineInit";

type Theme = "dark" | "light";

type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    // Check localStorage first, then prefer-color-scheme, default to light
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem("theme") as Theme;
      if (savedTheme) return savedTheme;
      
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      return prefersDark ? "dark" : "light";
    }
    return "light";
  });

  useEffect(() => {
    // Update localStorage and document class when theme changes
    localStorage.setItem("theme", theme);
    const root = window.document.documentElement;
    
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    
    // Set the data attribute for Preline
    document.querySelector('html')?.setAttribute('data-hs-theme', theme);
    
    // Re-initialize Preline when theme changes
    initPreline();

    // Manually update the active class for hs-dark-mode buttons
    const buttons = document.querySelectorAll('.hs-dark-mode');
    buttons.forEach(button => {
      if (theme === 'dark') {
        button.classList.add('hs-dark-mode-active');
      } else {
        button.classList.remove('hs-dark-mode-active');
      }
    });
  }, [theme]);

  useEffect(() => {
    // Set up listeners for Preline theme switch clicks
    const setupPrelineListeners = () => {
      const themeToggles = document.querySelectorAll('.hs-dark-mode');
      
      if (themeToggles.length > 0) {
        themeToggles.forEach((toggle) => {
          toggle.addEventListener('click', (e) => {
            if (e.currentTarget instanceof HTMLElement) {
              const themeValue = e.currentTarget.getAttribute('data-hs-theme-click-value');
              if (themeValue === 'dark' || themeValue === 'light') {
                setTheme(themeValue);
                
                // Update the active class immediately
                const buttons = document.querySelectorAll('.hs-dark-mode');
                buttons.forEach(btn => {
                  if (themeValue === 'dark') {
                    btn.classList.add('hs-dark-mode-active');
                  } else {
                    btn.classList.remove('hs-dark-mode-active');
                  }
                });
              }
            }
          });
        });
      }
    };
    
    // Run once on mount
    setupPrelineListeners();
    
    // Clean up listeners on unmount
    return () => {
      const themeToggles = document.querySelectorAll('.hs-dark-mode');
      themeToggles.forEach((toggle) => {
        toggle.removeEventListener('click', () => {});
      });
    };
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
