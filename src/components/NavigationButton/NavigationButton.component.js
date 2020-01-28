

import React, { Component } from 'react';
import { ImageBackground, View, Text, TouchableOpacity, } from 'react-native';


class NavigationButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { title, onPress } = this.props
    return (
      <>
        <TouchableOpacity
          style={{ backgroundColor: '#CDAE70', borderRadius: 5, borderColor: '#fff', borderWidth: 1, margin: 15, marginBottom: 0, }}
          onPress={onPress}
        >
          <Text style={{ fontSize: 64, color: '#fff', alignSelf: 'center' }}>{title}</Text>
        </TouchableOpacity>
      </>
    );
  }
}

/* Prop Types */
NavigationButton.propTypes = {
  //  : propTypes.object.isRequired,
};

NavigationButton.defaultProps = {

};

export default NavigationButton;