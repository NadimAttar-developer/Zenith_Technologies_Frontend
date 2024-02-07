import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import TRANSLATIONS_AR from "./ar/ar.json";
import TRANSLATIONS_EN from "./en/en.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: TRANSLATIONS_EN,
    },
    ar: {
      translation: TRANSLATIONS_AR,
    },
  },
  lng: String(window.localStorage.getItem("Localelanguage")),
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});
export default i18n;
