
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

// Define available languages
export type Language = "en" | "th";

// Type for our localization context
type LocalizationContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: string) => string;
};

// Create the context
const LocalizationContext = createContext<LocalizationContextType | undefined>(undefined);

// Translations
const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navbar
    "home": "Home",
    "about": "About",
    "services": "Services",
    "portfolio": "Portfolio",
    "team": "Team",
    "contact": "Contact Us",
    
    
    // Team section
    "team.title": "Our Team",
    "team.subtitle": "Meet The Experts",
    
    // Footer
    "footer.quickLinks": "Quick Links",
    "footer.services": "Services",
    "footer.contact": "Contact",
    "footer.rights": "© 2025 I Progress X Co., Ltd. All rights reserved.",
    
    // Common
    "readMore": "Read More",
    "viewAll": "View All",
    "learnMore": "Learn More",
  },
  th: {
    // Navbar
    "home": "หน้าแรก",
    "about": "เกี่ยวกับเรา",
    "services": "บริการ",
    "portfolio": "ผลงาน",
    "team": "ทีมงาน",
    "contact": "ติดต่อเรา",
    
    // Team section
    "team.title": "ทีมของเรา",
    "team.subtitle": "พบกับผู้เชี่ยวชาญ",
    
    // Footer
    "footer.quickLinks": "ลิงค์ด่วน",
    "footer.services": "บริการ",
    "footer.contact": "ติดต่อ",
    "footer.rights": "© 2025 I Progress X Co., Ltd. สงวนลิขสิทธิ์",
    
    // Common
    "readMore": "อ่านเพิ่มเติม",
    "viewAll": "ดูทั้งหมด",
    "learnMore": "เรียนรู้เพิ่มเติม",
  },
};

// Provider component
export const LocalizationProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    // Get saved language from localStorage or default to Thai
    const savedLang = localStorage.getItem("language") as Language;
    return savedLang || "th";
  });

  // Save language preference to localStorage
  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  // Toggle between languages
  const toggleLanguage = () => {
    setLanguage(language === "en" ? "th" : "en");
  };

  // Translation function
  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LocalizationContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LocalizationContext.Provider>
  );
};

// Custom hook for using localization in components
export const useLocalization = () => {
  const context = useContext(LocalizationContext);
  if (context === undefined) {
    throw new Error("useLocalization must be used within a LocalizationProvider");
  }
  return context;
};
