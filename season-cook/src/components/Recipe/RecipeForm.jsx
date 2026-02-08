import { useEffect } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { db } from "../../services/firebase"; // o teu firebase config
import { collection, doc, setDoc, updateDoc, getDoc } from "firebase/firestore";

export default function RecipeForm({ recipeId, onSuccess }) {
  const { register, control, handleSubmit, reset } = useForm({
    defaultValues: {
      title: "",
      time: 0,
      season: "",
      image: "",
      instructions: [""],
      ingredients: [{ foodId: "", name: "", quantity: 0, unit: "" }],
    },
  });

  const {
    fields: instructionsFields,
    append: appendInstruction,
    remove: removeInstruction,
  } = useFieldArray({
    control,
    name: "instructions",
  });

  const {
    fields: ingredientsFields,
    append: appendIngredient,
    remove: removeIngredient,
  } = useFieldArray({
    control,
    name: "ingredients",
  });

  // Se for editar, carregar dados
  useEffect(() => {
    if (recipeId) {
      const fetchRecipe = async () => {
        const docRef = doc(db, "recipes", recipeId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          reset(docSnap.data());
        }
      };
      fetchRecipe();
    }
  }, [recipeId, reset]);

  const onSubmit = async (data) => {
    try {
      if (recipeId) {
        const docRef = doc(db, "recipes", recipeId);
        await updateDoc(docRef, data);
      } else {
        const docRef = doc(collection(db, "recipes")); // cria novo id
        await setDoc(docRef, data);
      }
      onSuccess(); // callback para recarregar lista ou fechar modal
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label>Título</label>
        <input {...register("title")} required />
      </div>

      <div>
        <label>Tempo (minutos)</label>
        <input
          type="number"
          {...register("time", { valueAsNumber: true })}
          required
        />
      </div>

      <div>
        <label>Época</label>
        <input {...register("season")} required />
      </div>

      <div>
        <label>Imagem (URL)</label>
        <input {...register("image")} />
      </div>

      {/* Instructions */}
      <div>
        <label>Instruções</label>
        {instructionsFields.map((item, index) => (
          <div key={item.id} className="flex gap-2">
            <input {...register(`instructions.${index}`)} required />
            <button type="button" onClick={() => removeInstruction(index)}>
              remover instrução
            </button>
          </div>
        ))}
        <button type="button" onClick={() => appendInstruction("")}>
          Adicionar Instrução
        </button>
      </div>

      {/* Ingredientes */}
      <div>
        <label>Ingredientes</label>
        {ingredientsFields.map((item, index) => (
          <div key={item.id} className="flex gap-2">
            <input
              placeholder="Nome"
              {...register(`ingredients.${index}.name`)}
              required
            />
            <input
              placeholder="Quantidade"
              type="number"
              {...register(`ingredients.${index}.quantity`, {
                valueAsNumber: true,
              })}
            />
            <input
              placeholder="Unidade"
              {...register(`ingredients.${index}.unit`)}
            />
            <input
              placeholder="ID"
              {...register(`ingredients.${index}.foodId`)}
            />
            <button type="button" onClick={() => removeIngredient(index)}>
              remover ingrediente
            </button>
          </div>
        ))}

        {/* problemas aqui no foodId */}
        <button
          type="button"
          onClick={() =>
            appendIngredient({ foodId: "", name: "", quantity: 0, unit: "" })
          }
        >
          Adicionar Ingrediente
        </button>
      </div>

      <button type="submit">
        {recipeId ? "Atualizar Receita" : "Criar Receita"}
      </button>
    </form>
  );
}
