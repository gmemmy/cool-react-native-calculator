import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

// Components
import Numbers from '../../components/Numbers/index';
import Operators from '../../components/Operators/index';

class BackGroundDisplay extends Component {
  constructor(props) {
    super(props)
    this.state = {
      displayText: '',
      resultText: ''
    },
    this.characters = ['C', '/', 'x', '+', '-', '=']
  }
  handlePress = (text) => {
    const lastCharacter = this.state.displayText.split('').pop()
    if(this.characters.indexOf(lastCharacter) > 0) return ''
    if (this.state.text === '')
    return this.setState({
      displayText: this.state.displayText + operations
    })
    if(text === '=') {
      return this.calculateResult();
    }
    this.setState({
      displayText: this.state.displayText+text
    })
  }
  clearState = () => {
      let text = this.state.displayText.split('')
      text.pop()
    this.setState({
      displayText: text.join('')
    })
  }
  calculateResult = () => {
    this.setState({
      resultText: this.state.displayText
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
            <Text>
            {this.state.resultText}
            </Text>
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