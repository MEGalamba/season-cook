import { useState, useEffect } from "react";
import { getFoodstuffs } from "../../services/foodstuffService";
import SeasonFilterBar from "../ui/SeasonFilter";
import SearchFilterBar from "../ui/SearchFilter";
import FoodstuffCard from "./FoodstuffCard";

function FoodstuffList({ isAdmin = false, onEdit, onDelete }) {
  const [foodstuffs, setFoodstuffs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [season, setSeason] = useState("Todo o ano");
  const [search, setSearch] = useState("");

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

  //filtered Foods by season and by name
  const filteredFoods = foodstuffs.filter((foodstuffs) => {
    return (
      (season === "Todo o ano" || foodstuffs.season === season) &&
      foodstuffs.name.toLowerCase().includes(search.toLowerCase())
    );
  });

  if (!loading) {
    return (
      <div>
        <SeasonFilterBar seasonValue={season} onSeasonChange={setSeason} />
        <SearchFilterBar searchValue={search} onSearchChange={setSearch} />
        {filteredFoods.map((food) => (
          <div key={food.id}>
            <FoodstuffCard food={food} />
            {isAdmin && (
              <>
                <button onClick={() => onEdit(food)}>Editar</button>
                <button onClick={() => onDelete(food.docId)}>Apagar</button>
              </>
            )}
          </div>
        ))}
      </div>
    );
  }
}

export default FoodstuffList;
