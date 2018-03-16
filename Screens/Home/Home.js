import React, {
  Component,
} from 'react';
import {
  View,
  ScrollView,
  Text,
} from 'react-native';
import Logo from "./HeaderComponents/Logo";
import LeftButton from "./HeaderComponents/LeftButton";
import RightButton from "./HeaderComponents/RightButton";
import newsFeed from '../Data/newsFeed';
import ImageCard from '../../Components/ImageCard/ImageCard';

class Home extends Component {

  static navigationOptions = {
    headerTitle: <Logo title={'My App'}/>,
    headerLeft: <LeftButton/>,
    headerRight: <RightButton/>,
  };

  navigateToComments = () => {
    this.props.navigation.navigate('Comments');
  };

  render() {
    return (
      <ScrollView style={{backgroundColor: 'white'}}>
        {
          newsFeed.map((item, index) => {
            return (
              <ImageCard
                key={index}
                {...item}
                navigateToComments={this.navigateToComments}
              />
            )
          })
        }
      </ScrollView>
    );
  }
}

export default Home;
