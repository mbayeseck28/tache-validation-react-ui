import React from "react";
import { Route, Routes } from "react-router-dom";
import Sidebare from "../../components/sidebare/Sidebare";
import Dashboard from "./Dashboard";
import Categories from "./Categories";
import Produits from "./Produits";
import Commandes from "./Commandes";

const Home = () => {
  return (
    <div className="App flex gap-6 bg-gray-100">
      <Sidebare />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/produits" element={<Produits />} />
        <Route path="/commandes" element={<Commandes />} />
      </Routes>
    </div>
  );
};

export default Home;
