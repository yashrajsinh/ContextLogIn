import { View, Text, StyleSheet } from 'react-native';
import React, { useContext } from 'react';

//Context
import { AuthContext } from '../../context/AuthProvider';
{
  /* ===
  UserInfo component 
  Shows details of user data name etc
  === */
}

export default function UserInfo() {
  //context
  const { user } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{user?.username}</Text>
      <Text style={styles.info}>{user?.sex}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 15,
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
    color: '#111',
  },
  info: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
});
