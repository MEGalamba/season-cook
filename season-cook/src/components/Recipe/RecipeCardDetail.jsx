import { Card, ListGroup, Button } from "react-bootstrap";

function RecipeCardDetail({ recipe }) {
  return (
    <Card className="h-100 shadow-sm mb-4">
      {/* Imagem grande */}
      <Card.Img
        variant="top"
        src={recipe.image}
        alt={recipe.title}
        style={{ height: "300px", objectFit: "cover" }}
      />

      <Card.Body className="p-4">
        {/* Título e época */}
        <Card.Title className="h4 text-success">{recipe.title}</Card.Title>
        <Card.Subtitle className="text-muted mb-3">{recipe.season}</Card.Subtitle>

        {/* Tempo */}
        <p className="mb-3">
          Tempo de preparo: {recipe.time} {recipe.time > 1 ? "minutos" : "minuto"}
        </p>

        {/* Ingredientes */}
        <h6>Ingredientes:</h6>
        <ListGroup variant="flush" className="mb-3">
          {recipe.ingredients.map((food) => (
            <ListGroup.Item key={food.foodId} className="py-1 px-0 border-0">
              {food.name} {food.quantity !== 0 && `${food.quantity} ${food.unit}`}
            </ListGroup.Item>
          ))}
        </ListGroup>

        {/* Instruções */}
        <h6>Instruções:</h6>
        <ol className="mb-3">
          {recipe.instructions.map((inst, index) => (
            <li key={index}>{inst}</li>
          ))}
        </ol>

        {/* Botão ver receita (opcional, pode remover se já está na detail) */}
        {/* <Button variant="success">Ver Receita</Button> */}
      </Card.Body>

      {/* Footer com rating */}
      <Card.Footer className="text-muted text-center py-2">
        Média: {recipe.ratingAvg?.toFixed(1)} ⭐ ({recipe.ratingCount})
      </Card.Footer>
    </Card>
  );
}

export default RecipeCardDetail;
