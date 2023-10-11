import React from "react";

const ExpenseDesc = (props) => {
  return (
    <div className="expense-item_description">
      <h2>{props.expenseTitle}</h2>
      <div className="expense-item_price">{props.expenseAmount} Rs</div>
    </div>
  );
};

export default ExpenseDesc;
