import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  upperhalf: {
    flex: 1,
    backgroundColor: '#DCDCDC',
    justifyContent: 'center'
  },
  lowerhalf: {
    flex: 1.7,
    flexDirection: 'row',
  },
  alignElements: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  lowerhalf1: {
    flex: 3.5,
    backgroundColor: '#ffff',
  },
  lowerhalf2: {
    flex: 1,
    backgroundColor: '#006400',
  },
  displayInput: {
    color: 'black',
    position: 'absolute',
    fontSize: 50,
    marginLeft: 200
  }
});

export default styles;
