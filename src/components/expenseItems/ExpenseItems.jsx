import React from "react";
import './ExpenseItems.css'
import ExpenseDate from "../expenseDesc/ExpenseDate";
import ExpenseDesc from "../expenseDate/ExpenseDesc";
import Card from "../card/Card";



const ExpenseItems = (props) => {

    
  return (
    <Card className="expense-item">
      <ExpenseDate expenseDate={props.expenseDate }/>
      <ExpenseDesc expenseTitle={props.expenseTitle} expenseAmount={props.expenseAmount}/>
    </Card>
  );
};

export default ExpenseItems;
