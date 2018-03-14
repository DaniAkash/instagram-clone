import React, {
  Component,
} from 'react';
import {
  View,
  Image,
  StyleSheet,
} from 'react-native';
import CardHeader from "./CardHeader";
import CardImage from "./CardImage";
import CardFooter from "./CardFooter";

class ImageCard extends Component {

  render() {

    console.log(this.props);

    return (
      <View style={styles.cardContainer} elevation={2}>

        <CardHeader
          name={this.props.name}
          profilePic={this.props.profilePic}
          location={this.props.location}
        />

        <CardImage image={this.props.image}
        />

        <CardFooter
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    height: 400,
    marginVertical: 10,
  },
});

export default ImageCard;
