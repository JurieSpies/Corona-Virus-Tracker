// PACKAGES
import React, { Component } from 'react';
import {
  ImageBackground,
  View,
  Text,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import Country from '../../components/Country/Country.component';
import axios from 'axios';
import moment from 'moment';
// STYLE
import styles from './CountryStats.style';
// COMPONENTS
import Heading from '../../components/Heading/Heading.component';
import LastUpdated from '../../components/LastUpdated/LastUpdated';
import { COUNTRY_SUMMARY_URL, LAST_UPDATED_URL } from '../../constants';

class CountryStats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: [],
      isLoading: true,
      lastUpdated: '',
    };
  }

  componentDidMount() {
    this.getQuery();
    this.getLastEditDate();
  }

  getQuery = () => {
    this.setState({ isLoading: true });
    axios.get(COUNTRY_SUMMARY_URL).then(res => {
      const countries = res.data.features;
      console.log('Countries =', countries);
      this.setState({ country: countries, isLoading: false });
    });
  };

  getLastEditDate = () => {
    this.setState({ isLoading: true });
    axios.get(LAST_UPDATED_URL).then(res => {
      const getDateandTimeUpdated = res.data.editingInfo.lastEditDate;
      const dateTimeFormated = moment(getDateandTimeUpdated).format(
        'MMM DD YYYY hh:mm',
      );
      this.setState({ lastUpdated: dateTimeFormated });
    });
  };

  render() {
    const { country, isLoading, lastUpdated } = this.state;
    return (
      <View style={styles.mainContainer}>
        <Heading
          title="Confirmed Cases by Country"
          backArrow
          refreshIcon
          refreshFunc={() => {
            this.getQuery(), this.getLastEditDate();
          }}
          fontSize={24}
        />
        <ScrollView>
          {isLoading && (
            <ActivityIndicator
              size="large"
              style={{ marginTop: 50, alignSelf: 'center' }}
            />
          )}
          {!isLoading &&
            country.map((specific, index) => (
              <View key={index}>
                <Country
                  name={specific.attributes.Country_Region}
                  amount={specific.attributes.confirmed}
                />
                <View style={styles.goldLine} />
              </View>
            ))}
          <View style={{ height: 50 }} />
        </ScrollView>
        <LastUpdated date={lastUpdated} />
      </View>
    );
  }
}

export default CountryStats;
