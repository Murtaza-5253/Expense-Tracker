import React from 'react'
import './Expenses.css'
import ExpenseItems from '../expenses/ExpenseItems'
import Card from '../UI/Card'


const Expenses = (props) => {
  return (
    <Card className='expenses'>
        <ExpenseItems
        expenseTitle={props.expenses[0].title}
        expenseAmount={props.expenses[0].amount}
        expenseDate={props.expenses[0].date}
      />
      <ExpenseItems
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
      />
    </Card>
  )
}

export default Expenses