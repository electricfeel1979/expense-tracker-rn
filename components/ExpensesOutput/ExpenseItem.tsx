import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {getFormattedDate} from 'utils/date';

import {styles} from './styles';
import {ExpenseItemProps} from './types';
import {ExpensesOverviewNavigationProp} from '../../navigation/types';

const ExpenseItem: React.FC<ExpenseItemProps> = props => {
  const navigation = useNavigation<ExpensesOverviewNavigationProp>();
  const {description, date, amount, id} = props;

  return (
    <Pressable
      onPress={() => navigation.navigate('ManageExpense', {expenseId: id})}
      style={({pressed}) => pressed && styles.pressed}>
      <View style={styles.expenseItem}>
        <View>
          <Text style={[styles.textBase, styles.description]}>
            {description}
          </Text>
          <Text style={[styles.textBase]}>{getFormattedDate(date)}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={[styles.textBase, styles.amount]}>
            {amount.toFixed(2)}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ExpenseItem;
