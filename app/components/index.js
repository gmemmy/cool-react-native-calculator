import React, { Component } from 'react';

// Components
import Numbers from './Numbers/index';
import Operators from './Operators/index';
import BackGroundDisplay from '../view/main/index'

class Logic extends Component {
  constructor(props) {
    super(props)
    this.state = {
      displayText: '',
      displayResult: ''
    },
    this.characters = ['C', '/', 'x', '+', '-', '=']
  }
  handlePress = (text) => {
    const lastCharacter = this.state.displayText.split('').pop()
    if(this.characters.indexOf(lastCharacter) > 0) return ''
    if (this.state.text === '')
    return this.setState({
      displayResult: this.state.displayText + operations
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
      displayResult: this.state.displayText
    })
  }
  render() {
    return (
			<BackGroundDisplay displayText={this.state.displayText}
				resultDisplay={this.state.displayResult}
        handlePress={this.handlePress}
        clearState={this.clearState}
			/>
    );
  }
}

export default Logic;