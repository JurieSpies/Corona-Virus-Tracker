

import React, { Component } from 'react';
import { ImageBackground, View, Text, TouchableOpacity, } from 'react-native';


class LastUpdated extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { date } = this.props
    return (
      <View style={{}}>
        <Text style={{ color: 'grey', alignSelf: 'center', }}>Last updated: {date}</Text>
      </View>

    );
  }
}

/* Prop Types */
LastUpdated.propTypes = {
  //  : propTypes.object.isRequired,
};

LastUpdated.defaultProps = {

};

export default LastUpdated;