import { View, Text, FlatList, StyleSheet, Dimensions } from "react-native";
import React from "react";
import { typeColor } from "../utils/typeColor";

const Types = (props) => {
  return (
    <View>
      <FlatList
        data={props.info}
        renderItem={({ item }) => (
          <View
            style={{
              height: 40,
              backgroundColor: typeColor(item.name),
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              margin: 10,
            }}
          >
            <Text>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window"),
    margin: 10,
  },
});

export default Types;
