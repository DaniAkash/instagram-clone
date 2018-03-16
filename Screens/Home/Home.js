import React, {
  Component,
} from 'react';
import {
  View,
  Text,
} from 'react-native';
import Logo from "./HeaderComponents/Logo";
import LeftButton from "./HeaderComponents/LeftButton";
import RightButton from "./HeaderComponents/RightButton";

class Home extends Component {

  static navigationOptions = {
    headerTitle: <Logo title={'My App'}/>,
    headerLeft: <LeftButton/>,
    headerRight: <RightButton/>,
  };

  render() {
    return (
      <View>
        <Text>{'Home'}</Text>
      </View>
    );
  }
}

export default Home;
