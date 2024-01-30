import {ExpensesOuput} from 'components';
import {useContext} from 'react';
import {ExpensesContext} from 'store';
import {getDateMinusDays} from 'utils/date';

import {RecentExpensesProps} from './types';

const RecentExpenses: React.FC<RecentExpensesProps> = props => {
  const {
    expensesState: {expenses},
  } = useContext(ExpensesContext);

  const recentExpenses = expenses.filter(expense => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return expense.date >= date7DaysAgo && expense.date <= today;
  });

  return (
    <ExpensesOuput expenses={recentExpenses} expensesPeriod="Last 7 days" />
  );
};

export default RecentExpenses;
