import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      "Welcome to React": "Welcome to \"yourweather\" app",
    },
  },
  ua: {
    translation: {
      "Welcome to React": "Вітаємо в \"yourweather\" додатку",
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "ua",
    interpolation: {
      escapeValue: false,
    },
    resources
  });

export default i18n;
