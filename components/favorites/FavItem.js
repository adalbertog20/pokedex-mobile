import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import useApi from "../../hooks/useApi";
import { useDispatch, useSelector } from "react-redux";
import { removeFromFavorites } from "../../slice/favSlice";

const FavItem = ({ id, name }) => {
  const [tapCount, setTapCount] = useState(0);
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.favorites);

  const {
    data: pokemon,
    loading: loadingPokemon,
    error: errorPokemon,
    refresh: refreshPokemon,
  } = useApi(`pokemon-species${name}`);

  const handleDoubleTap = () => {
    if (tapCount === 1) {
      dispatch(removeFromFavorites(id));
      setTapCount(0);
    } else {
      setTapCount(1);
      setTimeout(() => {
        setTapCount(0);
      }, 300);
    }
  };

  useEffect(() => {
    console.log("update removed ", favorites);
  }, [favorites]);

  return (
    <View style={styles.container}>
      {!loadingPokemon && (
        <TouchableOpacity
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          onPress={handleDoubleTap}
        >
          <Image
            source={{
              uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
            }}
            width={100}
            height={100}
          />
          <Text>{name}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: "black",
    borderWidth: 1,
    flex: 1,
    margin: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FavItem;
