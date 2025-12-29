import {
  collection,
  getDocs,
  doc,
  getDoc,
  query,
  where,
} from "firebase/firestore";
import { db } from "./firebase";

export async function getRecipes() {
  const snapshot = await getDocs(collection(db, "recipes"));

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}

export async function getRecipesByFoodstuff(foodId) {
  const q = query(
    collection(db, "recipes"),
    where("ingredientsId", "array-contains", foodId)
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}

export async function getRecipeById(recipeId) {
  const docRef = doc(db, "recipes", recipeId);
  const snapshot = await getDoc(docRef);

  if (!snapshot.exists()) {
    return null;
  }

  return {
    id: snapshot.id,
    ...snapshot.data(),
  };
}
