import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
{
  /* ===
  MovieCard component 
  This is responsible for showing movie obj data in card format 
  === */
}
export default function MovieCard({ movie }: any) {
  return (
    <TouchableOpacity activeOpacity={0.9} style={styles.wrapper}>
      <View style={styles.card}>
        <Image source={{ uri: movie.image }} style={styles.image} />

        <View style={styles.info}>
          <Text numberOfLines={1} style={styles.title}>
            {movie.name}
          </Text>

          <Text numberOfLines={2} style={styles.desc}>
            {movie.description}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 20,
  },

  card: {
    borderRadius: 18,
    backgroundColor: '#111',
    overflow: 'hidden',
    borderTopColor: 'rgba(255,255,255,0.12)',
    // subtle premium border
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.06)',

    // soft layered shadow (premium feel)
    elevation: 6, // Android
    shadowColor: '#000',
    shadowOpacity: 0.18,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 8 },
  },

  image: {
    width: '100%',
    height: 240,
  },

  info: {
    padding: 14,
  },

  title: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '600',
    marginBottom: 6,
    letterSpacing: 0.2,
  },

  desc: {
    color: '#aaa',
    fontSize: 13,
    lineHeight: 18,
  },
});
