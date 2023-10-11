import { useState } from "react";
import "./App.css";
import { NewExpense } from "./components/NewExpense/NewExpense";
import Expenses from "./components/expenses/Expenses";


const DUMMY = [
  {
    id: "e1",
    title: "Restaurant",
    amount: 2000,
    date: new Date(2023, 2, 23),
  },
  {
    id: "e2",
    title: "Taxi",
    amount: 200,
    date: new Date(2023, 2, 28),
  },
  {
    id: "e3",
    title: "Movie",
    amount: 150,
    date: new Date(2023, 4, 2),
  },
  {
    id: "e4",
    title: "Travel",
    amount: 15000,
    date: new Date(2023, 1, 23),
  },
  {
    id: "e5",
    title: "Other",
    amount: 5000,
    date: new Date(2022, 9, 5),
  },
];
function App() {
  const [expenses, setExpenses] = useState(DUMMY);

  const addExpense = (expense) => {
      setExpenses((prev)=>{
        return [expense,...prev];
      })
  };

  return (
    <div>
      <h2>
        <center>Lets Get Started</center>
      </h2>
      <NewExpense onAddExpense={addExpense} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
