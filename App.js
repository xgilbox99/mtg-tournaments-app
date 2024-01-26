import { StatusBar, View } from 'react-native';
import BaseAppLayout from './components/layouts/BaseAppLayout';
import { core, darkColor } from './assets/styles/coreStyles.tsx';

export default function App() {
  return (
    <View style={core.appContainerDark}>
      <StatusBar backgroundColor={darkColor} barStyle="light-content" />
      <BaseAppLayout />
    </View>
  )
}