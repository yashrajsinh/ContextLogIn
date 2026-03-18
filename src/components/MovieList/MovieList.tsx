import { FlatList } from 'react-native';
import React from 'react';
//Component
import MovieCard from '../MovieCard/MovieCard';

export default function MovieList({ movies }: any) {
  return (
    <FlatList
      data={movies}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => <MovieCard movie={item} />}
      showsVerticalScrollIndicator={false}
    />
  );
}
