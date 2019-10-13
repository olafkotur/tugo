import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { SlackService } from './src/server/services/slack';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <TouchableOpacity
        onPress={ () => SlackService.sendMessage("Hello I'm Juno, this is my first ever message! I hope that I will be able to help out here and there :)", 'report')}>
        <Text>Press meeeee</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
