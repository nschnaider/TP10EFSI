import { useState, useEffect } from "react";
import type { Pokemon } from "../types";
import { fetchPokemons } from "../services/api";
import SearchBar from "../components/SearchBar";
import ItemList from "../components/ItemList";

interface HomeProps {
  favorites: Pokemon[];
  onToggleFavorite: (item: Pokemon) => void;
}

const Home = ({ favorites, onToggleFavorite }: HomeProps) => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        const data = await fetchPokemons();
        setPokemons(data);
      } catch {
        setError("No fue posible obtener la información.");
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const filtered = pokemons.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <p style={{ color: "#8b949e", textAlign: "center", marginTop: 40 }}>Cargando información...</p>;
  if (error) return <p style={{ color: "#e74c3c", textAlign: "center", marginTop: 40 }}>{error}</p>;

  return (
    <div>
      <SearchBar value={search} onChange={setSearch} />
      <ItemList countries={filtered} favorites={favorites} onToggleFavorite={onToggleFavorite} />
    </div>
  );
};

export default Home;