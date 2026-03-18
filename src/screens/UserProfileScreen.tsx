import { View, StyleSheet, Alert } from 'react-native';
import React, { useContext } from 'react';

//Components
import ProfileImage from '../components/ProfileImage/ProfileImage';
import UserInfo from '../components/UserInfo/UserInfo';
import ProfileHandlers from '../components/ProfileHandlers/ProfileHandlers';

//Context
import { AuthContext } from '../context/AuthProvider';

export default function UserProfile() {
  const { logout } = useContext(AuthContext);
  function handleLogOut() {
    Alert.alert('Confirm Logout', 'Are you sure?', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Logout', onPress: logout },
    ]);
  }
  return (
    <View style={styles.container}>
      <ProfileImage />
      <UserInfo />
      <ProfileHandlers onLogout={handleLogOut} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});
