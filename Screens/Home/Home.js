import React, {
  Component,
} from 'react';
import {
  ScrollView,
  Text,
} from 'react-native';
import Logo from "./HeaderComponents/Logo";
import LeftButton from "./HeaderComponents/LeftButton";
import RightButton from "./HeaderComponents/RightButton";
import ImageCard from "../../Components/ImageCard/ImageCard";
import newsFeed from "../../Data/newsFeed";

class Home extends Component {

  static navigationOptions = {
    headerTitle: <Logo title={'Home'}/>,
    headerLeft: <LeftButton/>,
    headerRight: <RightButton/>,
  };

  render() {
    return (
      <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
        {
          newsFeed.map((item, index) => {
            return (
              <ImageCard
                key={index}
                {...item}
              />
            )
          })
        }
      </ScrollView>
    );
  }
}

export default Home;
