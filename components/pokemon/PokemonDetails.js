import { Image, View, Text, Dimensions, StyleSheet, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToFavorites, removeFromFavorites } from "../../slice/favSlice";
import Icon from "@expo/vector-icons/MaterialIcons";

const PokemonDetails = ({ route }) => {
  const dispatch = useDispatch();
  const [pokemon, setPokemon] = useState([]);
  const [pokemonTypes, setPokemonTypes] = useState([]);
  const [color, setColor] = useState("#ffffff");
  const fetchPokemonInfo = async () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${route.params.name}/`)
      .then((response) => {
        setPokemon(response.data);
      })
      .catch((error) => console.error(error));
  };
  const fetchColor = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon-species/${route.params.name}`)
      .then((response) => {
        setColor(response.data.color.name);
        console.log(color);
      })
      .catch((error) => console.error(error));
  };
  useEffect(() => {
    fetchPokemonInfo();
    fetchColor();
  }, [route.params.id]);

  const handleFavorites = (pokemon) => {
    Alert.alert("added to fav");
    useDispatch(addToFavorites({ id: pokemon.id, name: pokemon.name }));
  };

  return (
    <View style={{ backgroundColor: color, flex: 1 }}>
      {pokemon && (
        <View>
          <View>
            <View style={styles.topContainer}>
              <Text style={styles.name}>{pokemon.name}</Text>
              <Icon
                onPress={() =>
                  dispatch(
                    addToFavorites({
                      id: String(pokemon.id),
                      name: String(pokemon.name),
                    })
                  )
                }
                name="favorite"
                size={50}
                style={styles.icon}
              />
            </View>
            <Image
              source={{
                uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`,
              }}
              style={{ width: "100%", height: "95%", resizeMode: "contain" }}
            />
          </View>
        </View>
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
