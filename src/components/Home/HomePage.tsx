import { useEffect, useState } from "react";
import type {
  financialMetric,
  GetAllRecordsResponse,
  Record,
} from "../../types/types";
import Decimal from "decimal.js";
import HomeHeader from "./HomeHeader";
import RecordList from "../Records/RecordList/RecordList";
import { DeleteRecordApi, GetRecordsApi } from "../../api/records";
import EditRecord from "../Records/CreateRecord/EditRecord/EditRecord";
import { DeleteAccountApi } from "../../api/accounts";
import { toast } from "react-toastify";

const HomePage = () => {
  const currentDate = new Date();
  const [updateRecord,setUpdateRecord] = useState(false)
  const [recordToUpdate,setRecordToUpdate] = useState<Record>()
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
      // setRecords(mockRecords)
      try {
        setLoading(true);
        const response = (await GetRecordsApi()) as GetAllRecordsResponse;
        setRecords(response.Records);
        const currentExpense: Decimal =
          response.Records?.filter(
            (record: Record) => record.type === "Expense",
          )
            .map((records: Record) => Decimal(records.amount))
            .reduce((x: Decimal, y: Decimal) => {
              return Decimal(x).plus(Decimal(y));
            }, Decimal(0)) || Decimal(0);
        const currentIncome: Decimal =
          response.Records?.filter(
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

  const DeleteRecord = async (id:string) => {
   try {
         const response = await DeleteRecordApi({ id });
         console.log(response);
         if (response.deletedRecord) {
           toast.success(response.message);
           setRecords((prev) => prev?.filter((a) => a.id !== Number(id)));
         } else {
           toast.error(response.message || "Can't delete acount");
         }
       } catch (error) {
         console.log(error);
         toast.error("Failed to delete account");
       }
  }

  const UpdateRecord = async (record:Record) => {
    setRecordToUpdate(record)
    setUpdateRecord(true)
  }
  if (loading) {
    return <>Loading...</>;
  }
  if(!updateRecord){
    return (
      <>
        <HomeHeader
          Month={Month}
          Year={Year}
          financialMetricsForHeader={financialMetricsForHeader}
          handleNextMonth={handleNextMonth}
          handlePrevMonth={handlePrevMonth}
        />
        <RecordList Records={records} DeleteRecord={DeleteRecord}  EditRecord={UpdateRecord}/>
      </>
    );
  } else {
    return <EditRecord Record={recordToUpdate}/>
  }
};

export default HomePage;
