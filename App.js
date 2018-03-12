/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';
import Home from "./Screens/Home/Home";
import Profile from "./Screens/Profile/Profile";
import Search from "./Screens/Search/Search";
import Gallery from "./Screens/Gallery/Gallery";
import Notifications from "./Screens/Notifications/Notifications";

const App = StackNavigator({
  Home: {
    screen: Home,
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
});

export default App;
