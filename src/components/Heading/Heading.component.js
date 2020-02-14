import React, { Component } from 'react';
import { ImageBackground, View, Text, TouchableOpacity, Dimensions } from 'react-native';
import Reload from '../../SVG/Reload'
import BackArrow from '../../SVG/BackArrow'
import { withNavigation } from 'react-navigation';


const screenWidth = Dimensions.get('window').width
class HeadingText extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    const { title, refreshIcon, backArrow, fontSize, navigation,refreshFunc } = this.props;
    return (
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent:'center' , borderBottomColor: '#CDAE70', borderBottomWidth: 1, backgroundColor: '#272727', height: 80,paddingBottom:10, }}>

        <View  style={{flex:1,height: 80, alignItems: 'center', justifyContent: 'center',}}>
          {backArrow &&
            <TouchableOpacity
              style={{}}
              onPress={() => navigation.goBack()}
            >
              <BackArrow />
            </TouchableOpacity>
          }
        </View>

        <View style={{flex:5,height: 80}}>
          <Text
            style={[{
              color: '#CDAE70',
              textAlign: 'center',
              marginVertical: 15,
              paddingHorizontal: 30,
            },
            { fontSize }
            ]}
          >
            {title}
          </Text>
        </View>

        <View style={{flex:1,height: 80, alignItems: 'center', justifyContent: 'center',}}>
          {refreshIcon &&
            <TouchableOpacity
              style={{}}
              onPress={refreshFunc}
              >
              <Reload />
            </TouchableOpacity>
          }
        </View>

      </View >
    );
  }
}


/* Prop Types */
HeadingText.propTypes = {
  // : propTypes.object.isRequired,
};

// HeadingText.defaultProps = {};

export default withNavigation(HeadingText);
