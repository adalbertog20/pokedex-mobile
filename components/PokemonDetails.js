import { Image, View, Text, Dimensions, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";

const PokemonDetails = ({ route }) => {
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

  return (
    <View style={{ backgroundColor: color }}>
      <Text>{route.params.name}</Text>
      {pokemon && (
        <View>
          <View>
            <Image
              source={{
                uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`,
              }}
              width={Dimensions.get("window")}
              height={250}
            />
          </View>
          <Text style={styles.name}>{pokemon.name}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  name: {
    fontSize: 24,
    textAlign: "center",
    textTransform: "uppercase",
    color: "white",
  },
});

export default PokemonDetails;
