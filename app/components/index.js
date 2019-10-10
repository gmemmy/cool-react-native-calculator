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
    // const textArray = this.state.displayText.split('')   
    // if(text === textArray.length - 1) return '' 
    if (this.state.text === '')
    return this.setState({
      displayResult: this.state.displayText + operations
    })  
    if(text === '=') {
      return this.validate() && this.calculateResult();
    }
    this.setState({
      displayText: this.state.displayText+text
    })
  }
  clearState = () => {
    let text = this.state.displayText.split('')
     if(text.length - 1 <= 0) {
      this.setState({
        displayText: '',
        displayResult: ''
      })
    } else {
        text.pop()
        this.setState({
          displayText: text.join(''),
      })
    }
  }
  calculateResult = () => {
    this.setState({
      displayResult: eval(this.state.displayText)
    })
  }
  validate = () => {
    const text = this.state.displayText;
    switch(text.slice(-1)) {
      case '+':
      case '-':
      case 'x':
      case '/':
        return false;
    }
    return true;
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