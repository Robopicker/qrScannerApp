import React from 'react';
import {View, StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';
import lootieJSON from './utils/lootieJSON';

const styles = StyleSheet.create({
  animationStyle: {
    width: 150,
    height: 150,
    opacity: 0.8,
    top: 8,
  },
  container: {
    position: 'absolute',
    borderRadius: 25,
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    justifyContent: 'center',
    backgroundColor: 'white',
    alignItems: 'center',
  },
});
export default function ScanningAnimmation() {
  return (
    <View style={styles.container}>
      <LottieView
        style={styles.animationStyle}
        source={lootieJSON.Scanning}
        autoPlay
        loop
      />
    </View>
  );
}
