import { useEffect, useState } from "react";
import { getRecipeById } from "../services/recipeSevice";
import RecipeCard from "../components/Recipe/RecipeCard";
import CommentsCard from "../components/Comments/CommentCard";
import CommentForm from "../components/Comments/CommentForm";
import { getCommentsByRecipeId } from "../services/commentService";
import { useParams } from "react-router-dom";

export default function RecipeDetail() {
  const { recipeId } = useParams();

  const [recipe, setRecipe] = useState("");
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState([]);

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

  async function fetchComments() {
    const data = await getCommentsByRecipeId(recipeId);
    setComments(data);
  }

  useEffect(() => {
    fetchComments();
  }, [recipeId]);

  useEffect(() => {
    fetchRecipe();
  }, []);

  if (!loading) {
    return (
      <>
        <RecipeCard key={recipe.id} recipe={recipe} />
        {comments.length > 0 ? (
          comments.map((comment) => (
            <CommentsCard key={comment.id} comment={comment} />
          ))
        ) : (
          <p>Esta receita ainda não tem comentários.</p>
        )}
        <CommentForm recipe={recipe} />
      </>
    );
  }
}
