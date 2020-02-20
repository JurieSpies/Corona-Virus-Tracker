// PACKAGES
import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  StatusBar,
  RefreshControl,
} from 'react-native';
import SkeletonContent from 'react-native-skeleton-content-nonexpo';
// STYLE
import styles from './Home.style';
// COMPONENTS
import Heading from '../../components/Heading/Heading.component';
import Total from '../../components/Total/Total.component';
import NavigationButton from '../../components/NavigationButton/NavigationButton.component';
import LastUpdated from '../../components/LastUpdated/LastUpdated';
import axios from 'axios';
import moment from 'moment';
import { SUMMARY_URL, LAST_UPDATED_URL } from '../../constants';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deaths: '',
      confirmed: '',
      recovered: '',
      isLoading: true,
      lastUpdated: '',
    };
  }

  componentDidMount() {
    this.getQuery();
    this.getLastEditDate();
  }

  getQuery = () => {
    this.setState(prevState => ({ ...prevState, isLoading: true }));
    axios.get(SUMMARY_URL).then(res => {
      console.log(res);
      const getAll = res.data.features[0].attributes;
      // console.log('deaths =', getAll)
      this.setState(prevState => ({
        ...prevState,
        confirmed: getAll.confirmed,
        recovered: getAll.recovered,
        deaths: getAll.deaths,
      }));
      setTimeout(() => this.setState({ isLoading: false }), 1);
    });
  };

  getLastEditDate = () => {
    axios.get(LAST_UPDATED_URL).then(res => {
      const getDateandTimeUpdated = res.data.editingInfo.lastEditDate;
      const dateTimeFormated = moment(getDateandTimeUpdated).format(
        'MMM DD YYYY hh:mm',
      );
      this.setState(prevState => ({
        ...prevState,
        lastUpdated: dateTimeFormated,
      }));
    });
  };

  refresh = () => {
    this.getQuery();
    this.getLastEditDate();
  };

  render() {
    const { navigation } = this.props;
    const { deaths, confirmed, recovered, isLoading, lastUpdated } = this.state;
    console.log('Loading', isLoading);
    return (
      <View style={{ flex: 1, backgroundColor: '#000' }}>
        <StatusBar hidden />
        <Heading
          title="Coronavirus"
          refreshIcon
          fontSize={32}
          refreshFunc={this.refresh}
        />
        <ScrollView>
          <SkeletonContent
            containerStyle={{ flex: 1 }}
            isLoading={isLoading}
            animationDirection="diagonalDownRight"
            duration={800}
            boneColor="#121212"
            highlightColor="#333333"
            animationType="pulse">
            <Total
              key={'Death'}
              title="Total Deaths"
              number={deaths}
              style={styles.totalsLoading}
            />
            <Total
              key={'confirmed'}
              title="Total Confirmed"
              number={confirmed}
              style={styles.totalsLoading}
            />
            <Total
              key={'Recovered'}
              title="Total Recovered"
              number={recovered}
              style={styles.totalsLoading}
            />
          </SkeletonContent>
          <NavigationButton
            title="MAP"
            onPress={() => navigation.navigate('Map')}
          />
          <NavigationButton
            title="COUNTRIES"
            onPress={() => navigation.navigate('CountryStats')}
          />
          <>
            <LastUpdated date={lastUpdated} />
          </>
        </ScrollView>
      </View>
    );
  }
}

export default Home;
