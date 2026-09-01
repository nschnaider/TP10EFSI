import { useState, useEffect } from "react";
import {
  View, Text, TextInput, FlatList, ActivityIndicator, StyleSheet
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import type { Pokemon } from "../types";
import { fetchPokemons } from "../services/api";
import PokemonCard from "../components/PokemonCard";

interface HomeScreenProps {
  favorites: Pokemon[];
  onToggleFavorite: (pokemon: Pokemon) => void;
  navigation: any;
}

const HomeScreen = ({ favorites, onToggleFavorite, navigation }: HomeScreenProps) => {
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

  if (loading) {
    return (
      <SafeAreaView style={styles.center}>
        <ActivityIndicator size="large" color="#e1306c" />
        <Text style={styles.loadingText}>Cargando información...</Text>
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView style={styles.center}>
        <Text style={styles.errorText}>{error}</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>🎮 Explorador de Pokémon</Text>
        <Text
          style={styles.favBtn}
          onPress={() => navigation.navigate("Favorites")}
        >
          ❤️ Favoritos ({favorites.length})
        </Text>
      </View>

      {/* Buscador */}
      <TextInput
        style={styles.searchInput}
        placeholder="Buscar Pokémon..."
        placeholderTextColor="#8b949e"
        value={search}
        onChangeText={setSearch}
      />

      {/* Lista con FlatList en 2 columnas */}
      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        renderItem={({ item }) => (
          <PokemonCard
            pokemon={item}
            isFavorite={favorites.some((f) => f.id === item.id)}
            onToggleFavorite={onToggleFavorite}
          />
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No encontramos resultados.</Text>
        }
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0e1726" },
  center: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#0e1726", gap: 12 },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255,255,255,0.08)",
  },
  headerTitle: { color: "#ffffff", fontWeight: "700", fontSize: 16 },
  favBtn: { color: "#e1306c", fontWeight: "600", fontSize: 13 },
  searchInput: {
    margin: 12,
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#1a2740",
    color: "#ffffff",
    fontSize: 14,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.1)",
  },
  listContent: { paddingHorizontal: 8, paddingBottom: 20 },
  loadingText: { color: "#8b949e", fontSize: 14 },
  errorText: { color: "#e74c3c", fontSize: 14 },
  emptyText: { color: "#8b949e", textAlign: "center", marginTop: 40 },
});

export default HomeScreen;