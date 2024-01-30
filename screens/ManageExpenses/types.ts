import {RouteProp} from '@react-navigation/native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from 'navigation/types';

type ManageExpenseRouteProp = RouteProp<RootStackParamList, 'ManageExpense'>;
type ManageExpenseNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'ManageExpense'
>;

export type ManageExpensesProps = {
  route: ManageExpenseRouteProp;
  navigation: ManageExpenseNavigationProp;
};
