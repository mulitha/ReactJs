import { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import Chart from "../Chart/Chart";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  const onChangeYearHandler = (year) => {
    setSelectedYear(year);
  };

  const filteredExpenses = props.expenses.filter(
    (x) => x.date.getFullYear() == selectedYear
  );

  return (
    <Card className="expenses">
      <ExpenseFilter
        onChangeFilter={onChangeYearHandler}
        selectedYear={selectedYear}
      />
      <ExpensesChart items={filteredExpenses} />
      <ExpenseList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
