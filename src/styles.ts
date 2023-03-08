import {StyleSheet} from 'react-native';

export const LIGHT_BLUE = '#89CFEF';

export const screenOptions = {
  headerStyle: {
    backgroundColor: LIGHT_BLUE,
  },
  headerTintColor: '#fff',
};

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 20,
    paddingRight: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  header: {
    fontWeight: 'bold',
  },
  subheader: {
    paddingTop: 10,
  },
});
