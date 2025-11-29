import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import uk from "./locales/uk/translation.json";
import ru from "./locales/ru/translation.json";
import en from "./locales/en/translation.json";

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {  uk: { translation: uk }, ru: { translation: ru }, en: { translation: en }, },
        fallbackLng: ["uk", "ru", "en"],
        supportedLngs: ["uk", "ru", "en"],
        detection: { order: ["querystring", "localStorage", "navigator", "htmlTag"], caches: ["localStorage"] },
        interpolation: { escapeValue: false },
    });

export default i18n;