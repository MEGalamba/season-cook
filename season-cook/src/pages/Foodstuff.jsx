import { useEffect, useState } from "react";
import FoodstuffList from "../components/Foodstuff/FoodstuffList";
import { getFoodsPaginated } from "../services/foodstuffService";

export default function Foodstuff() {
  const [foods, setFoods] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const ITEMS_PER_PAGE = 4;

  useEffect(() => {
    loadFoods();
  }, [page]);

  async function loadFoods() {
    setLoading(true); // começa a carregar
    const data = await getFoodsPaginated(page, ITEMS_PER_PAGE);
    setFoods(data);
    setLoading(false); // acabou de carregar
  }

  return (
    <>
      {loading ? (
        <p>Carregando alimentos...</p>
      ) : (
        <>
          <FoodstuffList foods={foods} />

          <div style={{ marginTop: "20px" }}>
            <button disabled={page === 1} onClick={() => setPage((p) => p - 1)}>
              Anterior
            </button>

            <span style={{ margin: "0 10px" }}>Página {page}</span>

            <button onClick={() => setPage((p) => p + 1)}>Seguinte</button>
          </div>
        </>
      )}
    </>
  );
}
