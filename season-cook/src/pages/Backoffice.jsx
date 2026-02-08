import { useState, useEffect } from "react";
import { db } from "../services/firebase";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import FoodstuffCard from "../components/Foodstuff/FoodstuffCard";
import FoodstuffForm from "../components/Foodstuff/FoodstuffForm";
import SeasonFilterBar from "../components/ui/SeasonFilter";
import SearchFilterBar from "../components/ui/SearchFilter";

function Backoffice() {
  const [foodstuff, setFoodstuff] = useState([]);
  const [editing, setEditing] = useState(null);
  const [season, setSeason] = useState("Todo o ano");
  const [search, setSearch] = useState("");

  const fetchFoodstuff = async () => {
    const snapshot = await getDocs(collection(db, "foodstuff"));
    setFoodstuff(
      snapshot.docs.map((doc) => ({ docId: doc.id, id: doc.id, ...doc.data() }))
    );
  };

  useEffect(() => {
    fetchFoodstuff();
  }, []);

  const handleAdd = async (food) => {
    const docRef = await addDoc(collection(db, "foodstuff"), {
      ...food,
      id: "",
    });
    await updateDoc(docRef);
    fetchFoodstuff();
  };

  const handleEdit = (food) => setEditing(food);

  const handleUpdate = async (updatedFood) => {
    if (!editing) return;

    const docRef = doc(db, "foodstuff", editing.docId);
    await updateDoc(docRef, { ...updatedFood, id: editing.id });

    setEditing(null);
    fetchFoodstuff();
  };

  const handleDelete = async (id) => {
    console.log(id);
    await deleteDoc(doc(db, "foodstuff", id));
    fetchFoodstuff();
  };

  const filteredFoods = foodstuff.filter((foodstuffs) => {
    return (
      (season === "Todo o ano" || foodstuffs.season === season) &&
      foodstuffs.name.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div>
      <h1>Backoffice - Foodstuff</h1>

      {/* Formulario de adicionar/editar */}
      <FoodstuffForm
        onSubmit={editing ? handleUpdate : handleAdd}
        initialData={editing}
        key={editing?.id || "new"}
      />

      {/*Barra de pesquisa*/}
      <SeasonFilterBar seasonValue={season} onSeasonChange={setSeason} />
      <SearchFilterBar searchValue={search} onSearchChange={setSearch} />
      {filteredFoods.map((food) => (
        <div key={food.id}>
          {/* Lista de alimentos filtrados*/}

          <FoodstuffCard food={food} isAdmin={true} />
          <button onClick={() => handleEdit(food)}>Editar</button>
          <button onClick={() => handleDelete(food.docId)}>Apagar</button>
        </div>
      ))}
    </div>
  );
}

export default Backoffice;
