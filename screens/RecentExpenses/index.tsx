import {ExpensesOuput} from 'components';

import {RecentExpensesProps} from './types';

// ScreenComponentType<ParamListBase, "AllExpenses"> | undefined

const RecentExpenses: React.FC<RecentExpensesProps> = props => {
  // const {expenses} = props;

  return <ExpensesOuput expensesPeriod="Last 7 days" />;
};

export default RecentExpenses;
