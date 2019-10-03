import React, { Component, Fragment } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

class Numbers extends Component {
  render(){
    return (
      <Fragment>
        <View style={[styles.numberRows]}>
          <TouchableOpacity>
            <Text style={styles.rows}>
              7
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.rows}>
              4
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.rows}>
              1
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.rows}>
              0
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.numberRows}>
          <TouchableOpacity>
            <Text style={styles.rows}>
              8
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.rows}>
              5
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.rows}>
              2
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.numberRows}>
          <TouchableOpacity>
            <Text style={styles.rows}>
              9
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.rows}>
              6
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.rows}>
              3
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.rows}>
              .
            </Text>
          </TouchableOpacity>
        </View>
      </Fragment>
    );
  }
}

export default Numbers;