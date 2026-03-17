import { View, StyleSheet, Alert } from 'react-native';
import React from 'react';

//components
import LogInButton from '../components/LogInButton/LogInButton';
import InputField from '../components/InputField/InputFiled';
import Logo from '../components/Logo/Logo';

export default function LogInScreen() {
  return (
    <View style={styles.container}>
      <Logo />
      <InputField placeholder="Email" />
      <InputField placeholder="Password" secureTextEntry />
      <LogInButton title={'log in'} onPress={() => Alert.alert('log in')} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
});
