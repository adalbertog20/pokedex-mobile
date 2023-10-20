import { View, Text, StyleSheet } from "react-native";
import React from "react";

const FavItem = ({ id, name }) => {
  return (
    <View style={styles.container}>
      <Text>{id}</Text>
      <Text>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 8,
    padding: 16,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default FavItem;
