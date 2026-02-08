import { useState } from "react";
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

function Backoffice() {
  const [editing, setEditing] = useState(null);

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
        <RecipesList
          isAdmin={true}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
    </>
  );
}

export default Backoffice;
