import { useEffect, useState } from "react";
import RecipeCard from "../components/Recipe/RecipeCard";
import CommentsCard from "../components/Comments/CommentCard";
import CommentForm from "../components/Comments/CommentForm";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../services/firebase";

import { useParams } from "react-router-dom";

export default function RecipeDetail() {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const ref = doc(db, "recipes", recipeId);

    const unsubscribe = onSnapshot(
      ref,
      (snap) => {
        if (snap.exists()) {
          setRecipe({ docId: snap.id, ...snap.data() });
        }
        setLoading(false);
      },
      (error) => {
        console.error(error);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [recipeId]);

  if (!loading) {
    return (
      <>
        <RecipeCard key={recipe.id} recipe={recipe} />
        {recipe.comments?.length > 0 ? (
          recipe.comments.map((comment, index) => (
            <CommentsCard key={index} comment={comment} />
          ))
        ) : (
          <p>Esta receita ainda não tem comentários.</p>
        )}
        <CommentForm recipe={recipe} />
      </>
    );
  }
}
