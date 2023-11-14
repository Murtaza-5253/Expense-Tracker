import React,{useState} from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'

export const NewExpense = (props) => {

    const [isEditing, setIsEditing] = useState(false);
    const addExpense = (expenseData) => {
        const exData = {
            ...expenseData,
            id:Math.random().toString()
        }
        props.onAddExpense(exData)
        setIsEditing(false)
        // console.log(exData)
    }
    const startEditingHandler = () =>{
      setIsEditing(true);
    }

    const stopEditingHandler = () =>{
      setIsEditing(false);
    }

  return (
    <div className="new-expense">
      {
        !isEditing && <button onClick={startEditingHandler}>Add new Expense</button> 
      }
      {
        isEditing && <ExpenseForm onAddExpense={addExpense} onCancel={stopEditingHandler}/>
      }
      
    </div>
  );
};
