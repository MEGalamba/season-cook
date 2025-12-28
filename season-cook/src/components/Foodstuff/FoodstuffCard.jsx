import { Link } from "react-router-dom";
import Card from "../ui/Card";

function FoodstuffCard({ food }) {
  return (
    <Link to={`/foodstuff/${food.id}`}>
      <Card>
        <h2>{food.name}</h2>
        <h3>{food.season}</h3>
        <img src={food.image} alt={food.name} />
      </Card>
    </Link>
  );
}

export default FoodstuffCard;
