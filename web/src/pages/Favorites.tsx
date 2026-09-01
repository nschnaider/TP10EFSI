import type { Pokemon } from "../types";
import ItemList from "../components/ItemList";

interface FavoritesProps {
  favorites: Pokemon[];
  onToggleFavorite: (item: Pokemon) => void;
}

const Favorites = ({ favorites, onToggleFavorite }: FavoritesProps) => {
  return (
    <div>
      <h2 style={{ color: "#ffffff", textAlign: "center", padding: "24px 0 0" }}>
        ❤️ Mis Favoritos ({favorites.length})
      </h2>
      {favorites.length === 0 ? (
        <p style={{ color: "#8b949e", textAlign: "center", marginTop: 20 }}>
          Todavía no agregaste ningún favorito.
        </p>
      ) : (
        <ItemList countries={favorites} favorites={favorites} onToggleFavorite={onToggleFavorite} />
      )}
    </div>
  );
};

export default Favorites;