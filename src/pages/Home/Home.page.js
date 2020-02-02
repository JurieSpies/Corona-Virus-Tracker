// PACKAGES
import React, { Component } from 'react';
import { View, Text } from 'react-native';
// STYLE
import styles from './Home.style';
// COMPONENTS
import Heading from '../../components/Heading/Heading.component';
import Total from '../../components/Total/Total.component';
import NavigationButton from '../../components/NavigationButton/NavigationButton.component';
import LastUpdated from '../../components/LastUpdated/LastUpdated'
import axios from 'axios';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deaths: '',
      confirmed:'',
      recovered:'',
    };
  }

   componentDidMount() {
      this.getQuery();
    }

    getQuery = () => {
      axios.get(`https://services1.arcgis.com/0MSEUqKaxRlEPj5g/ArcGIS/rest/services/ncov_cases/FeatureServer/2/query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=Deaths%2C+Confirmed%2C+Recovered%2C+Country_Region&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=%5B%7B%22statisticType%22%3A%22sum%22%2C%22onStatisticField%22%3A%22Recovered%22%2C%22outStatisticFieldName%22%3A%22recovered%22%7D%2C%0D%0A%7B%22statisticType%22%3A%22sum%22%2C%22onStatisticField%22%3A%22Confirmed%22%2C%22outStatisticFieldName%22%3A%22confirmed%22%7D%2C%0D%0A%7B%22statisticType%22%3A%22sum%22%2C%22onStatisticField%22%3A%22Deaths%22%2C%22outStatisticFieldName%22%3A%22deaths%22%7D%5D&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token=`)
      .then(res => {
        const getAll = res.data.features[0].attributes;
        console.log('deaths =',getAll)
        this.setState({ deaths: getAll.deaths})
        this.setState({ confirmed: getAll.confirmed})
        this.setState({ recovered: getAll.recovered})
    })
  }



  render() {
    const { navigation } = this.props
    const { deaths,confirmed,recovered } = this.state



    return (
      <View style={{ flex: 1, backgroundColor: '#000' }}>

        <Heading
          title='Coronavirus'
          refreshIcon
          fontSize={48}
        />

        <Total
          title="Total Deaths"
          number={deaths}
        />
        <Total
          title="Total Confirmed"
          number={confirmed}
        />
        <Total
          title="Total Recovered"
          number={recovered}
        />

        <NavigationButton title="MAP" onPress={() => navigation.navigate('Map')} />
        <NavigationButton title="COUNTRIES" onPress={() => navigation.navigate('CountryStats')} />
        <>
          <LastUpdated date="2019/01/20 20:30" />
        </>
      </View>
    );
  }
}

/* Prop Types */
Home.propTypes = {

};

Home.defaultProps = {};

export default Home;
