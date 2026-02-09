import { useState } from "react";
import SeasonFilterBar from "../ui/SeasonFilter";
import SearchFilterBar from "../ui/SearchFilter";
import FoodstuffCard from "./FoodstuffCard";
import { Row } from "react-bootstrap";

function FoodstuffList({ isAdmin = false, onEdit, onDelete, foods }) {
  const [season, setSeason] = useState("Todo o ano");
  const [search, setSearch] = useState("");

  //filtered Foods by season and by name
  const filteredFoods = (foods || []).filter((foodstuffs) => {
    const name = foodstuffs.name || ""; // garante que seja string
    const seasonMatches =
      season === "Todo o ano" || foodstuffs.season === season;
    const searchMatches = name.toLowerCase().includes(search.toLowerCase());
    return seasonMatches && searchMatches;
  });

  return (
    <div>
      <SeasonFilterBar seasonValue={season} onSeasonChange={setSeason} />
      <SearchFilterBar searchValue={search} onSearchChange={setSearch} />

      <Row>
        {filteredFoods.map((food) => (
          <FoodstuffCard key={food.id} food={food} isAdmin={isAdmin} />
        ))}
      </Row>

      {/* Botões de edição / apagar */}
      {isAdmin &&
        filteredFoods.map((food) => (
          <div key={food.id} className="d-flex gap-2 my-2">
            <button
              className="btn btn-outline-primary"
              onClick={() => onEdit(food)}
            >
              Editar
            </button>
            <button
              className="btn btn-outline-danger"
              onClick={() => onDelete(food.docId)}
            >
              Apagar
            </button>
          </div>
        ))}
    </div>
  );
}

export default FoodstuffList;
