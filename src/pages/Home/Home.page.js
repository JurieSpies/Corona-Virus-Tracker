// PACKAGES
import React, { Component } from 'react';
import { View, Text, ScrollView, StatusBar } from 'react-native';
import SkeletonContent from "react-native-skeleton-content-nonexpo";
// STYLE
import styles from './Home.style';
// COMPONENTS
import Heading from '../../components/Heading/Heading.component';
import Total from '../../components/Total/Total.component';
import NavigationButton from '../../components/NavigationButton/NavigationButton.component';
import LastUpdated from '../../components/LastUpdated/LastUpdated'
import axios from 'axios';
import moment from 'moment'


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deaths: '',
      confirmed: '',
      recovered: '',
      isLoading: true,
    };
  }

  componentDidMount() {
    this.getQuery();
  }

  getQuery = () => {
    this.setState({ isLoading: true })
    axios.get(`https://services1.arcgis.com/0MSEUqKaxRlEPj5g/ArcGIS/rest/services/ncov_cases/FeatureServer/2/query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=Deaths%2C+Confirmed%2C+Recovered%2C+Country_Region&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=%5B%7B%22statisticType%22%3A%22sum%22%2C%22onStatisticField%22%3A%22Recovered%22%2C%22outStatisticFieldName%22%3A%22recovered%22%7D%2C%0D%0A%7B%22statisticType%22%3A%22sum%22%2C%22onStatisticField%22%3A%22Confirmed%22%2C%22outStatisticFieldName%22%3A%22confirmed%22%7D%2C%0D%0A%7B%22statisticType%22%3A%22sum%22%2C%22onStatisticField%22%3A%22Deaths%22%2C%22outStatisticFieldName%22%3A%22deaths%22%7D%5D&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token=`)
      .then(res => {
        const getAll = res.data.features[0].attributes;
        console.log('deaths =', getAll)
        this.setState({ confirmed: getAll.confirmed, recovered: getAll.recovered, deaths: getAll.deaths, isLoading: false })
      })
  }

  render() {
    const { navigation } = this.props
    const { deaths, confirmed, recovered, isLoading } = this.state

    return (
      <View style={{ flex: 1, backgroundColor: '#000' }}>
        <StatusBar hidden />
        <ScrollView>
          <Heading
            title='Coronavirus'
            refreshIcon
            fontSize={36}
            refreshFunc={() => this.getQuery()}
          />
          <SkeletonContent
            containerStyle={{ flex: 1 }}
            isLoading={isLoading}
            animationDirection='diagonalDownRight'
            duration={800}
            boneColor="#121212"
            highlightColor="#333333"
            animationType="pulse"
          >
            <Total
              key={'Death'}
              title="Total Deaths"
              number={deaths}
              style={{ backgroundColor: '#272727', height: 140, width: 400, alignSelf: 'center', marginTop: 15, borderWidth: 1, borderColor: '#CDAE70' }}
            />
            <Total
              key={'confirmed'}
              title="Total Confirmed"
              number={confirmed}
              style={{ backgroundColor: '#272727', height: 140, width: 400, alignSelf: 'center', marginTop: 15, borderWidth: 1, borderColor: '#CDAE70' }}
            />
            <Total
              key={'Recovered'}
              title="Total Recovered"
              number={recovered}
              style={{ backgroundColor: '#272727', height: 140, width: 400, alignSelf: 'center', marginTop: 15, borderWidth: 1, borderColor: '#CDAE70' }}
            />
          </SkeletonContent>

          {/* MAPED REMOVED FOR NOW */}
          {/* <NavigationButton title="MAP" onPress={() => navigation.navigate('Map')} /> */}
          <NavigationButton title="COUNTRIES" onPress={() => navigation.navigate('CountryStats')} />
          <>
            <LastUpdated date={moment().format('YYYY-MMM-DD HH:mm')} />
          </>
        </ScrollView>

      </View>
    );
  }
}

export default Home;
