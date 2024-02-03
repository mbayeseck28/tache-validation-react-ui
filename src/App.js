import Header from "./components/header";
import AdminConnexion from "./pages/admin/connexion/AdminConnexion";
import Home from "./pages/admin/Home";
import SidebareContextProvider from "./utils/contexte/SidebareContext";

function App() {
  return (
    <div className="App">
      <SidebareContextProvider>
        <Header />
        <Home />
        <AdminConnexion />
      </SidebareContextProvider>
    </div>
  );
}

export default App;
