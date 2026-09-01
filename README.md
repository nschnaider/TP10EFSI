# TP10 EFSI — Explorador de Pokémon

## Integrantes
- Nicolas Schnaider

## API utilizada
**PokeAPI** — https://pokeapi.co/
Gratuita, sin API key, sin restricciones de CORS.

## Descripción
Aplicación que permite explorar los primeros 150 Pokémon, buscarlos por nombre y guardarlos como favoritos. Desarrollada en dos versiones: React Web y React Native.

## Organización de componentes

### React Web (`/web`)
- `App.tsx` — estado global de favoritos + localStorage + React Router
- `components/Header` — barra de navegación con links a Inicio y Favoritos
- `components/SearchBar` — input controlado para filtrar por nombre
- `components/ItemCard` — tarjeta individual con imagen, tipos, peso, altura y botón favorito
- `components/ItemList` — grilla de tarjetas usando `.map()`
- `pages/Home` — carga la API, filtra resultados, muestra el listado
- `pages/Favorites` — muestra los pokémon guardados como favoritos
- `services/api.ts` — llamada a PokeAPI con Axios

### React Native (`/mobile`)
- `App.tsx` — estado global de favoritos + React Navigation
- `components/PokemonCard` — tarjeta reutilizable con imagen, tipos, peso, altura y botón favorito
- `screens/HomeScreen` — lista con FlatList en 2 columnas + buscador
- `screens/FavoritesScreen` — lista de favoritos con botón volver
- `services/api.ts` — misma llamada a PokeAPI con Axios

## Funcionalidades implementadas
- Consulta a API externa con Axios y useEffect
- Estado de carga ("Cargando información...") y error
- Listado de 150 Pokémon con imagen, nombre, tipo, peso y altura
- Buscador que filtra en tiempo real con `.filter()`
- Agregar y quitar favoritos (sin duplicados)
- Persistencia de favoritos con localStorage (versión web)
- Navegación entre Inicio y Favoritos con React Router (web) y React Navigation (mobile)

## Diferencias entre React Web y React Native

| Aspecto | React Web | React Native |
|---|---|---|
| Elementos visuales | `<div>`, `<p>`, `<button>` | `<View>`, `<Text>`, `<TouchableOpacity>` |
| Estilos | CSS + clases | `StyleSheet.create()` |
| Listas | `.map()` en JSX | `FlatList` |
| Navegación | React Router (`<Link>`, `<Routes>`) | React Navigation (Stack Navigator) |
| Persistencia favoritos | `localStorage` | Solo en memoria (no hay localStorage en RN) |
| Buscador | `<input type="text">` | `<TextInput>` |