import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';

import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectTravelTimeInformation } from '../slices/navSlice';

const data = [
  {
    id: 'Uber-X',
    title: 'UberX',
    multiplier: 1,
    image: 'https://links.papareact.com/3pn',
  },
  {
    id: 'Uber-XL',
    title: 'Uber XL',
    multiplier: 1.2,
    image: 'https://links.papareact.com/5w8',
  },
  {
    id: 'Uber-LUX',
    title: 'Uber LUX',
    multiplier: 1.7,
    image: 'https://links.papareact.com/7pf',
  },
];

const SURGE_CHARGE_RATE = 6;

const RideOptionsCard = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);
  const travelTimeInformation = useSelector(selectTravelTimeInformation);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.view}>
        <TouchableOpacity
          onPress={() => navigation.navigate('NavigateCard')}
          style={styles.touchable}
        >
          <Icon name="leftcircleo" type="antdesign" />
        </TouchableOpacity>
        <Text style={styles.textRide}>
          Select a Ride - {travelTimeInformation?.distance?.text}
        </Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item: { id, title, multiplier, image }, item }) => (
          <TouchableOpacity
            onPress={() => setSelected(item)}
            style={[
              styles.touchableFlatList,
              id === selected?.id && { backgroundColor: '#D5DBDB' },
            ]}
          >
            <Image
              style={styles.image}
              resizeMode="contain"
              source={{ uri: image }}
            />
            <View style={styles.viewTexts}>
              <Text style={styles.textTitle}>{title}</Text>
              <Text style={styles.travelTime}>
                {travelTimeInformation?.duration?.text} Travel Time
              </Text>
            </View>
            <Text style={styles.textMoney}>
              {new Intl.NumberFormat('es-CO', {
                style: 'currency',
                currency: 'COP',
              }).format(
                travelTimeInformation?.duration.value *
                  SURGE_CHARGE_RATE *
                  multiplier,
              )}
            </Text>
          </TouchableOpacity>
        )}
      />
      <View>
        <TouchableOpacity
          disabled={!selected}
          style={[
            styles.touchableChoose,
            !selected && { backgroundColor: '#D5DBDB' },
          ]}
        >
          <Text style={styles.textChoose}>Choose {selected?.title}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RideOptionsCard;
const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: 'white',
    flexGrow: 1,
  },
  touchable: {
    borderRadius: 60,
    marginLeft: 12,
    marginTop: 5,
  },
  view: {
    flexDirection: 'row',
    alignItems: 'center',

    margin: 10,
  },
  textRide: {
    fontSize: 20,
    marginLeft: 70,
  },
  image: {
    height: 100,
    width: 100,
  },
  touchableFlatList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  textTitle: {
    fontSize: 20,
    fontWeight: '400',
  },
  travelTime: {
    fontSize: 12,
  },
  textMoney: {
    fontSize: 16,
    marginRight: 20,
  },
  touchableChoose: {
    backgroundColor: 'black',
    marginHorizontal: 20,
    paddingVertical: 5,
    marginBottom: 20,
    borderRadius: 5,
  },
  textChoose: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
  },
  viewTexts: {
    marginRight: 20,
  },
});
