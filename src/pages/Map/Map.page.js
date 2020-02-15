// STARTED USING FUNCTIONS INSTEAD OF CLASS IN THIS PAGE
import React from 'react';
import { View } from 'react-native';
import MapView from 'react-native-maps';
import  { DarkMap} from './CustommapStyle';

export default function Map() {
  return (
    <View style={{ flex: 1, backgroundColor: 'grey' }}>
      <MapView
        style={{ width: '100%', height: '80%', }}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        customMapStyle={DarkMap}
      />
    </View>
  );
}