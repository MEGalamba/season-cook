import { Link } from "react-router-dom";
import { Card, Col, Button } from "react-bootstrap";

function FoodstuffCard({ food, isAdmin, onEdit, onDelete }) {
  return (
    <Col xs={12} sm={6} md={3} className="mb-4">
      {isAdmin ? (
        <Card className="h-100 shadow-sm">
          <Card.Img
            variant="top"
            src={food.image}
            alt={food.name}
            style={{ height: "150px", objectFit: "cover" }}
          />
          <Card.Body className="p-3">
            <Card.Title className="h6">{food.name}</Card.Title>
            <Card.Subtitle className="text-muted">{food.season}</Card.Subtitle>
          </Card.Body>

          {/* Botões de admin dentro do card */}
          <Card.Footer className="d-flex justify-content-between">
            <Button
              variant="outline-primary"
              size="sm"
              onClick={() => onEdit(food)}
            >
              Editar
            </Button>
            <Button
              variant="outline-danger"
              size="sm"
              onClick={() => onDelete(food.docId)}
            >
              Apagar
            </Button>
          </Card.Footer>
        </Card>
      ) : (
        <Link to={`/foodstuff/${food.id}`} className="text-decoration-none">
          <Card className="h-100 shadow-sm">
            <Card.Img
              variant="top"
              src={food.image}
              alt={food.name}
              style={{ height: "150px", objectFit: "cover" }}
            />
            <Card.Body className="p-3">
              <Card.Title className="h6">{food.name}</Card.Title>
              <Card.Subtitle className="text-muted">
                {food.season}
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </Link>
      )}
    </Col>
  );
}

export default FoodstuffCard;
