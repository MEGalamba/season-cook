import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

export async function getRecipes() {
  const snapshot = await getDocs(collection(db, "recipes"));

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}
