import { View, StyleSheet, Alert } from 'react-native';
import React, { useContext } from 'react';

//components
import LogInButton from '../components/LogInButton/LogInButton';
import InputField from '../components/InputField/InputFiled';
import Logo from '../components/Logo/Logo';

//Context
import { AuthContext } from '../context/AuthProvider';

export default function LogInScreen({ navigation }: any) {
  //use context
  const { username, setUsername, password, setPassword } =
    useContext(AuthContext);
  //Handle login with nav
  function handleLogIn() {
    navigation.navigate('MainTabs');
  }
  return (
    <View style={styles.container}>
      <Logo />
      <InputField
        placeholder="Email"
        value={username}
        onChangeText={setUsername}
      />
      <InputField
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <LogInButton title={'log in'} onPress={handleLogIn} />
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
