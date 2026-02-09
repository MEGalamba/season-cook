import { Link } from "react-router-dom";
import { Card, Col } from "react-bootstrap";

function FoodstuffCard({ food, isAdmin }) {
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
