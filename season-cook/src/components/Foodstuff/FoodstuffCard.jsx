import Card from "../ui/Card";

function FoodstuffCard({ food }) {
  return (
    <Card>
      <h2>{food.name}</h2>
      <h3>{food.season}</h3>
      <img src={food.image} alt={food.name} />
    </Card>
  );
}

export default FoodstuffCard;
