import React, { createContext, useState } from "react";
import i18n from '../assets/i18n';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [locale, setLocale] = useState(i18n.locale);

  const setLanguage = (lang) => {
    i18n.locale = lang;
    setLocale(lang); // triggers re-render
  };

  return (
    <LanguageContext.Provider value={{ locale, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
