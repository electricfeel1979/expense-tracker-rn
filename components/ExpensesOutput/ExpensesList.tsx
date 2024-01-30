import {FlatList, FlatListProps} from 'react-native';
import {Expense} from 'store/expenses/types';

import ExpenseItem from './ExpenseItem';
import {ExpensesListProps} from './types';

const renderExpenseItem: FlatListProps<Expense>['renderItem'] = itemData => {
  return <ExpenseItem {...itemData.item} />;
};

const ExpensesList: React.FC<ExpensesListProps> = props => {
  const {expenses} = props;
  return <FlatList<Expense> data={expenses} renderItem={renderExpenseItem} />;
};

export default ExpensesList;
