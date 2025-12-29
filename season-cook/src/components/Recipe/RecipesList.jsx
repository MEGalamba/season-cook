import { useState, useEffect } from "react";
import { getRecipes, getRecipesByFoodstuff } from "../../services/recipeSevice";
import { Link } from "react-router-dom";
import RecipeCard from "./RecipeCard";
import SeasonFilterBar from "../ui/SeasonFilter";
import SearchFilterBar from "../ui/SearchFilter";

export default function RecipesList({ foodId }) {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [season, setSeason] = useState("Todo o ano");
  const [search, setSearch] = useState("");

  async function fetchRecipes() {
    try {
      const data = foodId
        ? await getRecipesByFoodstuff(foodId)
        : await getRecipes();
      setRecipes(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchRecipes();
  }, [foodId]);

  const filteredRecipes = recipes.filter((recipes) => {
    return (
      (season === "Todo o ano" || recipes.season === season) &&
      recipes.title.toLowerCase().includes(search.toLowerCase())
    );
  });

  if (!loading) {
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
}
