import React from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'

export const NewExpense = (props) => {

    const addExpense = (expenseData) => {
        const exData = {
            ...expenseData,
            id:Math.random().toString()
        }
        props.onAddExpense(exData)
        // console.log(exData)
    }

  return (
    <div className="new-expense">
      <ExpenseForm onAddExpense={addExpense} />
    </div>
  );
};
