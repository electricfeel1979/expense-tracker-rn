import {ExpensesOutput} from 'components';
import {useContext} from 'react';
import {ExpensesContext} from 'store';

import {AllExpensesProps} from './types';

const AllExpenses: React.FC<AllExpensesProps> = () => {
  const {
    expensesState: {expenses},
  } = useContext(ExpensesContext);

  return (
    <ExpensesOutput
      expenses={expenses}
      expensesPeriod="Total"
      fallbackText="No registered expenses found!"
    />
  );
};

export default AllExpenses;
