import React, { useState } from "react";
import "./ExpenseItems.css";
import ExpenseDate from "../expenses/ExpenseDate";
import ExpenseDesc from "../expenses/ExpenseDesc";
import Card from "../UI/Card";

const ExpenseItems = (props) => {
  const [titles, setTitles] = useState(props.expenseTitle);

  const clickHandler = () => {
    setTitles("updated");
    console.log(titles);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate expenseDate={props.expenseDate} />
      <ExpenseDesc expenseTitle={props.expenseTitle} expenseAmount={props.expenseAmount} />
      <button onClick={clickHandler}>Change title</button>
    </Card>
  );
};

export default ExpenseItems;
