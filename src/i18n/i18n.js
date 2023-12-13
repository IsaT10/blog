// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        greeting: 'Hello, world!',
        // Add more translations as needed
      },
    },
    fr: {
      translation: {
        greeting: 'Bonjour, le monde!',
        // Add more translations as needed
      },
    },
    // Add translations for other languages
  },
  lng: 'en', // Set the default language
  fallbackLng: 'en', // Fallback language if a translation is not found
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
