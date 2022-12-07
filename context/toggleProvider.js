import { createContext, useState, useContext } from "react";

export const ToggleContext = createContext();

export const ToggleProvider = ({ children }) => {
  const [toggle, setToggle] = useState(false);
  const handleToggle  = () => setToggle(!toggle);
  return (
    <ToggleContext.Provider value={{ toggle, handleToggle }}>
      {children}
    </ToggleContext.Provider>
  );
};

export const useToggle = () => useContext(ToggleContext);
