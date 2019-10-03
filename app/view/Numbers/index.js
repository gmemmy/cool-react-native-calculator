import React, { Component, Fragment } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

class Numbers extends Component {
  render(){
    return (
      <Fragment>
        <View style={styles.numberRows}>
          <Text style={styles.rows}>1</Text>
          <Text style={styles.rows}>1</Text>
          <Text style={styles.rows}>1</Text>
        </View>
        <View style={styles.numberRows}>
          <Text style={styles.rows}>1</Text>
          <Text style={styles.rows}>1</Text>
          <Text style={styles.rows}>1</Text>
        </View>
        <View style={styles.numberRows}>
          <Text style={styles.rows}>1</Text>
          <Text style={styles.rows}>1</Text>
          <Text style={styles.rows}>1</Text>
        </View>
      </Fragment>
    );
  }
}

export default Numbers;