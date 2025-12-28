import { useState, useEffect } from "react";
import { getRecipes, getRecipesByFoodstuff } from "../../services/recipeSevice";
import RecipeCard from "./RecipeCard";
//import recipes from "../data/recipes";

export default function RecipesList({ foodId }) {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchRecipes() {
    try {
      const data = foodId
        ? await getRecipesByFoodstuff(foodId)
        : await getRecipes();
      setRecipes(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchRecipes();
  }, [foodId]);

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
