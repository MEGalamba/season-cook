export default function RatingComponent({onRating, userRating}) {
  return (
    <div>
      <p>Avaliar receita:</p>

      {[1, 2, 3, 4, 5].map((n) => (
        <button
          key={n}
          onClick={() => onRating(n)}
          style={{
            fontWeight: userRating === n ? "bold" : "normal",
          }}
        >
          ⭐ {n}
        </button>
      ))}
    </div>
  );
}
