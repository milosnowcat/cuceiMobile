import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import PokemonFeed from './components/PokemonFeed';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <PokemonFeed />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
