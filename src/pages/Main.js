import React from 'react';
import { View, SafeAreaView, Image, StyleSheet } from 'react-native';

import logo from '../assets/logo.png';

export default function Main() {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={logo} />

      <View style={styles.cardsContainer}>
        <View style={styles.card}>
          <Image source={{ uri: 'https://avatars2.githubusercontent.com/u/861751?v=4' }} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  cardsContainer: {},
});
