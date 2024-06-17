import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  Image,
} from 'react-native';
import axios from 'axios';

const PokemonFeed = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await axios.get(
          'https://pokeapi.co/api/v2/pokemon?limit=20',
        );
        const results = response.data.results;

        const detailedPokemonList = await Promise.all(
          results.map(async pokemon => {
            const pokemonDetails = await axios.get(pokemon.url);
            return {
              name: pokemon.name,
              image: pokemonDetails.data.sprites.front_default,
            };
          }),
        );

        setPokemonList(detailedPokemonList);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchPokemon();
  }, []);

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  const renderItem = ({item}) => (
    <View style={styles.pokemonContainer}>
      <Image source={{uri: item.image}} style={styles.pokemonImage} />
      <Text style={styles.pokemonName}>{item.name}</Text>
    </View>
  );

  return (
    <FlatList
      data={pokemonList}
      renderItem={renderItem}
      keyExtractor={item => item.name}
    />
  );
};

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pokemonContainer: {
    flexDirection: 'row',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    alignItems: 'center',
  },
  pokemonImage: {
    width: 50,
    height: 50,
    marginRight: 20,
  },
  pokemonName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PokemonFeed;
