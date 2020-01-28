// PACKAGES
import React, {Component} from 'react';
import {View,TouchableOpacity, Alert} from 'react-native';
// STYLE
import styles from './Home.style';
// SVG
import Reload from '../../SVG/Reload'
import BackArrow from '../../SVG/BackArrow'
// COMPONENTS
import Heading from '../../components/Heading/Heading.component';
import Total from '../../components/Total/Total.component';
import NavigationButton from '../../components/NavigationButton/NavigationButton.component';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#000'}}>

        <Heading 
        title='Coronavirus'
        icon={  
          <TouchableOpacity>
            <Reload/>
          </TouchableOpacity>
        } 
        />

        <Total 
        title="Total Deaths"
        number="107"
        />
        <Total 
        title="Total Confirmed"
        number="4,747"
        />
        <Total 
        title="Total Recovered"
        number="63"
        />
      
      <NavigationButton title="MAP" onPress={()=>''}/>
      <NavigationButton title="COUNTRIES" onPress={()=>''}/>
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
