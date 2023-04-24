import { useState, useContext, createContext } from "react";

const PortalContext = createContext();

export const PortalProvider = ({ children }) => {
 
    const [activeNav,setactiveNav] = useState("DASHBOARD")

    const handleActiveNav = (active) => {
        setactiveNav(active)
    }

  return (
    <PortalContext.Provider
      value={{ activeNav, handleActiveNav }}
    >
      {children}
    </PortalContext.Provider>
  );
};

export const usePortal = () => useContext(PortalContext);
