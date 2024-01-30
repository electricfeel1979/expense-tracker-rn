import {Expense} from '../../store/expenses/types';

export type ExpensesOutputProps = {
  expenses: Expense[];
  expensesPeriod: string;
};

export type ExpensesSummaryProps = {
  expenses: Expense[];
  periodName: ExpensesOutputProps['expensesPeriod'];
};

export type ExpensesListProps = {
  expenses: Expense[];
};

export type ExpenseItemProps = Expense;
