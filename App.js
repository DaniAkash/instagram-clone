/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
  StackNavigator,
  TabNavigator,
  TabBarBottom,
} from 'react-navigation';
import Home from "./Screens/Home/Home";
import Profile from "./Screens/Profile/Profile";
import Search from "./Screens/Search/Search";
import Gallery from "./Screens/Gallery/Gallery";
import Notifications from "./Screens/Notifications/Notifications";
import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeStack = StackNavigator({
  Home: {
    screen: Home,
  },
});

const App = TabNavigator({
  Home: {
    screen: HomeStack,
  },
  Gallery: {
    screen: Gallery,
  },
  Notifications: {
    screen: Notifications,
  },
  Search: {
    screen: Search,
  },
  Profile: {
    screen: Profile,
  },
}, {
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName = 'ios-information-circle';
      switch(routeName) {
        case 'Home':
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
          break;
        case 'Gallery':
          iconName = `ios-images${focused ? '' : '-outline'}`;
          break;
        case 'Notifications':
          iconName = `ios-notifications${focused ? '' : '-outline'}`;
          break;
        case 'Search':
          iconName = `ios-search${focused ? '' : '-outline'}`;
          break;
        case 'Profile':
          iconName = `ios-person${focused ? '' : '-outline'}`;
          break;
      }

      return <Ionicons name={iconName} size={25} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
  },
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  animationEnabled: false,
  swipeEnabled: false,
});

export default App;
