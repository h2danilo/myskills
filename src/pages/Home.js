import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  TouchableOpacity,
} from 'react-native';

export function Home() {
  return (
    <View style={styles.Container}>
      <Text style={styles.Title}>Welcome, Danilo</Text>
      <TextInput
        style={styles.Input}
        placeholder="New Skill"
        placeholderTextColor="#cecece"
      />
      <TouchableOpacity style={styles.Button} activeOpacity={0.8}>
        <Text style={styles.ButtonText}>Add</Text>
      </TouchableOpacity>

      <Text style={[styles.Title, {marginTop: 50}]}>My Skills:</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 30,
    backgroundColor: '#121015',
  },
  Title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  Input: {
    backgroundColor: '#1F1E25',
    fontSize: 18,
    color: '#FFF',
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 7,
  },
  Button: {
    backgroundColor: '#A370f7',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 20,
  },
  ButtonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },
});
