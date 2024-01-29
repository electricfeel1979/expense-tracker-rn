import {FlatList, FlatListProps, Text} from 'react-native';

import {Expense, ExpensesListProps} from './types';

const renderExpenseItem: FlatListProps<Expense>['renderItem'] = itemData => {
  return <Text>{itemData.item.description}</Text>;
};

const ExpensesList: React.FC<ExpensesListProps> = props => {
  const {expenses} = props;
  return <FlatList<Expense> data={expenses} renderItem={renderExpenseItem} />;
};

export default ExpensesList;
