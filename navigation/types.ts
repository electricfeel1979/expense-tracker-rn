import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type RootStackParamList = {
  ManageExpense?: {
    expenseId: string;
  };
  ExpensesOverview: undefined;
};

export type ExpensesOverviewNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;
