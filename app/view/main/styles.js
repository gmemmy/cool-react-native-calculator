import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  upperhalf: {
    flex: 1,
    justifyContent: 'center',
  },
  lowerhalf: {
    flex: 2,
    flexDirection: 'row',
  },
  alignElements: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  lowerhalf1: {
    flex: 3.5,
    flexDirection: 'row',
    backgroundColor: '#ffff',
  },
  lowerhalf2: {
    flex: 1,
    backgroundColor: '#DCDCDC',
    alignItems: 'center'
  },
  displayInput: {
    flex: 2,
    backgroundColor: '#ffff',
    justifyContent: 'center',
    marginLeft: 250
  },
  resultDisplay: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  displayText: {
    fontSize: 40
  }
});

export default styles;
