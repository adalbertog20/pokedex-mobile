import React, { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";
import axios from "axios";
import Types from "../../components/Types";
import PokemonList from "../../components/pokemon/PokemonList";

function DetailsGen({ route }) {
  const name = route.params.name;
  const url = route.params.url;
  const id = route.params.id;
  const [genInfo, setGenInfo] = useState();
  const [showTypes, setShowTypes] = useState(false);
  const [showPokemons, setShowPokemons] = useState(false);

  const fetchGenInfo = async () => {
    try {
      const response = await axios.get(`${url}`);
      setGenInfo(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchGenInfo();
  }, []);
  return (
    <View>
      <Button title="Show Types" onPress={() => setShowTypes(!showTypes)}/>
      {genInfo && showTypes && <Types info={genInfo.types} />}
      <PokemonList id={id}/>
    </View>
  );
}

export default DetailsGen;
