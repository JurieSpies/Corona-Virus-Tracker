import React, {Component} from 'react';
import {ImageBackground, View, Text, TouchableOpacity} from 'react-native';


class HeadingText extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {title,icon,backArrow} = this.props;
    return (
      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around',borderBottomColor:'#CDAE70',borderBottomWidth:1,backgroundColor:'#272727'}}>
          <View style={{ }}>
            {backArrow}
          </View>
          <View>
            <Text style={{fontSize:48,color:'#CDAE70'}}>{title}</Text>
          </View>
          <View style={{ }}>
            {icon}
          </View>
      </View> 
    );
  }
}


/* Prop Types */
HeadingText.propTypes = {
  // : propTypes.object.isRequired,
};

// HeadingText.defaultProps = {};

export default HeadingText;
