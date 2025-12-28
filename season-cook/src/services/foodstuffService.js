import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

export async function getFoodstuffs() {
  const snapshot = await getDocs(collection(db, "foodstuff"));

  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  }));
}
