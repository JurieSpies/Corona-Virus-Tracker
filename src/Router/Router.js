//Packages
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
//pages
import Home from '../pages/Home/Home.page';
import Map from '../pages/Map/Map.page';
import CountryStats from '../pages/CountryStats/CountryStats.page';

const NavStack = createStackNavigator(
  {
    Home,
    Map,
    CountryStats,
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
    defaultNavigationOptions: {
      gesturesEnabled: false,
    },
  },
);

const Navigator = createAppContainer(NavStack);

export default Navigator;
