import React, {
  Component,
} from 'react';
import {
  Text,
  StyleSheet,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const RightButton = ({icon, action}) => {
  return (
    <Ionicons style={{paddingRight: 15}} name={'ios-share-alt'} size={25} color={'tomato'} />
  )
};

const styles = StyleSheet.create({

});

export default RightButton;

