import { useParams } from "react-router-dom";
import RecipesList from "../components/Recipe/RecipesList";

export default function FoodstuffRecipes() {
  const { foodId } = useParams();

  return (
    <>
      <h1>Receitas com este alimento</h1>
      <RecipesList foodId={foodId} />
    </>
  );
}
