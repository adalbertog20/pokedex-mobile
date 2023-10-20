import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  Button,
} from "react-native";
import React, { useEffect, useState } from "react";
import useApi from "../hooks/useApi";
import GenCard from "../components/generation/GenCard";
import SearchBar from "../components/SearchBar";
import Favorites from "./favorites/Favorites";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();

  const {
    data: genInfo,
    loading: loadingGenInfo,
    error: errorGenInfo,
    refresh: refreshGenInfo,
  } = useApi("generation/");

  useEffect(() => {
    refreshGenInfo();
  }, []);

  return (
    <View>
      <View>
        <SearchBar />
      </View>
      <Button
        onPress={() => navigation.navigate("Favorites")}
        title="Go To Favorites"
      />
      {errorGenInfo && <Text>Error: {error.message}</Text>}
      {loadingGenInfo && (
        <View>
          <Text>Is Loading</Text>
        </View>
      )}
      <FlatList
        data={genInfo?.results}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => <GenCard name={item.name} url={item.url} />}
      />
      <Button title="Refresh" onPress={refreshGenInfo} />
    </View>
  );
};

const styles = StyleSheet.create({
  containerGen: {
    backgroundColor: "green",
    margin: 20,
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  titleGen: {
    fontSize: 48,
    textTransform: "uppercase",
  },
});

export default Home;
