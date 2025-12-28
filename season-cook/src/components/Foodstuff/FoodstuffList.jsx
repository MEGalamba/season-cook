import foodstuffs from "../data/foodstuffs";
import FoodstuffCard from "./FoodstuffCard";

function FoodstuffList() {
  return (
    <div>
      {foodstuffs.map((food) => (
        <FoodstuffCard key={food.id} food={food}></FoodstuffCard>
      ))}
    </div>
  );
}

export default FoodstuffList;

