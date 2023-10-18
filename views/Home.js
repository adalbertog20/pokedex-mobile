import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useApi } from "../useApi";
import GenCard from "../components/GenCard";
import SearchBar from "../components/SearchBar";

const Home = () => {
  const [genInfo, setGenInfo] = useState();

  const fetchInfo = async () => {
    const response = await useApi("generation/");
    setGenInfo(response.data.results);
  };
  useEffect(() => {
    fetchInfo();
  }, []);
  return (
    <View>
      <View>
        <SearchBar />
      </View>
      <FlatList
        data={genInfo}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => <GenCard name={item.name} url={item.url} />}
      />
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
