import React, {Component} from 'react';
import {ImageBackground, View, Text, TouchableOpacity} from 'react-native';
import styles from './CountryStats.style';
// import propTypes from 'prop-types';

class CountryStats extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#f0f'}}>
        <Text>CountryStats</Text>
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
