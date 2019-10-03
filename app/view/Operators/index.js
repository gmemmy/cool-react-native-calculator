import React, { Component, Fragment } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

class Operators extends Component {
  render() {
    const characters = ['C', '/', 'X', '+', '-', '=']
    return (
      <Fragment>
          <TouchableOpacity onPress={() => this.props.clearState(characters[0])}>
            <Text style={styles.operators}>C</Text>
          </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.handlePress(characters[1])}>
            <Text style={styles.operators}>/</Text>
          </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.handlePress(characters[2])}>
            <Text style={styles.operators}>X</Text>
          </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.handlePress(characters[3])}>
          <Text style={styles.operators}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.handlePress(characters[4])}>
          <Text style={styles.operators}>-</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.props.handlePress(characters[5])}>
          <Text style={styles.operators}>=</Text>
        </TouchableOpacity>
      </Fragment>
    )
  }
}

export default Operators;