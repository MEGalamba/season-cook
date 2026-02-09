import { useEffect, useState } from "react";
import RecipeCard from "../components/Recipe/RecipeCard";
import CommentsCard from "../components/Comments/CommentCard";
import CommentForm from "../components/Comments/CommentForm";
import RatingComponent from "../components/Comments/RatingComponent";
import { doc, onSnapshot } from "firebase/firestore";
import { db, auth } from "../services/firebase";
import { useParams } from "react-router-dom";
import { getUserRating, rateRecipe } from "../services/recipeSevice";

export default function RecipeDetail({ isAdmin = false, onEdit, onDelete }) {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  const [userRating, setUserRating] = useState(null);
  const user = auth.currentUser;

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
      },
    );

    return () => unsubscribe();
  }, [recipeId]);

  //Buscar rating do utilizador
  useEffect(() => {
    async function loadUserRating() {
      if (!user || !recipeId) return;
      // vai buscar o rating de o utilizador nesta receita
      const rating = await getUserRating(user.uid, recipeId);
      if (rating) {
        setUserRating(rating.rating);
      }
    }

    loadUserRating();
  }, [user, recipeId]);

  //envia rating para firebase
  async function handleRate(value) {
    if (!user) return;
    await rateRecipe(user.uid, recipeId, value);
    setUserRating(value);
  }

  if (!loading) {
    return (
      <>
        <RecipeCard key={recipe.id} recipe={recipe} />
        {!isAdmin && (
          <RatingComponent onRating={handleRate} userRating={userRating} />
        )}
        {isAdmin && (
          <>
            <button onClick={() => onEdit(recipe)}>Editar</button>
            <button onClick={() => onDelete(recipe.docId)}>Apagar</button>
          </>
        )}
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
