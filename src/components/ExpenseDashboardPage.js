import React from 'react';
import ExpenseList from './ExpensesList';
import ExpenseListFilters from './ExpneseListFilters';

const ExpenseDashboardPage = (props) => (
  <div>
      <ExpenseListFilters/>
    <ExpenseList />
  </div>
);

export default ExpenseDashboardPage;
