// STARTED USING FUNCTIONS INSTEAD OF CLASS IN THIS PAGE
import React, { useState, useEffect, createRef } from 'react';
import { View, ActivityIndicator } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { DarkMap } from './CustommapStyle';
import Heading from '../../components/Heading/Heading.component';
import { COUNTRY_SUMMARY_URL, LAST_UPDATED_URL } from '../../constants';
import Axios from 'axios';
import CustomMapMarker from './CustomMapMarker';
import LastUpdated from '../../components/LastUpdated/LastUpdated';
import moment from 'moment';
import { normalizeFont } from '../../helper';

const Map = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [countries, setCountries] = useState([]);
  const [lastUpdated, setLastUpdated] = useState('');

  const getQuery = () => {
    setIsLoading(true);
    Axios.get(COUNTRY_SUMMARY_URL).then(res => {
      const countries = res.data.features;
      console.log('Countries =', countries);
      setCountries(countries);
      setIsLoading(false);
    });
    Axios.get(LAST_UPDATED_URL).then(res => {
      const getDateandTimeUpdated = res.data.editingInfo.lastEditDate;
      const dateTimeFormated = moment(getDateandTimeUpdated).format(
        'MMM DD YYYY hh:mm',
      );
      setLastUpdated(dateTimeFormated);
    });
  };

  useEffect(() => {
    getQuery();
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      <Heading
        title="Infection Map"
        refreshIcon
        backArrow
        fontSize={24}
        refreshFunc={getQuery}
      />
      {isLoading && (
        <ActivityIndicator size="large" style={{ marginTop: 50 }} />
      )}
      {!isLoading && (
        <>
          <MapView
            cacheEnabled={true}
            loadingEnabled={true}
            loadingBackgroundColor='#000'
            style={{ flex: 1, backgroundColor: 'black' }}
            mapType="standard"
            provider="google"
            zoomControlEnabled
            showsCompass
            region={{
              latitude: 47.28072,
              longitude: 8.4189143,
              latitudeDelta: 1,
              longitudeDelta: 150,
            }}
            customMapStyle={DarkMap}>
            {countries.map(country => (
              <CustomMapMarker country={country} />
            ))}
          </MapView>
          <LastUpdated date={lastUpdated} />
        </>
      )}
    </View>
  );
};

export default Map;
