import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import styles, { LIGHT_BLUE } from '../styles';


export default () => (
  <View style={styles.container}>
    <ActivityIndicator size="large" color={LIGHT_BLUE} />
  </View>
);
