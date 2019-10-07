import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

// Components
import Numbers from '../../components/Numbers/index';
import Operators from '../../components/Operators/index';

class BackGroundDisplay extends Component {
  constructor(props) {
    super(props)
    this.state = {
      displayText: ''
    }
  }
  handlePress = (text) => {
    this.setState({
      displayText: this.state.displayText+text
    })
  }
  clearState = (resultText) => {
    if(resultText) {
      let text = this.state.displayText.split('')
      .pop()
    }
    this.setState({
      displayText: text.join('')
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.upperhalf}>
          <View style={[styles.displayInput]}>
            <Text style={styles.displayText}>
              {this.state.displayText}
            </Text>
          </View>
          <View style={[styles.resultDisplay, styles.alignElements]}>
            
          </View>
        </View>
        <View style={styles.lowerhalf}>
          <View style={styles.lowerhalf1}>
            <Numbers handlePress={this.handlePress} />
          </View>
          <View style={styles.lowerhalf2}>
              <Operators handlePress={this.handlePress} clearState={this.clearState} />
          </View>
        </View>
      </View>
    );
  }
}

export default BackGroundDisplay;