export type Expense = {
  id?: string;
  description: string;
  amount: number;
  date: Date;
};

export type AddExpenseAction = {
  type: ExpensesActionTypes.ADD;
  payload: {expenseData: ExpenseData};
};

export type DeleteExpenseAction = {
  type: ExpensesActionTypes.DELETE;
  payload: {id: string};
};

export type UpdateExpenseAction = {
  type: ExpensesActionTypes.UPDATE;
  payload: {id: string; expenseData: ExpenseData};
};

export type ExpensesActions =
  | AddExpenseAction
  | DeleteExpenseAction
  | UpdateExpenseAction;

export enum ExpensesActionTypes {
  ADD = 'ADD',
  UPDATE = 'UPDATE',
  DELETE = 'DELETE',
}

export type ExpensesState = {
  expenses: Expense[];
};

export type ExpenseData = Expense;

export type ExpensesContextProps = {
  expensesState: ExpensesState;
  addExpense?: (expenseData: ExpenseData) => void;
  deleteExpense?: (id: string) => void;
  updateExpense?: (id: string, expenseData: ExpenseData) => void;
};

export type ExpensesContextProviderProps = {
  children: React.ReactNode;
};
