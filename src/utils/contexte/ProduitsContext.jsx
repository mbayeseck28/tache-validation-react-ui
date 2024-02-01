import React, { createContext, useState } from "react";

export const ProduitsContext = createContext();

const ProduitContextProvider = ({ children }) => {
  const [open, setOpen] = useState(true);

  const toggleSidebare = (open) => {
    setOpen(!open);
  };

  const value = {
    open,
    toggleSidebare,
  };

  return <ProduitsContext.Provider value={value}>{children}</ProduitsContext.Provider>;
};

export default ProduitContextProvider;
