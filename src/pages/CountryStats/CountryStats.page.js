// import propTypes from 'prop-types';

// PACKAGES
import React, { Component } from 'react';
import { ImageBackground, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import Country from '../../components/Country/Country.component'
import axios from 'axios';
// STYLE
import styles from './CountryStats.style';

// COMPONENTS
import Heading from '../../components/Heading/Heading.component';
import LastUpdated from '../../components/LastUpdated/LastUpdated';

class CountryStats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: []
    };
  }


  componentDidMount() {
    this.getQuery();
  }

  getQuery = () => {
    axios.get(`https://services1.arcgis.com/0MSEUqKaxRlEPj5g/ArcGIS/rest/services/ncov_cases/FeatureServer/2/query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=Last_Update%2C+Deaths%2C+Confirmed%2C+Recovered%2C+Country_Region%2C+Lat%2C+Long_%2C+&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=&groupByFieldsForStatistics=Country_Region%2C+lat%2C+long_&outStatistics=%5B%7B%22statisticType%22%3A%22sum%22%2C%22onStatisticField%22%3A%22Recovered%22%2C%22outStatisticFieldName%22%3A%22recovered%22%7D%2C%0D%0A%7B%22statisticType%22%3A%22sum%22%2C%22onStatisticField%22%3A%22Confirmed%22%2C%22outStatisticFieldName%22%3A%22confirmed%22%7D%2C%0D%0A%7B%22statisticType%22%3A%22sum%22%2C%22onStatisticField%22%3A%22Deaths%22%2C%22outStatisticFieldName%22%3A%22deaths%22%7D%5D&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token=`)
      .then(res => {
        const countries = res.data.features;
        console.log('Countries =', countries)
        this.setState({ country: countries })
      })
  }

  render() {
    const { country } = this.state;

    return (
      <View style={{ flex: 1, backgroundColor: '#000' }}>
        <Heading
          title="Confirmed Cases by Country"
          backArrow
          refreshIcon
          fontSize={18}
        />
        <ScrollView>

          {country.map(specific =>
            <View>
              <Country
                name={specific.attributes.Country_Region}
                amount={specific.attributes.confirmed}
              />
              <View style={{ height: 2, backgroundColor: '#CDAE70', width: '90%', alignSelf: 'center', }} />
            </View>
          )}
          <View style={{ height: 100 }} />
        </ScrollView>
        <LastUpdated date="2019/01/28 00:30" />
        <View style={{ height: 30 }} />





      </View>
    );
  }
}

/* Prop Types */
CountryStats.propTypes = {
  // CountryStats : propTypes.object.isRequired,
};

CountryStats.defaultProps = {};

export default CountryStats;
