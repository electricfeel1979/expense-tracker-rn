export type Expense = {
  id: string;
  description: string;
  amount: number;
  date: Date;
};

export type ExpensesOutputProps = {
  // expenses: Expense[];
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
