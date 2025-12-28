import { useState, useEffect } from "react";
import { getRecipes } from "../../services/recipeSevice";
import RecipeCard from "./RecipeCard";
//import recipes from "../data/recipes";

export default function RecipesList() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchRecipes() {
    try {
      const data = await getRecipes();
      setRecipes(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchRecipes();
  }, []);

  if (!loading) {
    return (
      <div>
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    );
  }
}
