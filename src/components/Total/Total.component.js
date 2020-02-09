

import React, { Component } from 'react';
import {ImageBackground, View, Text, TouchableOpacity,} from 'react-native';


class Total extends Component {
constructor(props) {
super(props);
this.state = {
};
}

render() {
  const { title,number } = this.props
  return (
<>
  <View style={{ backgroundColor: '#272727', height:140,margin:15,marginBottom:0,borderWidth:1,borderColor:'#CDAE70'}}>
    <Text style={{color:'orange', alignSelf: 'center',fontSize:24}}>{title}</Text>
    <Text style={{color:'#CDAE70', alignSelf: 'center',fontSize:72}}>{number}</Text>
  </View>
</>

);
}
}


/* Prop Types */
Total.propTypes = {
//  : propTypes.object.isRequired,
};

Total.defaultProps = {

};

export default Total;