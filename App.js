import React from 'react'
import AppNavigation from './navigation/AppNavigation'
import { StyleSheet, View, StatusBar, } from 'react-native';
import ProductsScreen from './src/screens/ProductsScreen';
import ProductDetailsScreen from './src/screens/ProductDetailsScreen';

export default function App() {
  return (
    <View style={styles.container}>
      {/*<ProductsScreen />*/}
      <ProductDetailsScreen/>
      <StatusBar styles="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});