import { FlatList } from 'react-native';
import React from 'react';
//Component
import MovieCard from '../MovieCard/MovieCard';

{
  /* ===
  MovieList component 
  This is responsible for showing movie obj data usign Flatlist it 
  calls card componet to render data 
  === */
}
export default function MovieList({ movies }: any) {
  const renderMovie = data => {
    return <MovieCard movie={data.item} />;
  };

  return <FlatList data={movies} renderItem={renderMovie} />;
}
