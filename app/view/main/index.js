import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

// Components
import Numbers from '../../components/Numbers/index';
import Operators from '../../components/Operators/index';

class BackGroundDisplay extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.upperhalf}>
          <View style={[styles.displayInput]}>
            <Text style={styles.displayText}>
              {this.props.displayText}
            </Text>
          </View>
          <View style={[styles.resultDisplay, styles.alignElements]}>
            <Text>
              {this.props.resultDisplay}
            </Text>
          </View>
        </View>
        <View style={styles.lowerhalf}>
          <View style={styles.lowerhalf1}>
            <Numbers handlePress={this.props.handlePress} />
          </View>
          <View style={styles.lowerhalf2}>
            <Operators handlePress={this.props.handlePress} 
              clearState={this.props.clearState}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default BackGroundDisplay;