import React from 'react';
import { connect } from "react-redux";
import ExpenseListItem from "./ExpneseListItem";
import SelectedExpenses from '../selectors/expenses';

const ExpenseList = (props) => (
  <div>
    <h1>Expense list</h1>
      {props.expenses.map( (expense) => {
        return <ExpenseListItem key={expense.id} {...expense} />
      })}
  </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: SelectedExpenses(state.expenses, state.filters)
    };
};
export default connect(mapStateToProps)(ExpenseList);

