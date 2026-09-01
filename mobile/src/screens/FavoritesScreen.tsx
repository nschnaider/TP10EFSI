import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import type { Pokemon } from "../types";
import PokemonCard from "../components/PokemonCard";

interface FavoritesScreenProps {
  favorites: Pokemon[];
  onToggleFavorite: (pokemon: Pokemon) => void;
  navigation: any;
}

const FavoritesScreen = ({ favorites, onToggleFavorite, navigation }: FavoritesScreenProps) => {
  return (
    <SafeAreaView style={styles.container} edges={["top"]}>

      {/* Header con botón volver */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backBtn}>← Volver</Text>
        </TouchableOpacity>
        <Text style={styles.title}>❤️ Mis Favoritos ({favorites.length})</Text>
        <View style={{ width: 60 }} />
      </View>

      {favorites.length === 0 ? (
        <Text style={styles.emptyText}>Todavía no agregaste ningún favorito.</Text>
      ) : (
        <FlatList
          data={favorites}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          renderItem={({ item }) => (
            <PokemonCard
              pokemon={item}
              isFavorite={true}
              onToggleFavorite={onToggleFavorite}
            />
          )}
          contentContainerStyle={styles.listContent}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0e1726" },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255,255,255,0.08)",
  },
  backBtn: { color: "#e1306c", fontWeight: "600", fontSize: 14 },
  title: { color: "#ffffff", fontWeight: "700", fontSize: 16 },
  emptyText: { color: "#8b949e", textAlign: "center", marginTop: 40, fontSize: 14 },
  listContent: { paddingHorizontal: 8, paddingBottom: 20 },
});

export default FavoritesScreen;