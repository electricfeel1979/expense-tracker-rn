export type Expense = {
  id: string;
  description: string;
  amount: number;
  date: Date;
};

export type ExpensesOutputProps = {
  expenses: Expense[];
  expensesPeriod: string;
};

export type ExpensesSummaryProps = {
  expenses: ExpensesOutputProps['expenses'];
  periodName: ExpensesOutputProps['expensesPeriod'];
};
