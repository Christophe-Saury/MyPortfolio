import React, { createContext, useState, PropsWithChildren } from "react";

type LanguageContextProps = {
  language: string;
  setLanguage: (language: string) => void;
};

export const LanguageContext = createContext<LanguageContextProps>({
  language: "EN",
  setLanguage: () => {},
});

export const LanguageProvider: React.FC<
  PropsWithChildren<LanguageContextProps>
> = ({ children }) => {
  const [language, setLanguage] = useState<string>("EN");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
