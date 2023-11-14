import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2023");

  const filterChangeHandler = (selectedyear) => {
    setFilteredYear(selectedyear);
  };

  const filteredExpense = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpense}/>
        <ExpensesList expenses={filteredExpense}/>
      </Card>
    </div>
  );
};

export default Expenses;

/* <ExpenseItems
        expenseTitle={props.expenses[1].title}
        expenseAmount={props.expenses[1].amount}
        expenseDate={props.expenses[1].date}
      />
      <ExpenseItems
        expenseTitle={props.expenses[2].title}
        expenseAmount={props.expenses[2].amount}
        expenseDate={props.expenses[2].date}
      />
      <ExpenseItems
        expenseTitle={props.expenses[3].title}
        expenseAmount={props.expenses[3].amount}
        expenseDate={props.expenses[3].date}
      />
      <ExpenseItems
        expenseTitle={props.expenses[4].title}
        expenseAmount={props.expenses[4].amount}
        expenseDate={props.expenses[4].date}
      /> */
