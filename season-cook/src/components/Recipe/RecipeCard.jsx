import { Link } from "react-router-dom";
function RecipeCard({ recipe }) {
  return (

      <div>
        <h2>{recipe.title}</h2>
        <p>{recipe.season}</p>
        <p>
          {recipe.time} {recipe.time > 1 ? "minutos" : "minuto"}
        </p>
        <p>{recipe.image}</p>
        <ul>
          {recipe.ingredients.map((food) => (
            <li key={food.foodId}>
              {food.name} {food.quantity === 0 ? "" : food.quantity} {food.unit}
            </li>
          ))}
        </ul>
        <ol>
          {recipe.instructions.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
        </ol>
        <p>rating average {recipe.ratingAvg}</p>
        <p>rating Count {recipe.ratingCount}</p>
      </div>

  );
}

export default RecipeCard;
