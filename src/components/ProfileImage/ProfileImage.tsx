import { View, Image, StyleSheet } from 'react-native';
import React from 'react';

export default function ProfileImage({ uri }: any) {
  return (
    <View style={styles.container}>
      <Image source={{ uri }} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 30,
  },
  image: {
    width: 110,
    height: 110,
    borderRadius: 55,

    borderWidth: 2,
    borderColor: '#222',

    // soft shadow
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
});
