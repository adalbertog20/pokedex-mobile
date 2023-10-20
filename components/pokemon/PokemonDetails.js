import {
  Image,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorites } from "../../slice/favSlice";
import useApi from "../../hooks/useApi";

const PokemonDetails = ({ route }) => {
  const dispatch = useDispatch();
  const [tapCount, setTapCount] = useState(0);
  const favorites = useSelector((state) => state.favorites.favorites);

  const {
    data: pokemon,
    loading: loadingPokemon,
    error: errorPokemon,
    refresh: refreshPokemon,
  } = useApi(`pokemon/${route.params.name}`);
  const {
    data: color,
    loading: loadingColor,
    error: errorColor,
    refresh: refreshColor,
  } = useApi(`pokemon-species/${route.params.name}`);

  const handleDoubleTap = () => {
    if (tapCount === 1 && pokemon) {
      console.log("papu");
      dispatch(
        addToFavorites({ id: String(pokemon.id), name: String(pokemon.name) })
      );
      setTapCount(0);
    } else {
      setTapCount(1);
      setTimeout(() => {
        setTapCount(0);
      }, 300);
    }
  };

  useEffect(() => {
    refreshPokemon();
    refreshColor();
    console.log('uploaded ', favorites)
  }, [favorites]);

  return (
    <View style={{ backgroundColor: color?.color.name, flex: 1 }}>
      {pokemon && (
        <TouchableOpacity
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          onPress={handleDoubleTap}
        >
          <View>
            <View>
              <View style={styles.topContainer}>
                <Text style={styles.name}>{pokemon.name}</Text>
              </View>
              <Image
                source={{
                  uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`,
                }}
                style={{ width: "100%", height: "95%", resizeMode: "contain" }}
              />
            </View>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  name: {
    fontSize: 32,
    textAlign: "center",
    textTransform: "uppercase",
    color: "white",
    marginRight: 50,
  },
  icon: {
    color: "pink",
  },
  topContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default PokemonDetails;
