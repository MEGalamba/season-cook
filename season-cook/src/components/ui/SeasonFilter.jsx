const seasons = ["Todo o ano", "Primavera", "Verão", "Outono", "Inverno"];

export default function SeasonFilterBar({ seasonValue, onSeasonChange }) {
  return (
    <div>
      <select
        value={seasonValue}
        onChange={(e) => onSeasonChange(e.target.value)}
      >
        {seasons.map((season) => (
          <option key={season} value={season}>
            {season}
          </option>
        ))}
      </select>
    </div>
  );
}
