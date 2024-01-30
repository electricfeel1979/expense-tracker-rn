import {
  ExpensesActionTypes,
  ExpenseData,
  AddExpenseAction,
  DeleteExpenseAction,
  UpdateExpenseAction,
} from './types';

const addExpense = (expenseData: ExpenseData) => {
  const addPayload: AddExpenseAction = {
    type: ExpensesActionTypes.ADD,
    payload: {expenseData},
  };

  return addPayload;
};

const deleteExpense = (id: string) => {
  const deletePayload: DeleteExpenseAction = {
    type: ExpensesActionTypes.DELETE,
    payload: {id},
  };
  return deletePayload;
};
const updateExpense = (id: string, expenseData: ExpenseData) => {
  const updatePayload: UpdateExpenseAction = {
    type: ExpensesActionTypes.UPDATE,
    payload: {id, expenseData},
  };
  return updatePayload;
};

export {addExpense, deleteExpense, updateExpense};
