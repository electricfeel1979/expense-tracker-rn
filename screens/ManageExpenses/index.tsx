import {IconButton} from 'components/UI';
import Button from 'components/UI/Button';
import {GlobalStyles} from 'constant/styles';
import {useContext, useLayoutEffect} from 'react';
import {View} from 'react-native';

import styles from './styles';
import {ManageExpensesProps} from './types';
import {ExpensesContext} from 'store';

const ManageExpenses: React.FC<ManageExpensesProps> = ({route, navigation}) => {
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  const {addExpense, deleteExpense, updateExpense} =
    useContext(ExpensesContext);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense',
    });
  }, [isEditing, navigation]);

  const deleteExpenseHandler = () => {
    if (deleteExpense && editedExpenseId) {
      deleteExpense(editedExpenseId);
    }
    navigation.goBack();
  };
  const cancelHandler = () => {
    navigation.goBack();
  };
  const confirmHandler = () => {
    if (isEditing && updateExpense) {
      updateExpense(editedExpenseId, {
        description: 'TEST!!!',
        amount: 99,
        date: new Date(),
      });
    } else if (addExpense) {
      addExpense({
        description: 'ADEDDED!!!',
        amount: 99,
        date: new Date(),
      });
    }
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Button mode="flat" onPress={cancelHandler}>
          Cancel
        </Button>
        <Button onPress={confirmHandler}>{isEditing ? 'Update' : 'Add'}</Button>
      </View>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
};

export default ManageExpenses;
