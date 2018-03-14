import React, {
  Component,
} from 'react';
import {
  View,
  Image,
  StyleSheet,
} from 'react-native';

const CardFooter = () => (
  <View style={styles.cardFooter}/>
);

const styles = StyleSheet.create({
  cardFooter: {
    flex: 1,
    backgroundColor: 'blue',
  }
});

export default CardFooter;
