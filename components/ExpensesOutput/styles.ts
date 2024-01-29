import {GlobalStyles} from 'constant/styles';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  expensesSummaryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: GlobalStyles.colors.primary50,
    padding: 8,
    justifyContent: 'space-between',
  },
  period: {
    fontSize: 12,
    color: GlobalStyles.colors.primary400,
  },
  sum: {
    fontSize: 16,
    color: GlobalStyles.colors.primary500,
  },
  expensesOutputContainer: {
    backgroundColor: GlobalStyles.colors.primary700,
    flex: 1,
    padding: 24,
  },
});
