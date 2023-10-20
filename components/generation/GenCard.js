import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const GenCard = (props) => {
  const navigation = useNavigation();
  const generationId = String(props.url).substring(37, 38);
  return (
    <Pressable
      style={styles.container}
      onPress={() =>
        navigation.navigate("DetailsGen", {
          name: props.name,
          url: props.url,
          id: generationId,
        })
      }
      name="arrow-forward"
      size={64}
    >
      <View>
        <Text>{props.name}</Text>
        <Text>{props.url}</Text>
      </View>
    </Pressable>
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

export default GenCard;
