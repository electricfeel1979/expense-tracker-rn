import React from 'react';
import {View} from 'react-native';

import ExpensesList from './ExpensesList';
import ExpensesSummary from './ExpensesSummary';
import {Expense, ExpensesOutputProps} from './types';

const DUMMY_EXPENSES: Expense[] = [
  {
    id: 'e1',
    description: 'A pair of shoes',
    amount: 123,
    date: new Date(),
  },
  {
    id: 'e2',
    description: 'A pair of trousers',
    amount: 89.99,
    date: new Date('2022-01-05'),
  },
  {
    id: 'e3',
    description: 'A pair of shoes',
    amount: 123,
    date: new Date('2022-01-04'),
  },
  {
    id: 'e4',
    description: 'A pair of shoes',
    amount: 123,
    date: new Date('2022-01-3'),
  },
];

const ExpensesOutput: React.FC<ExpensesOutputProps> = ({
  //   expenses,
  expensesPeriod,
}) => {
  return (
    <View>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
};

export default ExpensesOutput;
