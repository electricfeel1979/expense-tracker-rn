import React from 'react';
import {Pressable, Text, View} from 'react-native';

import {styles} from './styles';
import {ExpenseItemProps} from './types';

const ExpenseItem: React.FC<ExpenseItemProps> = props => {
  const {description, date, amount} = props;
  return (
    <Pressable>
      <View style={styles.expenseItem}>
        <View>
          <Text style={[styles.textBase, styles.description]}>
            {description}
          </Text>
          <Text style={[styles.textBase]}>{date.toDateString()}</Text>
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
