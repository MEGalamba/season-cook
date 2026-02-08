import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

export async function getFoodstuffs() {
  const snapshot = await getDocs(collection(db, "foodstuff"));

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}

//pagination for foodstuff
export async function getFoodsPaginated(page, pageSize) {
  const snapshot = await getDocs(collection(db, "foodstuff"));

  const allFoods = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  const start = (page - 1) * pageSize;
  const end = start + pageSize;

  return allFoods.slice(start, end);
}
