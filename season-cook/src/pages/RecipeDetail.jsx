import { useEffect, useState } from "react";
import { getRecipeById } from "../services/recipeSevice";
import RecipeCard from "../components/Recipe/RecipeCard";
import CommentsCard from "../components/Comments/CommentCard";
import { useParams } from "react-router-dom";

export default function RecipeDetail() {
  const { recipeId } = useParams();

  const [recipe, setRecipe] = useState("");
  const [loading, setLoading] = useState(true);

  async function fetchRecipe() {
    try {
      const data = await getRecipeById(recipeId);
      setRecipe(data);
      console.log(recipe);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchRecipe();
  }, []);

  if (!loading) {
    return (
      <>
        <RecipeCard key={recipe.id} recipe={recipe} />
        {recipe.comments.length > 0 ? (
          recipe.comments.map((comment) => (
            <CommentsCard key={comment.id} comment={comment} />
          ))
        ) : (
          <p>Esta receita ainda não tem comentários.</p>
        )}
      </>
    );
  }
}
