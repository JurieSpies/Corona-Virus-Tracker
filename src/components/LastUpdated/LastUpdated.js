
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class LastUpdated extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { date } = this.props
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.lastUpdateText}>Last updated: {date}</Text>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    marginVertical: 30
  },
  lastUpdateText: {
    color: 'grey',
    alignSelf: 'center',
  },
});


export default LastUpdated;