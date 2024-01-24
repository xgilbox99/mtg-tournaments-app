import {Button, Dimensions, ScrollView, StyleSheet, TextInput, View} from "react-native";
import React, {ReactElement} from "react";

type StructureProps = {
  onChangeText?: (value: React.SetStateAction<string>) => void,
  onPress?: () => void
  children?: ReactElement
}
export default function Structure({onChangeText, onPress, children}: StructureProps) {
  const win = Dimensions.get('window').width;

  const styles = StyleSheet.create({
    container: {
      width: win - 40,
      display: "flex",
      flexDirection: "row",
      alignContent: "center",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 2,
      borderStyle: 'solid',
      borderColor: '#ddd',
      borderWidth: 1,
      marginBottom: 20,
    },
  });
  return (
    <View>
      <ScrollView>
        <View style={styles.container}>
          <TextInput
            placeholder='Inserisci il nome della carta...'
            onChangeText={onChangeText}
            onBlur={onPress}
            style={{paddingLeft: 10}}
          />
          <Button
            title="Cerca"
            onPress={onPress}
          />
        </View>
        {children}
      </ScrollView>
    </View>
  )
}
