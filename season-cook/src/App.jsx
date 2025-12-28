import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import Navbar from "./components/Navbar/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* rota inicial */}
        <Route path="/" element={<HomePage />} />

        {/* páginas públicas */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* fallback (rota inválida) */}
        <Route path="*" element={<h2>Página não encontrada</h2>} />
      </Routes>
    </>
  );
}

export default App;
