export default function SearchFilterBar({ searchValue, onSearchChange }) {
  return (
    <div>
      <input
        type="text"
        placeholder={"Pesquisar por nome"}
        value={searchValue}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
}
