import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

// Components
import Numbers from '../Numbers/index';
import Operators from '../Operators/index';

class BackGroundDisplay extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.upperhalf}>
          <View style={[styles.displayInput, styles.alignElements]}>

          </View>
          <View style={[styles.resultDisplay, styles.alignElements]}>
            
          </View>
        </View>
        <View style={styles.lowerhalf}>
          <View style={styles.lowerhalf1}>
            <Numbers />
          </View>
          <View style={styles.lowerhalf2}>
              <Operators />
          </View>
        </View>
      </View>
    );
  }
}

export default BackGroundDisplay;