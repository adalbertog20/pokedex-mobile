import { View, Text, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";
import Icon from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const SearchBar = () => {
  const navigation = useNavigation();
  const [text, setText] = useState("");
  return (
    <View style={styles.container}>
      <Icon
        onPress={() => navigation.navigate("PokemonDetails", { name: text })}
        name="search"
        size={24}
        color="black"
        style={styles.icon}
      />
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={(text) => setText(text)}
        placeholder="wat are u thinkgn"
        placeholderTextColor="#888"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    flex: 1,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  icon: {
    paddingRight: 10,
  },
});

export default SearchBar;
