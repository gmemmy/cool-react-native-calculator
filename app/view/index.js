import React, { Component } from 'react';
import { View } from 'react-native';
import styles from './styles';

class BackGroundDisplay extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.upperhalf}>

        </View>
        <View style={styles.lowerhalf}>
          <View style={styles.lowerhalf1}>

          </View>
          <View style={styles.lowerhalf2}>

          </View>
        </View>
      </View>
    );
  }
}

export default BackGroundDisplay;