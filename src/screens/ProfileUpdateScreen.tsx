import { View, StyleSheet, Alert } from 'react-native';
import React, { useContext, useState } from 'react';

// Components
import EditText from '../components/EditText/EdiText';
import LogInButton from '../components/LogInButton/LogInButton';

//Context
import { AuthContext } from '../context/AuthProvider';

export default function ProfileUpdateScreen() {
  const { user, updateUser } = useContext(AuthContext);
  //Local vars
  const [username, setUsername] = useState(user?.username || '');
  const [sex, setSex] = useState(user?.sex || '');

  //hadnle button press
  function handlePress() {
    updateUser({ username, sex });
    Alert.alert(`${username}`, 'Changes Updated !');
  }
  return (
    <View style={styles.container}>
      <EditText
        placeholder={user?.username}
        value={username}
        onChangeText={setUsername}
      />
      <EditText placeholder={user?.sex} value={sex} onChangeText={setSex} />

      <LogInButton text={'Update'} onPress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20, // adds space around all fields
    backgroundColor: '#f5f5f5', // subtle light background
  },
});
