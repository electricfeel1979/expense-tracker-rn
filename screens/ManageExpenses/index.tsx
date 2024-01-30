import {IconButton} from 'components/UI';
import Button from 'components/UI/Button';
import {GlobalStyles} from 'constant/styles';
import {useLayoutEffect} from 'react';
import {View} from 'react-native';

import styles from './styles';
import {ManageExpensesProps} from './types';

const ManageExpenses: React.FC<ManageExpensesProps> = ({route, navigation}) => {
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense',
    });
  }, [isEditing, navigation]);

  const deleteExpenseHandler = () => {
    alert(1);
  };
  const cancelHandler = () => {
    alert(1);
  };
  const confirmHandler = () => {
    alert(1);
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
