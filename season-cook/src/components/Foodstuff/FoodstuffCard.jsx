import { Link } from "react-router-dom";
import Card from "../ui/Card";

// onEdit e onDelete sao funcoes passadas como parametro
function FoodstuffCard({ food, isAdmin }) {
  return (
    <div>
      {isAdmin ? (
        <Card>
          <h2>{food.name}</h2>
          <h3>{food.season}</h3>
          <img src={food.image} alt={food.name} />
        </Card>
      ) : (
        <Link to={`/foodstuff/${food.id}`}>
          <Card>
            <h2>{food.name}</h2>
            <h3>{food.season}</h3>
            <img src={food.image} alt={food.name} />
          </Card>
        </Link>
      )}
    </div>
  );
}

export default FoodstuffCard;
