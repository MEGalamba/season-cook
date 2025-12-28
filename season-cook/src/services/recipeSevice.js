import { collection, getDocs, query, where } from "firebase/firestore";
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
