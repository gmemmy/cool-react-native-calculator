import React, { Component, Fragment } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

class Operators extends Component {
  render() {
    return (
      <Fragment>
          <TouchableOpacity>
            <Text style={styles.operators}>C</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.operators}>/</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.operators}>x</Text>
          </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.operators}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.operators}>-</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.operators}>=</Text>
        </TouchableOpacity>
      </Fragment>
    )
  }
}

export default Operators;