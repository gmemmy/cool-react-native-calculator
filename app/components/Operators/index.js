import React, { Component, Fragment } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

class Operators extends Component {
  constructor() {
    super()
    this.characters = ['C', '/', 'x', '+', '-', '=']
  }
  calculation = (operations) => {
    switch(operations) {
      case '+':
      case '-':
      case 'x':
      case '/':
    }
  }
  render() {
    return (
      <Fragment>
          <TouchableOpacity onPress={() => this.props.clearState()}>
            <Text style={styles.operators}>C</Text>
          </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.handlePress(this.characters[1])}>
            <Text style={styles.operators}>/</Text>
          </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.handlePress(this.characters[2])}>
            <Text style={styles.operators}>x</Text>
          </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.handlePress(this.characters[3])}>
          <Text style={styles.operators}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.handlePress(this.characters[4])}>
          <Text style={styles.operators}>-</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.props.handlePress(this.characters[5])}>
          <Text style={styles.operators}>=</Text>
        </TouchableOpacity>
      </Fragment>
    )
  }
}

export default Operators;