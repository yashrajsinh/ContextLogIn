import { View, StyleSheet } from 'react-native';
import React from 'react';
//Component
import MovieList from '../components/MovieList/MovieList';
//Data
import data from '../data/MovieData';

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <MovieList movies={data} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f2f2f2',
  },
});
