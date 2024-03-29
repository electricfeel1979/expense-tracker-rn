import {Text, View} from 'react-native';

import {styles} from './styles';
import {ExpensesSummaryProps} from './types';

const ExpensesSummary: React.FC<ExpensesSummaryProps> = props => {
  const {expenses, periodName} = props;

  const expensesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  return (
    <View style={styles.expensesSummaryContainer}>
      <Text style={styles.period}>{periodName}</Text>
      <Text style={styles.sum}>{expensesSum}</Text>
    </View>
  );
};

export default ExpensesSummary;
