
import { Button } from "@/components/ui/button";
import { useLocalization } from "@/contexts/LocalizationContext";

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLocalization();

  return (
    <Button 
      onClick={toggleLanguage} 
      variant="ghost" 
      size="sm" 
      className="font-medium"
    >
      {language === "en" ? "TH" : "EN"}
    </Button>
  );
};

export default LanguageToggle;
