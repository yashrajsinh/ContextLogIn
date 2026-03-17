import { View, Image, StyleSheet } from 'react-native';
import React from 'react';

export default function Logo() {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://waterfordwhispersnews.com/wp-content/uploads/2021/02/dicap.jpg',
        }}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 10,
  },
  image: {
    width: 220,
    height: 220,
  },
});
