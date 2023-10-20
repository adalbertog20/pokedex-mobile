import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./views/Home";
import DetailsGen from "./views/generation/DetailsGen";
import PokemonDetails from "./components/pokemon/PokemonDetails";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Favorites from "./views/favorites/Favorites";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Generations" component={Home} />
          <Stack.Screen name="DetailsGen" component={DetailsGen} />
          <Stack.Screen name="PokemonDetails" component={PokemonDetails} />
          <Stack.Screen name="Favorites" component={Favorites} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
