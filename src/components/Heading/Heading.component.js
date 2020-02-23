import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Reload from '../../SVG/Reload';
import BackArrow from '../../SVG/BackArrow';
import { withNavigation } from 'react-navigation';

class HeadingText extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      title,
      refreshIcon,
      backArrow,
      fontSize,
      navigation,
      refreshFunc,
    } = this.props;
    return (
      <View style={styles.mainContainer}>
        <View style={styles.backarrowView}>
          {backArrow && (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <BackArrow />
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.titleView}>
          <Text style={[styles.title, { fontSize }]}>{title}</Text>
        </View>
        <View style={styles.refreshView}>
          {refreshIcon && (
            <TouchableOpacity onPress={refreshFunc}>
              <Reload />
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: '#CDAE70',
    borderBottomWidth: 1,
    backgroundColor: '#272727',
    height: 80,
    paddingBottom: 10,
  },
  backarrowView: {
    flex: 1,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleView: {
    flex: 5,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#CDAE70',
    textAlign: 'center',
    marginVertical: 15,
    paddingHorizontal: 30,
  },
  refreshView: {
    flex: 1,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default withNavigation(HeadingText);
