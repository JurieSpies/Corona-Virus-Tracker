import React, {Component} from 'react';
import {View} from 'react-native';
import styles from './Home.style';
import Heading from '../../components/Heading/Heading.component';
// import propTypes from 'prop-types';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#272727'}}>
        <Heading title="My Title " />
      </View>
    );
  }
}

/* Prop Types */
Home.propTypes = {
  // myConstantHERE : propTypes.object.isRequired,
};

Home.defaultProps = {};

export default Home;
