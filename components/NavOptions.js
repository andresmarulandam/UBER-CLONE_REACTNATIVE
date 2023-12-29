import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectOrigin } from '../slices/navSlice';

const data = [
  {
    id: '123',
    title: 'Get a ride',
    image: 'https://links.papareact.com/3pn',
    screen: 'MapScreen',
  },
  {
    id: '456',
    title: 'Order food',
    image: 'https://links.papareact.com/28w',
    screen: 'EatsScreen',
  },
];

const NavOptions = () => {
  const navigation = useNavigation();
  const origin = useSelector(selectOrigin);
  return (
    <FlatList
      contentContainerStyle={styles.flatList}
      data={data}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate(item.screen)}
          style={styles.touchableOpacity}
          disabled={!origin}
        >
          <View style={styles.viewFlatList}>
            <Image style={styles.imageFlatlist} source={{ uri: item.image }} />
            <Text style={styles.text}>{item.title}</Text>
            <FontAwesome5
              style={styles.iconArrow}
              name="arrow-circle-right"
              size={24}
              color="black"
            />
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;

const styles = StyleSheet.create({
  viewFlatList: {
    alignItems: 'center',
  },
  imageFlatlist: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
  },
  touchableOpacity: {
    backgroundColor: '#D5DBDB',
    margin: 5,
    padding: 2,
    paddingLeft: 6,
    paddingBottom: 8,
    paddingTop: 4,
    borderRadius: 8,
    width: 150,
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
  },
  iconArrow: {
    margin: 10,
  },
});
