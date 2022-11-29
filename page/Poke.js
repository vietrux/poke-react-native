import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, StyleSheet, Text, View, Image, ScrollView, Alert, TextInput } from 'react-native';
import React, { useState, useEffect } from 'react';

export default function Poke({ navigation }) {
  const [listdata, setListdata] = useState()
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    async function getData() {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')
      const data = await response.json()
      //get the data from each pokemon
      const pokemon = data.results.map(async (pokemon) => {
        const response = await fetch(pokemon.url)
        const data = await response.json()
        return data
      })
      //wait for all the pokemon to be fetched
      const pokemonData = await Promise.all(pokemon)
      setLoading(false)
      setListdata(pokemonData)
    }
    getData()
  }, [])

  return (
    <>
      <StatusBar />
      <Image source={
        { uri: "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" }
      } style={{
        width: 100,
        height: 100,
        resizeMode: 'contain',
        alignSelf: 'center',
      }} />
      <Text style={{
        textAlign: 'center',
      }}>-Dev: Cẩm Giang Ngoo-</Text>
      <TextInput />
      <ScrollView contentContainerStyle={styles.container}>
        {loading ? <Text>Loading...</Text> : listdata && listdata.map((pokemon, index) => {
          return (
            <TouchableOpacity key={index} style={styles.card}
              onPress={() =>
                navigation.navigate('OnePoke', { poke: pokemon })
              }>
              <Image source={{ uri: pokemon.sprites.other["official-artwork"].front_default }} style={{
                objectFit: 'cover',
                width: 100,
                height: 100,
              }} />
              <Text>{pokemon.name}</Text>
            </TouchableOpacity>
          )
        })}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    width: '100%',
    flexWrap: 'wrap',
    flexDirection: 'row',
    paddingBottom: 100,
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  card: {
    width: '45%',
    backgroundColor: '#fdf',
    margin: 5,
    padding: 10,
    borderRadius: 10,
  }
});
