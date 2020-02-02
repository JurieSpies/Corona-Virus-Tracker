

import React, { Component } from 'react';
import { ImageBackground, View, Text, TouchableOpacity, } from 'react-native';



class Country extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { name } = this.props
    return (
      <View style={{ flexDirection: 'row', width: '100%', paddingHorizontal: 10 }}>
        <Text style={{ color: 'grey', width: '50%', marginVertical: 15 }}>{name}</Text>
        <Text style={{ color: '#fff', marginVertical: 15 }}>8</Text>
      </View>

    );
  }
}

/* Prop Types */
Country.propTypes = {
  // : propTypes.object.isRequired,
};

Country.defaultProps = {

};

export default Country;