import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';

export default function ProfileActions({ onEdit, onLogout }: any) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.editBtn} onPress={onEdit}>
        <Text style={styles.editText}>Edit Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.logoutBtn} onPress={onLogout}>
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    paddingHorizontal: 20,
  },

  editBtn: {
    backgroundColor: '#111',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },

  editText: {
    color: '#fff',
    fontWeight: '600',
  },

  logoutBtn: {
    borderWidth: 1,
    borderColor: '#111',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },

  logoutText: {
    color: '#111',
    fontWeight: '600',
  },
});
