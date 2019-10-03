import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  upperhalf: {
    flex: 1,
    backgroundColor: '#DCDCDC',
    justifyContent: 'center',
  },
  lowerhalf: {
    flex: 1.3,
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
    backgroundColor: '#ffff',
    marginBottom: 60,
  },
  displayInput: {
    flex: 2,
    backgroundColor: 'red',
  },
  resultDisplay: {
    flex: 1,
    backgroundColor: 'green'
  }
});

export default styles;
