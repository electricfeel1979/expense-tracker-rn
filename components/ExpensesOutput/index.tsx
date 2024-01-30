import React from 'react';
import {View} from 'react-native';

import ExpensesList from './ExpensesList';
import ExpensesSummary from './ExpensesSummary';
import {styles} from './styles';
import {ExpensesOutputProps} from './types';

const ExpensesOutput: React.FC<ExpensesOutputProps> = ({
  expenses = [],
  expensesPeriod,
}) => {
  return (
    <View style={styles.expensesOutputContainer}>
      <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
      <ExpensesList expenses={expenses} />
    </View>
  );
};

export default ExpensesOutput;
