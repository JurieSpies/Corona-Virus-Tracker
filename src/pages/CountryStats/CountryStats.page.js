// import propTypes from 'prop-types';

// PACKAGES
import React, { Component } from 'react';
import { ImageBackground, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import Country from '../../components/Country/Country.component'
// STYLE
import styles from './CountryStats.style';

// COMPONENTS
import Heading from '../../components/Heading/Heading.component';
import LastUpdated from '../../components/LastUpdated/LastUpdated';

class CountryStats extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const specificCountry = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    return (
      <View style={{ flex: 1, backgroundColor: '#000' }}>
        <Heading
          title="Confirmed Cases by Country"
          backArrow
          refreshIcon
          fontSize={18}
        />
        <ScrollView>

        {specificCountry.map(specific =>
          <View>
            <Country name="south africa" />
            <View style={{ height: 2, backgroundColor: '#CDAE70', width: '90%', alignSelf: 'center', }} />
          </View>
        )}
        <View style={{ height: 100 }} />
        </ScrollView>
        <LastUpdated date="2019/01/28 00:30"/>
        <View style={{ height: 30 }} />





      </View>
    );
  }
}

/* Prop Types */
CountryStats.propTypes = {
  // CountryStats : propTypes.object.isRequired,
};

CountryStats.defaultProps = {};

export default CountryStats;
