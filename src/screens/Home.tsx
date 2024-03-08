import React from 'react';
import { ScrollView } from 'react-native';
import { MovieCard, MovieList } from '../components';

export const Home = () => {
  return (
    <ScrollView>
      <MovieCard pause={true} control={true} />
      <MovieList />
    </ScrollView>
  );
};
