import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

//Components
import ProfileActions from '../components/ProfileActions/ProfileActions';
import ProfileImage from '../components/ProfileImage/ProfileImage';
import UserInfo from '../components/UserInfo/UserInfo';

export default function UserProfile() {
  const user = {
    name: 'Gal',
    email: 'Gal@justice.com',
    sex: 'Female',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPybEzNZOlIF31cQUSEc6wcpkEHgOc4krr9g&s',
  };

  return (
    <View style={styles.container}>
      <ProfileImage uri={user.image} />
      <UserInfo name={user.name} email={user.email} sex={user.sex} />
      <ProfileActions
        onEdit={() => console.log('Edit')}
        onLogout={() => console.log('Logout')}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});
