import type { Pokemon } from "../types";
import "./ItemCard.css";

interface ItemCardProps {
  country: Pokemon;
  isFavorite: boolean;
  onToggleFavorite: (item: Pokemon) => void;
}

const ItemCard = ({ country: pokemon, isFavorite, onToggleFavorite }: ItemCardProps) => {
  return (
    <div className="card">
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        className="card-flag"
      />
      <div className="card-info">
        <h3 className="card-name">#{pokemon.id} {pokemon.name}</h3>
        <p className="card-detail">🔥 {pokemon.types.map(t => t.type.name).join(", ")}</p>
        <p className="card-detail">⚖️ {pokemon.weight / 10} kg</p>
        <p className="card-detail">📏 {pokemon.height / 10} m</p>
      </div>
      <button
        className={`card-btn ${isFavorite ? "card-btn-active" : ""}`}
        onClick={() => onToggleFavorite(pokemon)}
      >
        {isFavorite ? "❤️ Quitar" : "🤍 Favorito"}
      </button>
    </div>
  );
};

export default ItemCard;