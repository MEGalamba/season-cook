import {
  collection,
  getDocs,
  doc,
  getDoc,
  query,
  where,
  arrayUnion,
  updateDoc,
  setDoc,
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
    where("ingredientsId", "array-contains", foodId),
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

export async function addCommentToRecipe(recipeDocId, comment) {
  const recipeRef = doc(db, "recipes", recipeDocId);

  await updateDoc(recipeRef, {
    comments: arrayUnion({
      ...comment,
      createdAt: new Date(),
    }),
  });
}

export async function rateRecipe(userId, recipeId, rating) {
  const ratingId = `${userId}_${recipeId}`;

  await setDoc(doc(db, "recipeRatings", ratingId), {
    userId,
    recipeId,
    rating,
    updatedAt: new Date(),
  });
}

export async function getUserRating(userId, recipeId) {
  const ratingId = `${userId}_${recipeId}`;

  const snap = await getDoc(doc(db, "recipeRatings", ratingId));

  if (snap.exists()) {
    return snap.data();
  }

  return null;
}


//pagination for foodstuff
export async function getRecipesPaginated(page, pageSize) {
  const snapshot = await getDocs(collection(db, "recipes"));

  const allFoods = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  const start = (page - 1) * pageSize;
  const end = start + pageSize;

  return allFoods.slice(start, end);
}

