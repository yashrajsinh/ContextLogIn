import { View, StyleSheet, Alert } from 'react-native';
import React, { useContext, useState } from 'react';

//components
import LogInButton from '../components/LogInButton/LogInButton';
import InputField from '../components/InputField/InputFiled';
import Logo from '../components/Logo/Logo';

//Context
import { AuthContext } from '../context/AuthProvider';

//data
import UserData from '../data/UsersData';

export default function LogInScreen() {
  const { login } = useContext(AuthContext);
  const { user } = useContext(AuthContext);

  // local state (better than storing temp input in context)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleLogIn() {
    if (!email.trim() || !password.trim()) {
      Alert.alert('Error!', 'Enter email and password');
      return;
    }

    const foundUser = UserData.find(
      u => u.username === email && u.password === password,
    );

    if (!foundUser) {
      Alert.alert('Login Failed', 'Invalid email or password');
      return;
    }

    login(foundUser); // store user in context
  }

  return (
    <View style={styles.container}>
      <Logo />
      <InputField placeholder="Email" value={email} onChangeText={setEmail} />
      <InputField
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <LogInButton onPress={handleLogIn} />
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
