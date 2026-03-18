import { View, Image, StyleSheet } from 'react-native';
import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
{
  /* ===
  ProfileImage component 
  Simply responsible for showing user image
  === */
}
export default function ProfileImage() {
  const { user } = useContext(AuthContext); // get the logged-in user
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: user?.image,
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
