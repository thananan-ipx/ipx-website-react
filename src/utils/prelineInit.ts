
import { useEffect } from 'react';

// Initialize Preline when component mounts
export const usePrelineInit = () => {
  useEffect(() => {
    // Load Preline dynamically
    try {
      // Initialize Preline components
      const HSThemeAppearance = require('preline/dist/components/hs-theme-appearance').default;
      
      HSThemeAppearance.init();
      
      // Using any to bypass TypeScript type checking for the Preline library
      const prelineModule = require('preline');
      if (typeof prelineModule.initComponents === 'function') {
        prelineModule.initComponents();
      } else if (typeof prelineModule?.default?.initComponents === 'function') {
        prelineModule.default.initComponents();
      } else {
        console.warn('Preline initialization function not found');
      }
    } catch (err) {
      console.error('Failed to initialize Preline:', err);
    }
  }, []);
};

// Function to manually initialize Preline
export const initPreline = () => {
  try {
    // Initialize Preline components
    const HSThemeAppearance = require('preline/dist/components/hs-theme-appearance').default;
    
    HSThemeAppearance.init();
    
    // Using any to bypass TypeScript type checking for the Preline library
    const prelineModule = require('preline');
    if (typeof prelineModule.initComponents === 'function') {
      prelineModule.initComponents();
    } else if (typeof prelineModule?.default?.initComponents === 'function') {
      prelineModule.default.initComponents();
    } else {
      console.warn('Preline initialization function not found');
    }

    // Ensure theme toggle buttons receive the correct class names
    setTimeout(() => {
      const currentTheme = document.documentElement.getAttribute('data-hs-theme');
      document.querySelectorAll('.hs-dark-mode').forEach(button => {
        if (currentTheme === 'dark') {
          button.classList.add('hs-dark-mode-active');
        } else {
          button.classList.remove('hs-dark-mode-active');
        }
      });
    }, 100);
  } catch (err) {
    console.error('Failed to initialize Preline:', err);
  }
};
