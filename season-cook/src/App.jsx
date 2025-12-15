import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <Routes>
      {/* rota inicial */}
      <Route path="/" element={<Navigate to="/login" />} />

      {/* páginas públicas */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* fallback (rota inválida) */}
      <Route path="*" element={<h2>Página não encontrada</h2>} />
    </Routes>
  );
}

export default App;
