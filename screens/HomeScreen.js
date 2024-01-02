import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '@env';
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../slices/navSlice';
import NavFavourites from '../components/NavFavourites';

const HomeScreen = () => {
  const dispatch = useDispatch();
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
        <View style={styles.viewGoogle}>
          <GooglePlacesAutocomplete
            placeholder="Where from?"
            styles={{
              container: {
                flex: 0,
                margin: 10,
              },
              textInput: {
                fontSize: 16,
              },
            }}
            onPress={(data, details = null) => {
              dispatch(
                setOrigin({
                  location: details.geometry.location,
                  description: data.description,
                }),
              );
              dispatch(setDestination(null));
            }}
            fetchDetails={true}
            returnKeyType={'search'}
            enablePoweredByContainer={false}
            minLength={2}
            query={{
              key: GOOGLE_MAPS_APIKEY,
              language: 'es',
            }}
            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={400}
          />
          <NavFavourites />
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
  viewGoogle: {},
});
