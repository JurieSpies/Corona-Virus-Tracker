

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
          style={{ backgroundColor: '#CDAE70', borderRadius: 15, borderColor: 'orange', borderWidth: 3, marginTop:25, marginHorizontal:45, marginBottom: 0, }}
          onPress={onPress}
        >
          <Text style={{ fontSize: 42, color: '#e6e6e6', alignSelf: 'center',padding:5 }}>{title}</Text>
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