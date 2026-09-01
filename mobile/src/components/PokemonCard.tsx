import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import type { Pokemon } from "../types";

// Colores por tipo
const TYPE_COLORS: Record<string, string> = {
  fire: "#F08030", water: "#6890F0", grass: "#78C850",
  poison: "#A040A0", electric: "#F8D030", psychic: "#F85888",
  ice: "#98D8D8", dragon: "#7038F8", dark: "#705848",
  fairy: "#EE99AC", fighting: "#C03028", flying: "#A890F0",
  rock: "#B8A038", ground: "#E0C068", bug: "#A8B820",
  ghost: "#705898", steel: "#B8B8D0", normal: "#A8A878",
};

interface PokemonCardProps {
  pokemon: Pokemon;
  isFavorite: boolean;
  onToggleFavorite: (pokemon: Pokemon) => void;
}

const PokemonCard = ({ pokemon, isFavorite, onToggleFavorite }: PokemonCardProps) => {
  return (
    <View style={styles.card}>
      {/* Fondo con imagen */}
      <View style={styles.imageContainer}>
        <Image source={{ uri: pokemon.sprites.front_default }} style={styles.image} />
      </View>

      <View style={styles.info}>
        {/* Número */}
        <Text style={styles.number}>#{String(pokemon.id).padStart(3, "0")}</Text>

        {/* Nombre capitalizado */}
        <Text style={styles.name}>
          {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
        </Text>

        {/* Badges de tipo */}
        <View style={styles.typesRow}>
          {pokemon.types.map((t) => (
            <View
              key={t.type.name}
              style={[styles.badge, { backgroundColor: TYPE_COLORS[t.type.name] ?? "#777" }]}
            >
              <Text style={styles.badgeText}>{t.type.name}</Text>
            </View>
          ))}
        </View>

        {/* Datos */}
        <View style={styles.detailsRow}>
          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Peso</Text>
            <Text style={styles.detailValue}>{pokemon.weight / 10} kg</Text>
          </View>
          <View style={styles.detailDivider} />
          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Altura</Text>
            <Text style={styles.detailValue}>{pokemon.height / 10} m</Text>
          </View>
        </View>
      </View>

      {/* Botón */}
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
    backgroundColor: "#141e30",
    borderRadius: 16,
    margin: 6,
    flex: 1,
    maxWidth: "47%",
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.06)",
  },
  imageContainer: {
    backgroundColor: "#1e3a5f",
    alignItems: "center",
    paddingVertical: 12,
  },
  image: {
    width: 90,
    height: 90,
  },
  info: {
    padding: 10,
  },
  number: {
    color: "#4a6080",
    fontSize: 10,
    fontWeight: "700",
    letterSpacing: 1,
    marginBottom: 2,
  },
  name: {
    color: "#ffffff",
    fontWeight: "700",
    fontSize: 14,
    marginBottom: 6,
  },
  typesRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 4,
    marginBottom: 8,
  },
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 20,
  },
  badgeText: {
    color: "#ffffff",
    fontSize: 10,
    fontWeight: "700",
    textTransform: "capitalize",
  },
  detailsRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.04)",
    borderRadius: 8,
    padding: 8,
  },
  detailItem: {
    flex: 1,
    alignItems: "center",
  },
  detailDivider: {
    width: 1,
    height: 24,
    backgroundColor: "rgba(255,255,255,0.1)",
  },
  detailLabel: {
    color: "#4a6080",
    fontSize: 10,
    fontWeight: "600",
    marginBottom: 2,
  },
  detailValue: {
    color: "#ffffff",
    fontSize: 12,
    fontWeight: "700",
  },
  btn: {
    margin: 10,
    marginTop: 0,
    paddingVertical: 8,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.08)",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.04)",
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