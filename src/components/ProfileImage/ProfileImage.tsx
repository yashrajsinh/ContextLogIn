import { View, Image, StyleSheet } from 'react-native';
import React from 'react';
{
  /* ===
  ProfileImage component 
  Simply responsible for showing user image
  === */
}
export default function ProfileImage() {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://i.pinimg.com/736x/14/43/f9/1443f9ec6547cf549ea0d581d392c60b.jpg',
        }}
        style={styles.image}
      />
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
