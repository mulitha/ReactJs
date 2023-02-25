import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  //Way-1 (Multiple States)
  //   const [title, setTitle] = useState("");
  //   const [amount, setAmount] = useState("");
  //   const [date, setDate] = useState("");

  //Way-2
  const [userInput, setUserInput] = useState({
    title: "",
    amount: 0,
    date: "",
  });

  const onTitleChangeHandler = (event) => {
    //Way-1
    // setTitle(event.target.value);

    //Way-2
    // setUserInput({
    //   ...userInput,
    //   title: event.target.value,
    // });

    //Way-2.1
    setUserInput((prevState) => {
      return { ...prevState, title: event.target.value };
    });
  };

  const onAmountChangeHandler = (event) => {
    //Way-1
    // setAmount(event.target.value);

    //Way-2
    // setUserInput({
    //   ...userInput,
    //   amount: event.target.value,
    // });

    //Way-2.1
    setUserInput((prevState) => {
      return { ...prevState, amount: event.target.value };
    });
  };

  const onDateChangeHandler = (event) => {
    //Way-1
    //    setDate(event.target.value);

    //Way-2
    // setUserInput({
    //   ...userInput,
    //   date: event.target.value,
    // });

    //Way-2.1
    setUserInput((prevState) => {
      return { ...prevState, date: event.target.value };
    });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const newExpense = {
      title: userInput.title,
      amount: userInput.amount,
      date: new Date(userInput.date),
    };

    props.onSubmitExpense(newExpense);

    setUserInput({
      title: "",
      amount: "",
      date: "",
    });
  };

  return (
    <form className="new-expense__controls" onSubmit={onSubmitHandler}>
      <div className="new-expense__control">
        <label>Title</label>
        <input
          type="text"
          onChange={onTitleChangeHandler}
          value={userInput.title}
        />
      </div>
      <div className="new-expense__control">
        <label>Amount</label>
        <input
          type="number"
          min="0.01"
          step="0.01"
          onChange={onAmountChangeHandler}
          value={userInput.amount}
        />
      </div>
      <div className="new-expense__control">
        <label>Date</label>
        <input
          type="date"
          min="2019-01-01"
          onChange={onDateChangeHandler}
          value={userInput.date}
        />
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
