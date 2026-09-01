import type { Pokemon } from "../types";
import ItemCard from "./ItemCard";
import "./ItemList.css";

interface ItemListProps {
  countries: Pokemon[];
  favorites: Pokemon[];
  onToggleFavorite: (item: Pokemon) => void;
}

const ItemList = ({ countries, favorites, onToggleFavorite }: ItemListProps) => {
  if (countries.length === 0) {
    return <p className="list-empty">No encontramos resultados.</p>;
  }

  return (
    <div className="list-grid">
      {countries.map((pokemon) => (
        <ItemCard
          key={pokemon.id}
          country={pokemon}
          isFavorite={favorites.some((f) => f.id === pokemon.id)}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
};

export default ItemList;