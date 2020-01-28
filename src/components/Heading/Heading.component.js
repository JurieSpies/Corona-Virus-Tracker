import React, {Component} from 'react';
import {ImageBackground, View, Text, TouchableOpacity} from 'react-native';
import styles from './Heading.style';
import Reload from './SVG/Reload';

class ClassName extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {title} = this.props;
    return (
      <View style={{flexDirection: 'row'}}>
        <Text>{title}</Text>
        <Text>Icon</Text>
      </View>
    );
  }
}

import propTypes from 'prop-types';

/* Prop Types */
ClassName.propTypes = {
  myConstantHERE: propTypes.object.isRequired,
};

ClassName.defaultProps = {};

export default ClassName;
