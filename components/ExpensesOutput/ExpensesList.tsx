import {FlatList, FlatListProps} from 'react-native';

import ExpenseItem from './ExpenseItem';
import {Expense, ExpensesListProps} from './types';

const renderExpenseItem: FlatListProps<Expense>['renderItem'] = itemData => {
  return <ExpenseItem {...itemData.item} />;
};

const ExpensesList: React.FC<ExpensesListProps> = props => {
  const {expenses} = props;
  return <FlatList<Expense> data={expenses} renderItem={renderExpenseItem} />;
};

export default ExpensesList;
