import React from "react";
import "./ExpenseItems.css";
import ExpenseDate from "../expenses/ExpenseDate";
import ExpenseDesc from "../expenses/ExpenseDesc";
import Card from "../UI/Card";

const ExpenseItems = (props) => {

  return (
    <Card className="expense-item">
      <ExpenseDate expenseDate={props.expenseDate} />
      <ExpenseDesc expenseTitle={props.expenseTitle} expenseAmount={props.expenseAmount} />
    </Card>
  );
};

export default ExpenseItems;
