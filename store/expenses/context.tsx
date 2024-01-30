import {createContext, useReducer} from 'react';

import {addExpense, deleteExpense, updateExpense} from './actions';
import {expensesReducer} from './reducer';
import {
  ExpensesState,
  ExpensesContextProps,
  ExpensesContextProviderProps,
} from './types';

const EXPENSES_INITIAL_STATE: ExpensesState = {
  expenses: [],
};

export const ExpensesContext = createContext<ExpensesContextProps>({
  expensesState: EXPENSES_INITIAL_STATE,
});

export const ExpensesContextProvider: React.FC<
  ExpensesContextProviderProps
> = ({children}) => {
  const [expensesState, dispatch] = useReducer(
    expensesReducer,
    EXPENSES_INITIAL_STATE,
  );

  const addExpenseValue: ExpensesContextProps['addExpense'] = expenseData =>
    dispatch(addExpense(expenseData));

  const deleteExpenseValue: ExpensesContextProps['deleteExpense'] = id =>
    dispatch(deleteExpense(id));

  const updateExpenseValue: ExpensesContextProps['updateExpense'] = (
    id,
    expenseData,
  ) => dispatch(updateExpense(id, expenseData));

  const value = {
    expensesState,
    addExpense: addExpenseValue,
    deleteExpense: deleteExpenseValue,
    updateExpense: updateExpenseValue,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
};

export default ExpensesContextProvider;
