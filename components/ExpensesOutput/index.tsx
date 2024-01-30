import React from 'react';
import {Text, View} from 'react-native';

import ExpensesList from './ExpensesList';
import ExpensesSummary from './ExpensesSummary';
import {styles} from './styles';
import {ExpensesOutputProps} from './types';

const ExpensesOutput: React.FC<ExpensesOutputProps> = ({
  expenses = [],
  expensesPeriod,
  fallbackText,
}) => {
  let content = <Text style={styles.fallBackText}>{fallbackText}</Text>;

  if (expenses.length > 0) {
    content = <ExpensesList expenses={expenses} />;
  }

  return (
    <View style={styles.expensesOutputContainer}>
      <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
      {content}
    </View>
  );
};

export default ExpensesOutput;
