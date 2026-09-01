import axios from "axios";
import type { Pokemon } from "../types";

// Misma función que el web — PokeAPI funciona igual en React Native
export const fetchPokemons = async (): Promise<Pokemon[]> => {
  const listRes = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=150");
  const results = listRes.data.results;

  const details = await Promise.all(
    results.map((p: { url: string }) => axios.get(p.url))
  );

  return details.map((r) => r.data);
};