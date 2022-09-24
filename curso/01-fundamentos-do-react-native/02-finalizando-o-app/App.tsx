import { StatusBar, StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/Home';

export default function App() {
  return (
    <>
      <Home />
      <StatusBar 
        barStyle="light-content"
        backgroundColor='transparent' 
        translucent
      />
    </>
  );
}

