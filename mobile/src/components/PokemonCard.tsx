import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import type { Pokemon } from "../types";

interface PokemonCardProps {
  pokemon: Pokemon;
  isFavorite: boolean;
  onToggleFavorite: (pokemon: Pokemon) => void;
}

const PokemonCard = ({ pokemon, isFavorite, onToggleFavorite }: PokemonCardProps) => {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: pokemon.sprites.front_default }}
        style={styles.image}
      />
      <Text style={styles.name}>#{pokemon.id} {pokemon.name}</Text>
      <Text style={styles.detail}>🔥 {pokemon.types.map(t => t.type.name).join(", ")}</Text>
      <Text style={styles.detail}>⚖️ {pokemon.weight / 10} kg</Text>
      <Text style={styles.detail}>📏 {pokemon.height / 10} m</Text>

      <TouchableOpacity
        style={[styles.btn, isFavorite && styles.btnActive]}
        onPress={() => onToggleFavorite(pokemon)}
      >
        <Text style={styles.btnText}>
          {isFavorite ? "❤️ Quitar" : "🤍 Favorito"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1a2740",
    borderRadius: 12,
    padding: 12,
    margin: 8,
    flex: 1,
    alignItems: "center",
    maxWidth: "47%",
  },
  image: {
    width: 96,
    height: 96,
  },
  name: {
    color: "#ffffff",
    fontWeight: "700",
    fontSize: 13,
    marginTop: 4,
    textAlign: "center",
  },
  detail: {
    color: "#8b949e",
    fontSize: 12,
    marginTop: 2,
  },
  btn: {
    marginTop: 8,
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.1)",
    width: "100%",
    alignItems: "center",
  },
  btnActive: {
    backgroundColor: "#e1306c",
    borderColor: "#e1306c",
  },
  btnText: {
    color: "#ffffff",
    fontSize: 12,
    fontWeight: "600",
  },
});

export default PokemonCard;