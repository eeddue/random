import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LanguageContext = createContext();

const LanguageContextProvider = ({ children }) => {
  const [lang, setLang] = useState("arabic");

  useEffect(() => {
    (async () => {
      try {
        const language = await AsyncStorage.getItem("lang");
        if (language) return setLang(language);
      } catch (error) {}
    })();
  }, []);

  const changeLang = async (value) => {
    await AsyncStorage.setItem("lang", value);
    setLang(value);
  };

  return (
    <LanguageContext.Provider value={{ changeLang, lang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContextProvider;

export const useLanguage = () => useContext(LanguageContext);
