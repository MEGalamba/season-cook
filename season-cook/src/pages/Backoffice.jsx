import { useState, useEffect } from "react";
import { db } from "../services/firebase";
import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import FoodstuffForm from "../components/Foodstuff/FoodstuffForm";
import FoodstuffList from "../components/Foodstuff/FoodstuffList";
import RecipeForm from "../components/Recipe/RecipeForm";
import RecipesList from "../components/Recipe/RecipesList";
import { getFoodstuffs } from "../services/foodstuffService";

function Backoffice() {
  const [editing, setEditing] = useState(null);
  const [foodstuff, setFoodstuff] = useState([]);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    loadFoods();
  });

  async function loadFoods() {
    const data = await getFoodstuffs();
    setFoodstuff(data);
  }

  const handleAdd = async (food) => {
    const docRef = await addDoc(collection(db, "foodstuff"), {
      ...food,
      id: "",
    });
    await updateDoc(docRef);
    getFoodstuffs();
  };

  const handleEdit = (food) => setEditing(food);

  const handleUpdate = async (updatedFood) => {
    if (!editing) return;

    const docRef = doc(db, "foodstuff", editing.docId);
    await updateDoc(docRef, { ...updatedFood, id: editing.id });

    setEditing(null);
    getFoodstuffs();
  };

  const handleDelete = async (id) => {
    console.log(id);
    await deleteDoc(doc(db, "foodstuff", id));
    getFoodstuffs();
  };

  return (
    <>
      <div>
        <h1>Backoffice - Foodstuff</h1>

        {/* Formulario de adicionar/editar */}
        <FoodstuffForm
          onSubmit={editing ? handleUpdate : handleAdd}
          initialData={editing}
          key={editing?.id || "new"}
        />

        {/* Formulario de adicionar/editar */}
        <FoodstuffList
          isAdmin={true}
          onEdit={handleEdit}
          onDelete={handleDelete}
          foods={foodstuff}
        />
      </div>
      <div>
        <h1>Backoffice - Foodstuff</h1>

        {/* Formulario de adicionar/editar */}
        <RecipeForm
          onSubmit={editing ? handleUpdate : handleAdd}
          initialData={editing}
          key={editing?.id || "new"}
        />

        {/* Lista de receitas */}
      </div>
    </>
  );
}

export default Backoffice;
