import React from 'react'
import AppNavigation from './navigation/AppNavigation'
import { StyleSheet, View, StatusBar, } from 'react-native';
import ProductsScreen from './src/screens/ProductsScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <ProductsScreen />
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
});