import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

const ExpenseList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No Data Found.</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.items.map((x) => (
        <ExpenseItem
          title={x.title}
          amount={x.amount}
          date={x.date}
          key={x.id}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;
