import {Button, ScrollView, TextInput, View} from "react-native";
import React, {ReactElement} from "react";
import { core, lightColor } from "../../assets/styles/coreStyles";


type StructureProps = {
  onChangeText?: (value: React.SetStateAction<string>) => void,
  onPress?: () => void
  children?: ReactElement
}
export default function Structure({onChangeText, onPress, children}: StructureProps) {
  return (
    <View>
      <ScrollView>
        <View style={{padding: 20}}>
          <TextInput
            style={core.textInputDark}
            placeholderTextColor={lightColor}
            placeholder='Inserisci il nome della carta...'
            onChangeText={onChangeText}
            onBlur={onPress}
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
