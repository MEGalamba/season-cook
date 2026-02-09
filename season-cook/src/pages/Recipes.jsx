import { useEffect, useState } from "react";
import RecipesList from "../components/Recipe/RecipesList";
import { getRecipesPaginated } from "../services/recipeSevice";

export default function Recipes({isAdmin=false}) {
  const [recipes, setRecipes] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const ITEMS_PER_PAGE = 10;

  useEffect(() => {
    loadRecipes();
  }, [page]);

  async function loadRecipes() {
    setLoading(true); // começa a carregar
    const data = await getRecipesPaginated(page, ITEMS_PER_PAGE);
    setRecipes(data);
    setLoading(false); // termina de carregar
  }

  return (
    <>
      {loading ? (
        <p>Carregando alimentos...</p>
      ) : (
        <>
          <RecipesList recipes={recipes} />
          <div style={{ marginTop: "20px" }}>
            <button disabled={page === 1} onClick={() => setPage((p) => p - 1)}>
              Anterior
            </button>

            <span style={{ margin: "0 10px" }}>Página {page}</span>

            <button onClick={() => setPage((p) => p + 1)}>Seguinte</button>
          </div>
        </>
      )}
    </>
  );
}
