import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "./firebase";

export async function getCommentsByRecipeId(recipeId) {
  const commentsRef = collection(db, "recipes", recipeId, "comments");
  const q = query(commentsRef, orderBy("createdAt", "desc"));

  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}
