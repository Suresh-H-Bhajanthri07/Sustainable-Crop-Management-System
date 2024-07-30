import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './en.json'; // Import your English translations
import translationKN from './kn.json'; // Import your Kannada translations

const resources = {
  en: { translation: translationEN },
  kn: { translation: translationKN },
};

i18n
  .use(initReactI18next) // Initializes i18next with react-i18next
  .init({
    resources,
    lng: 'en', // Set default language to English (can be user's locale)
    interpolation: {
      escapeValue: false, // Prevents escaping of HTML entities
    },
  });

export default i18n;
