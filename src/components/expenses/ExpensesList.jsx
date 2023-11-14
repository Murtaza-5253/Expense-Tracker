import React from "react";
import ExpenseItems from "./ExpenseItems";

const ExpensesList = (props) => {
  const expensesContent = () => {
    if (props.expenses.length === 0) {
      return <h2 className="expenses-list__fallback" style={{color:'white'}}>Found no Expense</h2>;
    }
    return (
      <ul className="expenses-list">
        {props.expenses.map((e) => {
          return (
            <ExpenseItems
              key={e.id}
              expenseTitle={e.title}
              expenseAmount={e.amount}
              expenseDate={e.date}
            />
          );
        })}
      </ul>
    );
  };
  return <div className="expenses-list">{expensesContent()}</div>;
};

export default ExpensesList;
