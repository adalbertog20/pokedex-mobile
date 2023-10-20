import { View, Text, FlatList } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import FavItem from "../../components/favorites/FavItem";

const Favorites = () => {
  const favPokis = useSelector((state) => {
    console.log(state.favorites.favorites);
    return state.favorites.favorites;
  });
  return (
    <View>
      {favPokis && (
        <FlatList
          data={favPokis}
          numColumns={2}
          keyExtractor={(pokemon) => pokemon.id.toString()}
          renderItem={({item}) => <FavItem id={item.id} name={item.name} />}
        />
      )}
    </View>
  );
};

export default Favorites;
