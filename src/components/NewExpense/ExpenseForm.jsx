import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  //Multiple States
    // const [enteredTitle, setEnteredTitle] = useState("");
    // const [enteredAmount, setEnteredAmount] = useState("");
    // const [selectedDate, setSelectedDate] = useState("");

//   Multiple Function for change handler

    // const titleChangeHandler = (e) => {
    //     setEnteredTitle(e.target.value)
    //   // setUserInput({
    //   //     ...userInput,
    //   //     enteredTitle:e.target.value //Not best practice
    //   // });

    // //   setUserInput((prevState)=>{
    // //       return { ...prevState, enteredTitle:e.target.value }
    // //   })
    // };
    // const amountChangeHandler = (e) => {
    //     setEnteredAmount(e.target.value)
    //   // setUserInput({
    //   //     ...userInput,
    //   //     enteredAmount:e.target.value
    //   // });
    // //   setUserInput((prevState)=>{
    // //       return { ...prevState, enteredAmount:e.target.value }
    // //   })
    // };

    // const dateChangeHandler = (e) => {
    //     setSelectedDate(e.target.value)
    //   // setUserInput({
    //   //     ...userInput,
    //   //     selectedDate:e.target.value
    //   // });
    // //   setUserInput((prevState)=>{
    // //       return { ...prevState, selectedDate:e.target.value }
    // //   })
    // };

  //Single State
  const [userInput, setUserInput] = useState({
    title: "",
    amount: "",
    date: "",
  });

  //Single Function for change handler
  const inputChangeHandler = (identifier, value) => {
    if (identifier === "title") {
      setUserInput((prevState) => {
        return { ...prevState, title: value };
      });
    } else if (identifier === "date") {
      setUserInput((prevState) => {
        return { ...prevState, date: new Date(value) };
      });
    } else {
      setUserInput((prevState) => {
        return { ...prevState, amount: value };
      });
    }
  };
  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(userInput)
    setUserInput({
        title: "",
        amount: "",
        date: new Date(),
    })
    props.onAddExpense(userInput)
    // const data = {
    //     title:enteredTitle,
    //     amout:enteredAmount,
    //     date:new Date(selectedDate)
    // }
    // console.log(data)
    // setEnteredTitle('')
    // setEnteredAmount('')
    // setSelectedDate('')
    

  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="expenseTitle">Title</label>
          <input
            type="text"
            name="expenseTitle"
            id="expenseTitle"
            placeholder="Expense Name"
            // onChange={titleChangeHandler}
            // value={enteredTitle}
            value={userInput.title}
            onChange={(e) => {
              inputChangeHandler("title", e.target.value);
            }}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="expenseAmount">Amount</label>
          <input
            type="number"
            name="expenseAmount"
            id="expenseAmount"
            placeholder="Expense Amount"
            min="0.01"
            step="0.01"
            // onChange={amountChangeHandler}
            // value={enteredAmount}
            value={userInput.amount}
            onChange={(e) => {
              inputChangeHandler("amount", e.target.value);
            }}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="expenseDate">Date</label>
          <input
            type="date"
            name="expenseDate"
            id="expenseDate"
            min="2019-01-01"
            max="2023-09-30"
            // onChange={dateChangeHandler}
            // value={selectedDate}
            value={userInput.date}
            onChange={(e) => {
              inputChangeHandler("date", e.target.value);
            }}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
