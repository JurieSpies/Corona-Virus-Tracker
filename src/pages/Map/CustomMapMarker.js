import React from 'react';
import { View, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Marker } from 'react-native-maps';

const CustomMapMarker = ({ country }) => {
  const {
    attributes: {
      recovered,
      confirmed,
      deaths,
      Country_Region: title,
      lat: latitude,
      long_: longitude,
    },
  } = country;
  return (
    <Marker
      onTouchMove={false}
      onPress={() =>
        Alert.alert(
          'Infection Information',
          `Country/Region: ${title} \nConfirmed: ${confirmed} \nRecovered: ${recovered} \nDeaths: ${deaths}`,
          [
            {
              text: 'Ok',
              style: 'cancel',
            },
          ],
        )
      }
      coordinate={{
        latitude,
        longitude,
      }}>
      <View style={styles.marker} />
    </Marker>
  );
};

const styles = StyleSheet.create({
  marker: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 30,
    backgroundColor: 'red',
  },
});
export default CustomMapMarker;
