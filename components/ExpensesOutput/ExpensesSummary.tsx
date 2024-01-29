import {Text, View} from 'react-native';

import {ExpensesSummaryProps} from './types';

const ExpensesSummary: React.FC<ExpensesSummaryProps> = props => {
  const {expenses, periodName} = props;

  const expensesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  return (
    <View>
      <Text>{periodName}</Text>
      <Text>{expensesSum}</Text>
    </View>
  );
};

export default ExpensesSummary;
