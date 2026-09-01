import "./SearchBar.css";

interface SearchBarProps {
  value: string;
  onChange: (text: string) => void;
}

const SearchBar = ({ value, onChange }: SearchBarProps) => {
  return (
    <div className="searchbar-container">
      <input
        className="searchbar-input"
        type="text"
        placeholder="Buscar Pokémon..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;