import { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

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
    if (!food.name.trim()) return;
    onSubmit(food);
    setFood({ name: "", image: "", season: "Todo o ano" });
  };

  return (
    <Form
      onSubmit={handleSubmit}
      className="border p-4 mb-4 rounded shadow-sm bg-light"
    >
      <h4 className="mb-3">
        {initialData ? "Editar Alimento" : "Adicionar Alimento"}
      </h4>

      <Form.Group className="mb-3">
        <Form.Label>Nome</Form.Label>
        <Form.Control
          type="text"
          placeholder="Nome do alimento"
          value={food.name}
          onChange={(e) => handleChange("name", e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>URL da imagem</Form.Label>
        <Form.Control
          type="text"
          placeholder="https://..."
          value={food.image}
          onChange={(e) => handleChange("image", e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Época do ano</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ex: Verão, Inverno, Todo o ano"
          value={food.season}
          onChange={(e) => handleChange("season", e.target.value)}
        />
      </Form.Group>

      <Button type="submit" variant="success">
        {initialData ? "Atualizar" : "Adicionar"}
      </Button>
    </Form>
  );
}
