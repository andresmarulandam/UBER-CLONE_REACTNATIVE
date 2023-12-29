import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { GOOGLE_MAPS_APIKEY } from '@env';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useDispatch } from 'react-redux';
import { setDestination } from '../slices/navSlice';
import { useNavigation } from '@react-navigation/native';

const NavigateCard = () => {
  const dispactch = useDispatch();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Text style={styles.text}>Good morning</Text>
      <View style={styles.view}>
        <View>
          <GooglePlacesAutocomplete
            placeholder="Where to?"
            styles={styles.googlePlacesAutocomplete}
            fetchDetails={true}
            returnKeyType={'search'}
            minLength={2}
            onPress={(data, details = null) => {
              dispactch(
                setDestination({
                  location: details.geometry.location,
                  description: data.description,
                }),
                navigation.navigate('RideOptionsCard'),
              );
            }}
            enablePoweredByContainer={false}
            query={{
              key: GOOGLE_MAPS_APIKEY,
              language: 'es',
            }}
            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={400}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NavigateCard;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: 'white',
  },
  view: {
    borderTopWidth: 1,
    flexShrink: 1,
    borderTopColor: 'black',
  },
  text: {
    textAlign: 'center',
    fontSize: 24,
    paddingVertical: 10,
  },
  googlePlacesAutocomplete: {
    container: {
      backgroundColor: 'white',
      paddingTop: 20,
      flex: 0,
    },
    textInput: {
      backgroundColor: '#DDDDDF',
      borderRadius: 0,
      fontSize: 18,
    },
    textInputContainer: {
      paddingHorizontal: 20,
      paddingBottom: 0,
    },
  },
});
