import React from "react";
import {Text, Image, StyleSheet, View} from "react-native";

export default function FaceCard({card}) {

  const styles = StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "column",
      alignContent: "center",
      alignItems: "center",
      justifyContent: "center",
      gap: 2,
      marginBottom: 20,
    },
    image: {
      width: 122, //488
      height: 170, // 680
    },
    flexView: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      alignContent: "center",
      alignItems: "center",
      justifyContent: "center",
      gap: 5,
    }
  });

  return <View style={styles.container}>
    <Text style={{textAlign: 'center'}}>{card.name}</Text>
    <View style={styles.flexView}>
      {card.image_uris && <Image
        style={styles.image}
        resizeMode="contain"
        src={card?.image_uris?.normal}
      />}
      {card.card_faces?.map((el, i) => <Image
          style={styles.image}
          resizeMode="contain"
          src={el.image_uris?.normal}
          key={i}
        />
      )}
    </View>
  </View>
}
