import React, { useState } from "react";
import { View, Text, Image, StyleSheet, ScrollView, Dimensions, TextInput } from "react-native";
import useFetch from "../../hooks/useFetch";
import SingleFaceCard from "../cards/SingleFaceCard";
import MultipleFaceCard from "../cards/MultipleFaceCard";

export default function BaseAppLayout() {
    
    const win = Dimensions.get('window');

    const styles = StyleSheet.create({
        container: {
            marginTop: 40,
            paddingLeft: 10,
            paddingRight: 10,
            paddingBottom: 10,
        },
        image: {
            width: win.width,
            height: win.height / 3
        }
    });

    const { data: cards, isLoading: cardsLoading, error: cardsError } = useFetch('https://api.scryfall.com/cards/search');
    
    return (
        <View style={styles.container}>

            <TextInput
                style={{height: 40}}
                placeholder="Search cards!"
                onChangeText={newText => 'ciao'}
            />

            <ScrollView>

                {/* Cards loading */}
                {cardsError && <Text>{cardsError}</Text>}

                {/* Cards Error */}
                {cardsLoading && <Text>Loading cards...</Text>}

                { 
                    !!cards?.data && cards?.data?.length && cards?.data?.map( (card: any) => {
                        const hasMultipleFaces = !!card?.card_faces?.length

                        if( hasMultipleFaces )
                            return <MultipleFaceCard key={card.id} card={card} />
                        else
                            return <SingleFaceCard key={card.id} card={card} />
                    })
                }

            </ScrollView>
        </View>
    )
    
}
