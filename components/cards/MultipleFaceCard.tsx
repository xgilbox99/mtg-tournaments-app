import React from "react";
import { Text, Image, StyleSheet, Dimensions, View } from "react-native";

export default function MultipleFaceCard( { card } ) {

    const win = Dimensions.get('window');

    const styles = StyleSheet.create({
        container: {
            marginTop: 40,
        },
        image: {
            width: '45%',
            height: win.height / 4
        },
        flexView: {
            display: "flex", 
            flexDirection: "row", 
            flexWrap: "wrap", 
            alignContent: "center", 
            alignItems: "center", 
            justifyContent: "center"
        }
    });

    return (
        <>
            <Text>{card.name}</Text>

            <View style={styles.flexView}>
            { 
            !!card?.card_faces && card?.card_faces?.length && card?.card_faces?.map( (card_face: any, index: number) => (                
                    <Image
                        key={index}
                        style={styles.image}
                        resizeMode={'contain'}
                        src={card_face?.image_uris?.normal} 
                    />
            ))
            }
            </View>
        </>
    )
    
}
