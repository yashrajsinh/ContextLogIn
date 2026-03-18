import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';

export default function MovieCard({ movie }: any) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: movie.image }} style={styles.image} />
      <Text style={styles.title}>{movie.name}</Text>
      <Text style={styles.desc}>{movie.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
  },
  desc: {
    fontSize: 14,
    color: '#555',
    marginTop: 4,
  },
});
