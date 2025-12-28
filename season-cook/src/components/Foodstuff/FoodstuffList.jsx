import { useState, useEffect } from "react";
import { getFoodstuffs } from "../../services/foodstuffService";
//import foodstuffs from "../data/foodstuffs";
import FoodstuffCard from "./FoodstuffCard";

function FoodstuffList() {
  const [foodstuffs, setFoodstuffs] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fecthFoodstuffs() {
    try {
      const data = await getFoodstuffs();
      setFoodstuffs(data);
    } catch (erro) {
      console.log(erro);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fecthFoodstuffs();
  }, []);

  if (!loading) {
    return (
      <div>
        {foodstuffs.map((food) => (
          <FoodstuffCard key={food.id} food={food}></FoodstuffCard>
        ))}
      </div>
    );
  }
}

export default FoodstuffList;
