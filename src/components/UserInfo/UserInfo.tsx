import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

//Component

export default function UserInfo({ name, email, sex }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
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
