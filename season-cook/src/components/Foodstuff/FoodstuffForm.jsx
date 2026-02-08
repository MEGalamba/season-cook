import { useState, useEffect } from "react";

export default function FoodstuffForm({ onSubmit, initialData }) {
  const [food, setFood] = useState({
    name: "",
    image: "",
    season: "Todo o ano",
  });

  useEffect(() => {
    if (initialData) {
      setFood(initialData);
    } else {
      setFood({ name: "", image: "", season: "Todo o ano" });
    }
  }, [initialData]);

  const handleChange = (field, value) => setFood({ ...food, [field]: value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!food.name) return;
    onSubmit(food);
    setFood({ name: "", image: "", season: "Todo o ano" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        marginBottom: 20,
        padding: 10,
        border: "1px solid #ccc",
        borderRadius: 5,
      }}
    >
      <h3>{initialData ? "Editar Alimento" : "Adicionar Alimento"}</h3>
      <input
        type="text"
        placeholder="Nome"
        value={food.name}
        onChange={(e) => handleChange("name", e.target.value)}
        required
        style={{ display: "block", marginBottom: 5 }}
      />
      <input
        type="text"
        placeholder="URL da imagem"
        value={food.image}
        onChange={(e) => handleChange("image", e.target.value)}
        style={{ display: "block", marginBottom: 5 }}
      />
      <input
        type="text"
        placeholder="Temporada"
        value={food.season}
        onChange={(e) => handleChange("season", e.target.value)}
        style={{ display: "block", marginBottom: 5 }}
      />
      <button type="submit">{initialData ? "Atualizar" : "Adicionar"}</button>
    </form>
  );
}
