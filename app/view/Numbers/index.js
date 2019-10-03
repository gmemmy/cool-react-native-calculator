import React, { Component, Fragment } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

class Numbers extends Component {
  render(){
    const characters = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.']
    return (
      <Fragment>
        <View style={[styles.numberRows]}>
          <TouchableOpacity onPress={() => this.props.handlePress(characters[6])}>
            <Text style={styles.rows}>
              7
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.handlePress(characters[3])}>
            <Text style={styles.rows}>
              4
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.handlePress(characters[0])}>
            <Text style={styles.rows}>
              1
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.handlePress(characters[9])}>
            <Text style={styles.rows}>
              0
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.numberRows}>
          <TouchableOpacity onPress={() => this.props.handlePress(characters[7])}>
            <Text style={styles.rows}>
              8
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.handlePress(characters[4])}>
            <Text style={styles.rows}>
              5
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.handlePress(characters[1])}>
            <Text style={styles.rows}>
              2
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.numberRows}>
          <TouchableOpacity onPress={() => this.props.handlePress(characters[8])}>
            <Text style={styles.rows}>
              9
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.handlePress(characters[5])}>
            <Text style={styles.rows}>
              6
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.handlePress(characters[2])}>
            <Text style={styles.rows}>
              3
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.handlePress(characters[10])}>
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