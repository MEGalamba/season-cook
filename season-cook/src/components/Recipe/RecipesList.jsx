import { useState } from "react";
import RecipeCard from "./RecipeCard";
import SeasonFilterBar from "../ui/SeasonFilter";
import SearchFilterBar from "../ui/SearchFilter";
import { Row } from "react-bootstrap";

export default function RecipesList({ recipes }) {
  const [season, setSeason] = useState("Todo o ano");
  const [search, setSearch] = useState("");

  //filtro de nome e epoca do ano
  const filteredRecipes = recipes.filter((recipes) => {
    return (
      (season === "Todo o ano" || recipes.season === season) &&
      recipes.title.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div>
      {/*Filtros de pesquisa */}
      <SearchFilterBar searchValue={search} onSearchChange={setSearch} />
      <SeasonFilterBar seasonValue={season} onSeasonChange={setSeason} />
      {/* Receitas */}
      <Row>
        {filteredRecipes.map((recipe) => (
          <RecipeCard recipe={recipe} />
        ))}
      </Row>
    </div>
  );
}
