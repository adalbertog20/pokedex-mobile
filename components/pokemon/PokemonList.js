import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

const PokemonList = (props) => {
  const navigation = useNavigation();
  const [pokemonData, setPokemonData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/generation/${props.id}/`)
      .then((response) => {
        {
          const pokemonUrls = response.data.pokemon_species.map((pokemon) => {
            return axios.get(pokemon.url);
          });
          return Promise.all(pokemonUrls);
        }
      })
      .then((pokemonList) => {
        const data = pokemonList.map((pokemon) => ({
          name: pokemon.data.name,
          iconUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.data.id}.png`,
        }));
        setPokemonData(data);
      })
      .catch((error) => console.error(error));
  }, [props.id]);

  const renderItem = ({ item }) => (
    <View style={styles.container}>
      <Image source={{ uri: item.iconUrl }} style={{ width: 50, height: 50 }} />
      <Text
        onPress={() =>
          navigation.navigate("PokemonDetails", { name: item.name })
        }
        style={styles.name}
      >
        {item.name}
      </Text>
    </View>
  );

  return (
    <View>
      <FlatList
        data={pokemonData}
        keyExtractor={(item) => item.name}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
  },
  name: {
    fontSize: 24,
  },
});
export default PokemonList;
