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
    const { title, refreshIcon, backArrow, fontSize,navigation } = this.props;
    return (
      <View style={{ flexDirection: 'row', alignItems: 'center', borderBottomColor: '#CDAE70', borderBottomWidth: 1, backgroundColor: '#272727', justifyContent: 'space-evenly', height: 80 }}>

        <View style={{}}>
          {backArrow &&
            <TouchableOpacity
            style={{}}
            onPress={() => navigation.goBack()}
            >
              <BackArrow />
            </TouchableOpacity>
          }
        </View>

        <View style={{}}>
          <Text
            style={[{
              color: '#CDAE70',
              textAlign: 'center',
              marginBottom: 15,
              paddingHorizontal: 30,
            },
              {fontSize}
            ]}
          >
              {title}
          </Text>
      </View>

      <View style={{}}>
        {refreshIcon &&
          <TouchableOpacity style={{}}>
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
