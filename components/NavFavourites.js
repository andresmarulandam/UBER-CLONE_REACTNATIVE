import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { Icon } from 'react-native-elements';

const data = [
  {
    id: '1',
    icon: 'home',
    location: 'Home',
    destination: 'Portal 80',
  },
  {
    id: '2',
    icon: 'pool',
    location: 'Pool',
    destination: 'Compensar',
  },
];

const NavFavourites = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => {
        <View style={{ backgroundColor: 'orange', height: 0.5 }} />;
      }}
      renderItem={({ item: { location, destination, icon } }) => (
        <TouchableOpacity style={styles.touchable}>
          <Icon style={styles.icon} name={icon} color="white" size={32} />
          <View>
            <Text style={styles.locationText}>{location}</Text>
            <Text style={styles.destinationText}>{destination}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavFavourites;

const styles = StyleSheet.create({
  touchable: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    backgroundColor: '#E5E7E9',
    borderRadius: 10,
    margin: 6,
  },
  locationText: {
    fontSize: 18,
    fontWeight: '500',
  },
  destinationText: {
    color: 'gray',
  },
  icon: {
    marginLeft: 10,
    marginRight: 15,
    backgroundColor: '#D7DBDD',
    borderRadius: 60,
    overflow: 'hidden',
  },
});
