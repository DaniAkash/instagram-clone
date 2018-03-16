import React, {
  Component,
} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CardFooter = ({likes, name, caption, commentsCount, navigateToComments}) => (
  <View style={styles.cardFooter}>

    <View style={styles.buttonRow}>
      <View style={styles.leftButtons}>
        <Ionicons style={styles.button} name={'ios-heart-outline'} size={30} color={'tomato'} />
        <Ionicons style={styles.button} name={'ios-chatbubbles-outline'} size={30} color={'tomato'} />
        <Ionicons style={styles.button} name={'ios-send-outline'} size={30} color={'tomato'} />
      </View>
      <View style={styles.rightButtons}>
        <Ionicons name={'ios-bookmark-outline'} size={30} color={'tomato'} />
      </View>
    </View>

    <View style={styles.textBox}>
      <View style={styles.textRow}>
        <Text style={{fontWeight: 'bold', fontSize: 14}}>{likes}</Text>
        <Text style={{fontSize: 12}}>{" Likes"}</Text>
      </View>
      <View style={styles.textRow}>
        <Text style={{fontWeight: 'bold', fontSize: 14}}>{name}</Text>
        <Text style={{fontSize: 12}}>{caption}</Text>
      </View>
      <TouchableHighlight
        onPress={navigateToComments}
        underlayColor={'transparent'}
      >
        <Text style={{fontSize: 12, color: 'grey'}}>{`View all ${commentsCount} Comments`}</Text>
      </TouchableHighlight>
    </View>

  </View>
);

const styles = StyleSheet.create({
  cardFooter: {
    flex: 2,
  },

  buttonRow: {
    flex: 1,
    flexDirection: 'row',
  },
  leftButtons: {
    flex: 9,
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightButtons: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  textBox: {
    flex: 2,
    justifyContent: 'space-around',
    paddingLeft: 5,
  },
  textRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },

  button: {
    marginHorizontal: 5,
  },
});

export default CardFooter;
