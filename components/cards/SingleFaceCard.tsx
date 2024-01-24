import React from "react";
import { Text, Image, StyleSheet, Dimensions } from "react-native";

export default function SingleFaceCard( { card } ) {

    const win = Dimensions.get('window');

    const styles = StyleSheet.create({
        container: {
            marginTop: 40,
        },
        image: {
            width: win.width,
            height: win.height / 4
        }
    });

    return (
        <>
            <Text>{card.name}</Text>
            
            <Image 
                style={styles.image}
                resizeMode={'contain'}
                src={card?.image_uris?.normal} 
            />
        </>
    )
    
}
