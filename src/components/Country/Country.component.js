
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Country extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { name, amount } = this.props
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.amount}>{amount}</Text>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    color: 'grey',
    width: '50%',
    marginVertical: 15
  },
  name: {
    color: 'grey',
    width: '50%',
    marginVertical: 15
  },
  amount: {
    color: '#fff',
    marginVertical: 15
  },
});

export default Country;