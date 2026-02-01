import { useState } from "react";
import Header from "./components/Header";
import { records, totalExpense, totalIncome } from "./lib/constants";
import type { financialMetric } from "./types/types";
import TransactionList from "./components/TransactionList";



function App() {
  const currentDate = new Date();


  const [Year, setYear] = useState<number>(currentDate.getFullYear());
  const [Month, setMonth] = useState<number>(currentDate.getMonth());
  const [expense] = useState<number>(totalExpense);
  const [income] = useState<number>(totalIncome);
  const [balance] = useState<number>(totalIncome-totalExpense);

  const financialMetricsForHeader: financialMetric[] = [
    {
      name: "EXPENSE",
      value: expense,
    },
    {
      name: "INCOME",
      value: income,
    },
    {
      name: "BALANCE",
      value: balance,
    },
  ];


  const handleNextMonth = (monthDec: boolean) => {
    if (monthDec) {
      setYear(Year + 1);
      setMonth(0);
    } else {
      setMonth(Month + 1);
    }
  };

  const handlePrevMonth = (monthJan: boolean) => {
    if (monthJan) {
      setMonth(11);
      setYear(Year - 1);
    } else {
      setMonth(Month - 1);
    }
  };

  return (
    <>
      <Header
        Month={Month}
        Year={Year}
        financialMetricsForHeader={financialMetricsForHeader}
        handleNextMonth={handleNextMonth}
        handlePrevMonth={handlePrevMonth}
      />
      <TransactionList TransactionRecords={records}/>
    </>
  );
}

export default App;
