import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import NavOptions from '../components/NavOptions';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.imageLogo}
          source={{
            uri: 'https://links.papareact.com/gzs',
          }}
        />
        <View style={styles.navOptions}>
          <NavOptions />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  SafeAreaView: {
    backgroundColor: '#EAEDED',
    flex: 1,
  },
  logoContainer: {
    padding: 20,
  },
  imageLogo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  navOptions: {
    alignItems: 'center',
  },
});
