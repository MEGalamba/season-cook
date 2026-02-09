import { Card, Col, ListGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function RecipeCard({ recipe }) {
  return (
    <Col xs={12} sm={6} md={3} className="mb-4">
      <Card className="h-100 shadow-sm">
        {/* LInk para o detalhe da receita */}
        <Link
          to={`/recipe/${recipe.id}`}
          className="text-decoration-none text-dark"
        >
          {/* Imagem da receita */}
          <Card.Img
            variant="top"
            src={recipe.image}
            alt={recipe.title}
            style={{ height: "150px", objectFit: "cover" }}
          />

          <Card.Body className="p-3">
            {/* Título e época do ano */}
            <Card.Title className="h6 text-success">{recipe.title}</Card.Title>
            <Card.Subtitle className="text-muted mb-2">
              {recipe.season}
            </Card.Subtitle>

            {/* Tempo em minutos */}
            <p className="mb-2">
              {recipe.time} {recipe.time > 1 ? "minutos" : "minuto"}
            </p>

            {/* Ingredientes */}
            <ListGroup variant="flush" className="mb-2">
              {recipe.ingredients.map((food) => (
                <ListGroup.Item
                  key={food.foodId}
                  className="py-1 px-0 border-0"
                >
                  {food.name}{" "}
                  {food.quantity !== 0 && `${food.quantity} ${food.unit}`}
                </ListGroup.Item>
              ))}
            </ListGroup>

            {/* Botão para detalhes / ver receita */}
            <Button
              variant="success"
              size="sm"
              className="mt-2 w-100"
              href={`/recipes/${recipe.id}`}
            >
              Ver Receita
            </Button>
          </Card.Body>
        </Link>

        {/* Footer com rating */}
        <Card.Footer className="text-muted text-center py-1">
          Média: {recipe.ratingAvg?.toFixed(1)} ⭐ ({recipe.ratingCount})
        </Card.Footer>
      </Card>
    </Col>
  );
}

export default RecipeCard;
