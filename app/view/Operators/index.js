import React, { Component, Fragment } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

class Operators extends Component {
  render() {
    return (
      <Fragment>
        <View style={styles.operations}></View>
        <TouchableOpacity>
          <View style={[styles.lowerhalf2b, styles.alignElements]}>
            <Text style={styles.equalToSign}>
              =
                </Text>
          </View>
        </TouchableOpacity>
      </Fragment>
    )
  }
}

export default Operators;