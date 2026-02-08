import { useState } from "react";
import SeasonFilterBar from "../ui/SeasonFilter";
import SearchFilterBar from "../ui/SearchFilter";
import FoodstuffCard from "./FoodstuffCard";

function FoodstuffList({ isAdmin = false, onEdit, onDelete, foods }) {
  const [season, setSeason] = useState("Todo o ano");
  const [search, setSearch] = useState("");

  //filtered Foods by season and by name
  const filteredFoods = foods.filter((foodstuffs) => {
    return (
      (season === "Todo o ano" || foodstuffs.season === season) &&
      foodstuffs.name.toLowerCase().includes(search.toLowerCase())
    );
  });

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

export default FoodstuffList;
