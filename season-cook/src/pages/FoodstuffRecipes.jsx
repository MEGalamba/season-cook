import { useParams } from "react-router-dom";
import RecipesList from "../components/Recipe/RecipesList";
import { useEffect, useState } from "react";
import { getRecipesByFoodstuff } from "../services/recipeSevice";

export default function FoodstuffRecipes() {
  const { foodId } = useParams();
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetchRecipesByFood(foodId);
  }, []);

  async function fetchRecipesByFood(food) {
    const data = await getRecipesByFoodstuff(food);
    setRecipes(data);
  }

  return (
    <>
      <h1>Receitas com este alimento</h1>
      <RecipesList recipes={recipes} />
    </>
  );
}
