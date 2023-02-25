import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [expand, setExpand] = useState(false);

  const onSubmitExpenseHandler = (expense) => {
    const expenseObj = {
      title: expense.title,
      amount: expense.amount,
      date: expense.date,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseObj);
  };

  const toggleExpandState = () => {
    setExpand(!expand);
  };

  return (
    <div className="new-expense">
      {expand && (
        <ExpenseForm
          onSubmitExpense={onSubmitExpenseHandler}
          onCancel={toggleExpandState}
        />
      )}
      {!expand && <button onClick={toggleExpandState}>Add New Expense</button>}
    </div>
  );
};

export default NewExpense;
