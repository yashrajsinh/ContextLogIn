import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import React from 'react';
{
  /* ===
  Login Button component
  This is responsible for login user takes 1 prop
  1. onPress : handles the press listener
  === */
}
export default function LogInButton({ text, onPress }: any) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}> {text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007AFF',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});
