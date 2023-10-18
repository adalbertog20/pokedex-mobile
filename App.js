import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./views/Home";
import DetailsGen from "./views/DetailsGen";
import PokemonDetails from "./components/PokemonDetails";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Generations" component={Home} />
        <Stack.Screen name="DetailsGen" component={DetailsGen} />
        <Stack.Screen name="PokemonDetails" component={PokemonDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
