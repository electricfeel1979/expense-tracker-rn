import {GlobalStyles} from 'constant/styles';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.primary800,
    padding: 24,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteContainer: {
    alignItems: 'center',
    marginTop: 15,
    paddingTop: 8,
    borderColor: GlobalStyles.colors.primary200,
    borderTopWidth: 1,
  },
});

export default styles;
