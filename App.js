import React from 'react'
import { StyleSheet, View, StatusBar, } from 'react-native';
import Navigation from './src/navigation';
import { Provider } from 'react-redux';
import { store } from './src/store';

export default function App() {
  return (
    <Provider store={store}>
        <Navigation />
        <StatusBar styles="auto" />
    </Provider>
  );
}

