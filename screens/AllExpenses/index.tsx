import {ExpensesOuput} from 'components';

import {AllExpensesProps} from './types';

const AllExpenses: React.FC<AllExpensesProps> = () => {
  return <ExpensesOuput expensesPeriod="Total" />;
};

export default AllExpenses;
