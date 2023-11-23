import React, { createContext, useContext, useState } from "react";

const NavigationContext = createContext();

const NavigationContextProvider = ({ children }) => {
  const [screen, setScreen] = useState("Profile");
  return (
    <NavigationContext.Provider value={{ screen, setScreen }}>
      {children}
    </NavigationContext.Provider>
  );
};

export default NavigationContextProvider;

export const useScreens = () => useContext(NavigationContext);
