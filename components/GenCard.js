import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Icon from "@expo/vector-icons/Ionicons";

const GenCard = (props) => {
  const navigation = useNavigation();
  const generationId = (String(props.url).substring(37, 38));
  return (
    <TouchableOpacity>
      <View>
        <Text>{props.name}</Text>
        <Text>{props.url}</Text>
        <Icon
          onPress={() => navigation.navigate("DetailsGen", { name: props.name, url: props.url, id: generationId})}
          name="arrow-forward"
          size={64}
        />
      </View>
    </TouchableOpacity>
  );
};

export default GenCard;
