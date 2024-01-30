import {ExpensesActionTypes, ExpensesActions, ExpensesState} from './types';

export const expensesReducer = (
  state: ExpensesState,
  action: ExpensesActions,
) => {
  switch (action.type) {
    case ExpensesActionTypes.ADD: {
      const id = new Date().toString() + Math.random.toString();
      const newExpense = {
        id,
        ...action.payload.expenseData,
      };
      return {...state, expenses: [newExpense, ...state.expenses]};
    }
    case ExpensesActionTypes.UPDATE: {
      const {id, expenseData} = action.payload;

      const newExpenses = [...state.expenses];
      const index = newExpenses.findIndex(expense => expense.id === id);

      const toUpdateExpense = newExpenses[index];
      const updatedExpense = {...toUpdateExpense, ...expenseData};
      newExpenses[index] = updatedExpense;

      return {...state, expenses: newExpenses};
    }
    case ExpensesActionTypes.DELETE: {
      const {id} = action.payload;
      const newExpenses = state.expenses.filter(expense => expense.id !== id);
      return {...state, expenses: newExpenses};
    }
    default:
      return state;
  }
};
