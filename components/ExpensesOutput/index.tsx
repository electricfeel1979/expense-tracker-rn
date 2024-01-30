import React from 'react';
import {View} from 'react-native';

import ExpensesList from './ExpensesList';
import ExpensesSummary from './ExpensesSummary';
import {DUMMY_EXPENSES} from './mock';
import {styles} from './styles';
import {ExpensesOutputProps} from './types';

const ExpensesOutput: React.FC<ExpensesOutputProps> = ({
  //   expenses,
  expensesPeriod,
}) => {
  return (
    <View style={styles.expensesOutputContainer}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
};

export default ExpensesOutput;
