import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import type { Pokemon } from "./src/types";
import HomeScreen from "./src/screens/HomeScreen";
import FavoritesScreen from "./src/screens/FavoritesScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  // Favoritos viven acá — se pasan por props a ambas pantallas
  // En mobile no usamos localStorage (no existe) — los favoritos duran mientras la app está abierta
  const [favorites, setFavorites] = useState<Pokemon[]>([]);

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
    <SafeAreaProvider>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home">
            {(props) => (
              <HomeScreen
                {...props}
                favorites={favorites}
                onToggleFavorite={handleToggleFavorite}
              />
            )}
          </Stack.Screen>
          <Stack.Screen name="Favorites">
            {(props) => (
              <FavoritesScreen
                {...props}
                favorites={favorites}
                onToggleFavorite={handleToggleFavorite}
              />
            )}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}