import { StyleSheet, Text, View } from 'react-native';
import BaseAppLayout from './components/layouts/BaseAppLayout';

export default function App() {
  return (
    <View style={styles.container}>
      <BaseAppLayout />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
