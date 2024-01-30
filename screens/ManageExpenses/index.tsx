import {useLayoutEffect} from 'react';
import {Text} from 'react-native';

import {ManageExpensesProps} from './types';

const ManageExpenses: React.FC<ManageExpensesProps> = ({route, navigation}) => {
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense',
    });
  }, [isEditing, navigation]);

  return <Text>ManageExpense Screen</Text>;
};

export default ManageExpenses;
