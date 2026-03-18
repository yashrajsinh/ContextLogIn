import { TextInput, StyleSheet } from 'react-native';
import React from 'react';
{
  /* ===
  InputField component
  This is responsible for showing input texts on log in screen takes 4 props
  1. placeholder
  2. value holds value of user input 
  3. onChange text where texts chagnes 
  4. secureTextEntry for pasword entry 
  === */
}
interface InputFieldProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
}

export default function InputField({
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
}: InputFieldProps) {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
});
