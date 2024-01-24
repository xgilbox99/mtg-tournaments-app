import React, {useState} from "react";
import {Text} from "react-native";
import useFetch from "../../hooks/useFetch";
import FaceCard from "../cards/FaceCard";
import Structure from "../cards/Structure";

export default function BaseAppLayout() {
  const [cardName, setCardName] = useState<string>('')
  const [input, setInput] = useState<string>('')
  const {data, isLoading, error} = useFetch('https://api.scryfall.com/cards/search', cardName);

  const rest = {
    onPress: () => setCardName(input),
    onChangeText: (e: string) => setInput(e),
  };

  if (error) {
    return <Structure {...rest}>
      <Text style={{color: "red"}}>{error}</Text>
    </Structure>
  }

  if (isLoading) {
    return <Structure {...rest}>
      <Text>Loading cards...</Text>
    </Structure>
  }

  if (data) {
    return <Structure {...rest}>
      {data.data.map((el: any) => <FaceCard card={el} key={el.id}/>)}
    </Structure>
  }

  return <Structure {...rest}/>
}
