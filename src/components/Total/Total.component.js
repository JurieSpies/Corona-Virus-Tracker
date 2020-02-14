

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Total extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { title, number } = this.props
    return (
      <>
        <View style={styles.mainContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.number}>{number}</Text>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#272727',
    height: 140,
    margin: 15,
    marginBottom: 0,
    borderWidth: 1,
    borderColor: '#CDAE70',
    borderRadius: 5
  },
  title: {
    color: 'orange',
    alignSelf: 'center',
    fontSize: 24
  },
  number: {
    color: '#CDAE70',
    alignSelf: 'center',
    fontSize: 72
  },
});

export default Total;