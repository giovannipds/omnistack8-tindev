import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

import logo from '../assets/logo.png';

export default function Login() {
  return (
    <View styles="styles.container">
      <Image source={logo}></Image>>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
