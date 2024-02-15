import React from 'react'
import AppNavigation from './navigation/AppNavigation'
import { StyleSheet, Text, View, StatusBar, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={{
        uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/nike/nike1.png"
      }}
        style={styles.image}
      />
      <StatusBar styles="auto" />
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
  image: {
    width: "100%",
    aspectRatio: 1,
  }
});