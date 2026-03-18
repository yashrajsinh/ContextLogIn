import { View, StyleSheet } from 'react-native';
import React, { useContext } from 'react';

// Components
import ProfileImage from '../components/ProfileImage/ProfileImage';
import UserInfo from '../components/UserInfo/UserInfo';

// Context
import { AuthContext } from '../context/AuthProvider';

export default function UserProfile() {
  const { username, setUsername } = useContext(AuthContext);

  const user = {
    name: username || 'Guest',
    email: 'user@email.com',
    sex: 'Male',
    image: 'https://i.pravatar.cc/300',
  };

  function handleEdit() {
    console.log('Edit Profile');
  }

  function handleLogout() {
    setUsername(null); // 🔥 logout
  }

  return (
    <View style={styles.container}>
      <ProfileImage uri={user.image} />
      <UserInfo name={user.name} email={user.email} sex={user.sex} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});
