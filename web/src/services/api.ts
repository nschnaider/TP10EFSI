import axios from "axios";

// Trae los primeros 150 pokémon
export const fetchPokemons = async (): Promise<Pokemon[]> => {
  const listRes = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=150");
  const results = listRes.data.results;

  // Por cada nombre traemos el detalle completo (imagen, tipos, peso, altura)
  const details = await Promise.all(
    results.map((p: { url: string }) => axios.get(p.url))
  );

  return details.map((r) => r.data);
};

import type { Pokemon } from "../types";