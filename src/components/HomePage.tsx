import { useEffect, useState } from "react";
import Header from "./Header";
import TransactionList from "./TransactionList";
import type {
  financialMetric,
  GetAllRecordsResponse,
  Record,
} from "../types/types";
import { getRecords } from "../api/records";
import Decimal from "decimal.js";

const HomePage = () => {
  const currentDate = new Date();

  const [Year, setYear] = useState<number>(currentDate.getFullYear());
  const [Month, setMonth] = useState<number>(currentDate.getMonth());
  const [loading, setLoading] = useState<boolean>(false);
  const [expense, setExpense] = useState<Decimal>(new Decimal(0));
  const [income, setIncome] = useState<Decimal>(new Decimal(0));
  const [balance, setBalance] = useState<Decimal>(new Decimal(0));
  const [records, setRecords] = useState<Record[]>();
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

  useEffect(() => {
    const InitializeRecordsData = async () => {
      try {
        setLoading(true);
        const response = (await getRecords()) as GetAllRecordsResponse;
        console.log("Home", response);
        setRecords(response.data.Records);
        const currentExpense: Decimal =
          response.data.Records?.filter(
            (record: Record) => record.type === "Expense",
          )
            .map((records: Record) => Decimal(records.amount))
            .reduce((x: Decimal, y: Decimal) => {
              return Decimal(x).plus(Decimal(y));
            }, Decimal(0)) || Decimal(0);
        const currentIncome: Decimal =
          response.data.Records?.filter(
            (record: Record) => record.type === "Income",
          )
            .map((records: Record) => Decimal(records.amount))
            .reduce((x: Decimal, y: Decimal) => {
              return Decimal(x).plus(Decimal(y));
            }, Decimal(0)) || Decimal(0);
        setIncome(new Decimal(currentIncome));
        setExpense(new Decimal(currentExpense));
        setBalance(currentIncome.sub(currentExpense));
        setLoading(false);
      } catch (error) {
        console.log("Error in fetching records", error);
        setLoading(false);
      }
    };
    InitializeRecordsData();
  }, []);

  if (loading) {
    return <>Loading...</>;
  }
  return (
    <>
      <Header
        Month={Month}
        Year={Year}
        financialMetricsForHeader={financialMetricsForHeader}
        handleNextMonth={handleNextMonth}
        handlePrevMonth={handlePrevMonth}
      />
      <TransactionList Records={records} />
    </>
  );
};

export default HomePage;
