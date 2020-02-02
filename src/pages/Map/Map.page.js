import React, {Component} from 'react';
import {ImageBackground, View, Text, TouchableOpacity} from 'react-native';
import styles from './Map.style';
// import propTypes from 'prop-types';

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#f0f'}}>
        <Text>Map</Text>
      </View>
    );
  }
}

/* Prop Types */
Map.propTypes = {

};

Map.defaultProps = {};

export default Map;
