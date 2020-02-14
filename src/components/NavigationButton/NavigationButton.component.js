import React, { Component } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

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
          style={styles.button}
          onPress={onPress}
        >
          <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
      </>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#CDAE70',
    borderRadius: 15,
    borderColor: 'orange',
    borderWidth: 3,
    marginTop: 25,
    marginHorizontal: 45,
    marginBottom: 0
  },
  title: {
    fontSize: 42,
    color: '#e6e6e6',
    alignSelf: 'center',
    padding: 5
  },
});

export default NavigationButton;