import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

class BackGroundDisplay extends Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.upperhalf}>
          <Text style={styles.displayInput}>555 x 8</Text>
        </View>
        <View style={styles.lowerhalf}>
          <View style={[styles.lowerhalf1, styles.alignElements]}>
            <Text>Hello there</Text>
          </View>
          <View style={[styles.lowerhalf2, styles.alignElements]}>

          </View>
        </View>
      </View>
    );
  }
}

export default BackGroundDisplay;