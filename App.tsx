import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import QRPage from './src/QRPage';

interface componentNameProps {}

const App = (props: componentNameProps) => {
  return (
    <View style={styles.container}>
      <QRPage />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: { flex: 1 }
});
