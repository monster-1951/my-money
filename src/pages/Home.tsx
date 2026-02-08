import React,{ useEffect, useState } from "react";
import { totalExpense, totalIncome } from "../lib/constants";
import Header from "../components/Header";
import TransactionList from "../components/TransactionList";
import type { financialMetric, GetAllRecordsResponse, Record } from "../types/types";
import { getRecords } from "../api/records";

export const Home = () => {
  const currentDate = new Date();

  const [Year, setYear] = useState<number>(currentDate.getFullYear());
  const [Month, setMonth] = useState<number>(currentDate.getMonth());
  const [loading,setLoading] = useState<boolean>(false)
  const [expense] = useState<number>(totalExpense);
  const [income] = useState<number>(totalIncome);
  const [balance] = useState<number>(totalIncome - totalExpense);
  const [records,setRecords] = useState<Record[]>()
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
        setLoading(true)
        const response = await getRecords()  as GetAllRecordsResponse
        console.log("Home",response)
        setRecords(response.data.Records)
        setLoading(false)
      } catch (error) {
        console.log("Error in fetching records", error)
      }
    }
    InitializeRecordsData()
  },[])

  if(loading){
    return <>Loading...</>
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

export default Home;
