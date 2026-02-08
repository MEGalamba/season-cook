import { useState } from "react";
import { Link } from "react-router-dom";
import RecipeCard from "./RecipeCard";
import SeasonFilterBar from "../ui/SeasonFilter";
import SearchFilterBar from "../ui/SearchFilter";

export default function RecipesList({ recipes }) {
  const [season, setSeason] = useState("Todo o ano");
  const [search, setSearch] = useState("");

  const filteredRecipes = recipes.filter((recipes) => {
    return (
      (season === "Todo o ano" || recipes.season === season) &&
      recipes.title.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div>
      <SearchFilterBar searchValue={search} onSearchChange={setSearch} />
      <SeasonFilterBar seasonValue={season} onSeasonChange={setSeason} />
      {filteredRecipes.map((recipe) => (
        <Link key={recipe.id} to={`/recipe/${recipe.id}`}>
          <RecipeCard recipe={recipe} />
        </Link>
      ))}
    </div>
  );
}
