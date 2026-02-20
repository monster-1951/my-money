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
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import LoadingPage from "../UtilityComponents/Loading";

const HomePage = () => {
  const currentDate = new Date();
  const [Year, setYear] = useState<number>(currentDate.getFullYear());
  const [Month, setMonth] = useState<number>(currentDate.getMonth());
  const [loading, setLoading] = useState<boolean>(false);
  const [expense, setExpense] = useState<Decimal>(new Decimal(0));
  const [income, setIncome] = useState<Decimal>(new Decimal(0));
  const [balance, setBalance] = useState<Decimal>(new Decimal(0));
  const [records, setRecords] = useState<Record[]>();
  const [deleteConfirmationBox, setDeleteConfirmationBox] = useState(false);
  const [idOfRecordToBeDeleted,setIdOfRecordToBeDeleted] = useState("")
  const navigate = useNavigate();
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
  const formatter = Intl.NumberFormat("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
  useEffect(() => {
    const InitializeRecordsData = async () => {
      // setRecords(mockRecords)
      try {
        setLoading(true);
        const response = (await GetRecordsApi(
          formatter.format(Month + 1).toString(),
          formatter.format(Month + 2).toString(),
        )) as GetAllRecordsResponse;
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
          response.Records?.filter((record: Record) => record.type === "Income")
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
  }, [Month]);

  const handleDeleteRecord = async (id:string) => {
    setDeleteConfirmationBox(true)
    setIdOfRecordToBeDeleted(id)
  }

  const DeleteRecord = async (id: string) => {
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
    } finally {
      setDeleteConfirmationBox(false)
    }
  };

  const UpdateRecord = async (record: Record) => {
    navigate("/create", {
      state: { record },
    });
  };
  if (loading) {
    return (
      <>
        <LoadingPage />
      </>
    );
  }
  return (
    <>
      <HomeHeader
        Month={Month}
        Year={Year}
        financialMetricsForHeader={financialMetricsForHeader}
        handleNextMonth={handleNextMonth}
        handlePrevMonth={handlePrevMonth}
      />
      <RecordList
        Records={records}
        DeleteRecord={handleDeleteRecord}
        EditRecord={UpdateRecord}
      />
      {deleteConfirmationBox && (
        <div className="fixed inset-0 bg-black/30 flex items-center z-10 justify-center">
          <div className="flex flex-col">
            <div className="bg-red-500 text-white p-5 rounded-t-xl">
              <div className="text-xl font-bold">Delete this record ?</div>
              <div className="flex justify-center font-semibold text-lg">
                Are you sure ?
              </div>
            </div>
            <div className="bg-white p-5 rounded-b-xl">
              <div className="flex justify-around p-3">
                <button
                  className="border px-4 py-1 rounded"
                  onClick={() => {
                    setDeleteConfirmationBox(false);
                  }}
                >
                  NO
                </button>
                <button className="border px-4 py-1 rounded" onClick={async() => {
                  await DeleteRecord(idOfRecordToBeDeleted)
                }}>YES</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HomePage;
