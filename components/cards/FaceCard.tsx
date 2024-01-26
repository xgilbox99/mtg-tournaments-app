import React from "react";
import {Text, Image, View} from "react-native";
import { core, whiteColor } from "../../assets/styles/coreStyles";

export default function FaceCard({card}) {
  return <View style={core.centeredColumnView}>
    <Text style={
      {
        ...core.alignCenter,
        color: whiteColor,
      }
    }>
      {card.name}
    </Text>
    <View style={core.centeredRowView}>
      {card.image_uris && <Image
        style={{
          ...core.cardImageListSize,
          ...core.marginBottom2
        }}
        resizeMode="contain"
        src={card?.image_uris?.png}
      />}
      {card.card_faces?.map((el, i) => <Image
          style={{
            ...core.cardImageListSize,
            ...core.marginBottom2
          }}
          resizeMode="contain"
          src={el.image_uris?.png}
          key={i}
        />
      )}
    </View>
  </View>
}
