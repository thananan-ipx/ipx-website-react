import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useTheme } from "./ThemeProvider";
import { useLocalization } from "@/contexts/LocalizationContext";
import LanguageToggle from "./LanguageToggle";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const { t } = useLocalization();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const navItems = [
    { path: "/", label: "home" },
    { path: "/about", label: "about" },
    { path: "/services", label: "services" },
    { path: "/portfolio", label: "portfolio" },
    { path: "/team", label: "team" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 hs-navbar ${
        isScrolled ? "bg-background/90 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between py-4 md:py-6">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="/lovable-uploads/IProgressX.png"
            alt="I Progress X Logo"
            className="h-10 w-auto"
          />
          {/* <span className="text-xl font-bold tracking-tight">
            I Progress X
          </span> */}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hs-navbar hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="hs-nav-link text-sm font-medium hover:text-primary transition-colors"
            >
              {t(item.label)}
            </Link>
          ))}
          <LanguageToggle />
          <button
            onClick={toggleTheme}
            className="hs-dark-mode-toggle text-gray-600 dark:text-neutral-200 focus:outline-none"
            aria-label="Toggle Theme"
          >
            {theme === "light" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="4"></circle>
                <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2m16 0h2m-14.07 5.07l-1.41 1.41m15.48-15.48-1.41 1.41"></path>
              </svg>
            )}
          </button>
          <Link to="/contact">
            <Button className="blue-gradient">{t("contact")}</Button>
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-600 dark:text-neutral-200"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Mobile Menu"
        >
          {isMobileMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6L6 18"></path>
              <path d="M6 6l12 12"></path>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="4" y1="12" x2="20" y2="12"></line>
              <line x1="4" y1="6" x2="20" y2="6"></line>
              <line x1="4" y1="18" x2="20" y2="18"></line>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav
          className="md:hidden bg-secondary/95 backdrop-blur-md py-4 hs-collapse overflow-hidden transition-all duration-300 ease-in-out"
          id="hs-navbar-example"
        >
          <div className="container flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="hs-nav-link text-sm font-medium hover:text-primary transition-colors px-4 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t(item.label)}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
              <Button className="blue-gradient w-full">{t("contact")}</Button>
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
