import React from "react";
import CommandeList from "../../components/commandes/CommandeList";
import CommandeContextProvider from "../../utils/contexte/CommandeContext";

const Commandes = () => {
  return (
    <CommandeContextProvider>
      <CommandeList />
      <CommandeList />
      <CommandeList />
      <CommandeList />
      <CommandeList />
      <CommandeList />
      <CommandeList />
      <CommandeList />
      <CommandeList />
      <CommandeList />
      <CommandeList />
      <CommandeList />
      <CommandeList />
      <CommandeList />
      <CommandeList />
      <CommandeList />
      <CommandeList />
      <CommandeList />
      <CommandeList />
    </CommandeContextProvider>
  );
};

export default Commandes;
