import type { Pokemon } from "../types";
import "./ItemCard.css";

// Colores por tipo de Pokémon
const TYPE_COLORS: Record<string, string> = {
  fire: "#F08030", water: "#6890F0", grass: "#78C850",
  poison: "#A040A0", electric: "#F8D030", psychic: "#F85888",
  ice: "#98D8D8", dragon: "#7038F8", dark: "#705848",
  fairy: "#EE99AC", fighting: "#C03028", flying: "#A890F0",
  rock: "#B8A038", ground: "#E0C068", bug: "#A8B820",
  ghost: "#705898", steel: "#B8B8D0", normal: "#A8A878",
};

interface ItemCardProps {
  country: Pokemon;
  isFavorite: boolean;
  onToggleFavorite: (country: Pokemon) => void;
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
        <p className="card-number">#{String(pokemon.id).padStart(3, "0")}</p>
        <h3 className="card-name">{pokemon.name}</h3>

        {/* Badges de tipo con color */}
        <div className="card-types">
          {pokemon.types.map((t) => (
            <span
              key={t.type.name}
              className="card-type-badge"
              style={{ backgroundColor: TYPE_COLORS[t.type.name] ?? "#777" }}
            >
              {t.type.name}
            </span>
          ))}
        </div>

        <p className="card-detail">⚖️ <strong>Peso:</strong> {pokemon.weight / 10} kg</p>
        <p className="card-detail">📏 <strong>Altura:</strong> {pokemon.height / 10} m</p>
      </div>

      <button
        className={`card-btn ${isFavorite ? "card-btn-active" : ""}`}
        onClick={() => onToggleFavorite(pokemon)}
      >
        {isFavorite ? "❤️ Quitar de favoritos" : "🤍 Agregar a favoritos"}
      </button>
    </div>
  );
};

export default ItemCard;