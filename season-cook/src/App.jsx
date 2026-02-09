import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import Navbar from "./components/Navbar/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Foodstuff from "./pages/Foodstuff";
import Recipes from "./pages/Recipes";
import RecipeDetail from "./pages/RecipeDetail";
import FoodstuffRecipes from "./pages/FoodstuffRecipes";
import Backoffice from "./pages/Backoffice";
import AdminRoute from "./services/adminRoute";
import { AuthProvider } from "./context/AuthContext";
import "./global.css";

function App() {
  return (
    <>
      <Navbar />
      <AuthProvider>
        <Routes>
          {/* rota inicial */}
          <Route path="/" element={<HomePage />} />

          {/* páginas públicas */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/foodstuff" element={<Foodstuff />} />

          <Route path="/foodstuff/:foodId" element={<FoodstuffRecipes />} />
          <Route path="/recipe/:recipeId" element={<RecipeDetail />} />

          {/* página privada */}
          <Route
            path="/backoffice"
            element={
              <AdminRoute>
                <Backoffice />
              </AdminRoute>
            }
          />
          {/* fallback (rota inválida) */}
          <Route path="*" element={<h2>Página não encontrada</h2>} />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
