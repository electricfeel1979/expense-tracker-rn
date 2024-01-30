import {ExpensesOuput} from 'components';
import {useContext} from 'react';
import {ExpensesContext} from 'store';

import {AllExpensesProps} from './types';

const AllExpenses: React.FC<AllExpensesProps> = () => {
  const {
    expensesState: {expenses},
  } = useContext(ExpensesContext);

  // debugger;
  return <ExpensesOuput expenses={expenses} expensesPeriod="Total" />;
};

export default AllExpenses;
