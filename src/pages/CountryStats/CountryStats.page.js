// PACKAGES
import React, { Component } from 'react';
import { ImageBackground, View, Text, ScrollView, ActivityIndicator, } from 'react-native';
import Country from '../../components/Country/Country.component'
import axios from 'axios';
import moment from 'moment'
// STYLE
import styles from './CountryStats.style';
// COMPONENTS
import Heading from '../../components/Heading/Heading.component';
import LastUpdated from '../../components/LastUpdated/LastUpdated';

class CountryStats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: [],
      isLoading: true,
      lastUpdated: ''
    };
  }

  componentDidMount() {
    this.getQuery();
    this.getLastEditDate();
  }
  getQuery = () => {
    this.setState({ isLoading: true })
    axios.get(`https://services1.arcgis.com/0MSEUqKaxRlEPj5g/ArcGIS/rest/services/ncov_cases/FeatureServer/2/query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=Last_Update%2C+Deaths%2C+Confirmed%2C+Recovered%2C+Country_Region%2C+Lat%2C+Long_%2C+&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=&groupByFieldsForStatistics=Country_Region%2C+lat%2C+long_&outStatistics=%5B%7B%22statisticType%22%3A%22sum%22%2C%22onStatisticField%22%3A%22Recovered%22%2C%22outStatisticFieldName%22%3A%22recovered%22%7D%2C%0D%0A%7B%22statisticType%22%3A%22sum%22%2C%22onStatisticField%22%3A%22Confirmed%22%2C%22outStatisticFieldName%22%3A%22confirmed%22%7D%2C%0D%0A%7B%22statisticType%22%3A%22sum%22%2C%22onStatisticField%22%3A%22Deaths%22%2C%22outStatisticFieldName%22%3A%22deaths%22%7D%5D&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token=`)
      .then(res => {
        const countries = res.data.features;
        console.log('Countries =', countries)
        this.setState({ country: countries, isLoading: false })
      })
  }

  getLastEditDate = () => {
    this.setState({ isLoading: true })
    axios.get(`https://services1.arcgis.com/0MSEUqKaxRlEPj5g/arcgis/rest/services/ncov_cases/FeatureServer/2?f=json`)
      .then(res => {
        const getDateandTimeUpdated = res.data.editingInfo.lastEditDate;
        const dateTimeFormated =moment(getDateandTimeUpdated).format('MMM DD YYYY hh:mm')
        this.setState({lastUpdated:dateTimeFormated })
      })
  }

  render() {
    const { country, isLoading,lastUpdated } = this.state;
    return (
      <View style={styles.mainContainer}>
        {isLoading ? (<ActivityIndicator style={{ alignSelf: 'center', }} />) :
          <>
            <Heading
              title="Confirmed Cases by Country"
              backArrow
              refreshIcon
              refreshFunc={() => {this.getQuery(),this.getLastEditDate()}}
              fontSize={24}
            />
            <ScrollView>
              {country.map(specific =>
                <View>
                  <Country
                    name={specific.attributes.Country_Region}
                    amount={specific.attributes.confirmed}
                  />
                  <View style={styles.goldLine} />
                </View>
              )}
              <View style={{ height: 50 }} />
            </ScrollView>
            <LastUpdated date={lastUpdated} />
          </>
        }
      </View>
    );
  }
}


export default CountryStats;
