import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import type { Pokemon } from "./types";
import Header from "./components/header";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import "./App.css";

const STORAGE_KEY = "pokemon_favoritos";

export default function App() {
  const [favorites, setFavorites] = useState<Pokemon[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
  }, [favorites]);

  const handleToggleFavorite = (pokemon: Pokemon) => {
    setFavorites((prev) => {
      const exists = prev.some((f) => f.id === pokemon.id);
      if (exists) {
        return prev.filter((f) => f.id !== pokemon.id);
      } else {
        return [...prev, pokemon];
      }
    });
  };

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home favorites={favorites} onToggleFavorite={handleToggleFavorite} />} />
        <Route path="/favoritos" element={<Favorites favorites={favorites} onToggleFavorite={handleToggleFavorite} />} />
      </Routes>
    </BrowserRouter>
  );
}