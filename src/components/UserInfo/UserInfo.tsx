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

export default function UserInfo({ name, email, sex }: any) {
  //context
  const { username } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{username}</Text>
      <Text style={styles.info}>{email}</Text>
      <Text style={styles.info}>{sex}</Text>
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
