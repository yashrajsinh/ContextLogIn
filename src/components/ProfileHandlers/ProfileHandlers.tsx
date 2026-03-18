import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
{
  /* ===
  ProfileHandlers component 
  This is responsible for showing 2 buttons ad 2 props
  1. onEdit : lets user edit the exitsting data
  2. onLogout : lets user logout of the app
  === */
}
export default function ProfileHandlers({ onEdit, onLogout }: any) {
  return (
    <View style={styles.container}>
      {/* === EDIT BUTTON ===*/}
      <TouchableOpacity style={styles.editButton} onPress={onEdit}>
        <Text style={styles.buttonText}>Edit</Text>
      </TouchableOpacity>
      {/* === LOG OUT BUTTON ===*/}
      <TouchableOpacity style={styles.logoutButton} onPress={onLogout}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  editButton: {
    backgroundColor: '#4CAF50',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
  },
  logoutButton: {
    backgroundColor: '#f44336',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
