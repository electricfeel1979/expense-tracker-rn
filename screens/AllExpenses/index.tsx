import {ExpensesOuput} from 'components';

import {AllExpensesProps} from './types';

// import {RecentExpensesProps} from './types';

const AllExpenses: React.FC<AllExpensesProps> = props => {
  // const {expenses} = props;

  return <ExpensesOuput expensesPeriod="Total" />;
};

export default AllExpenses;
