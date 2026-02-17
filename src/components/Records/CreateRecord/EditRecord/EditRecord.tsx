import { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import type {
  CreateIncomeExpenseRecordParams,
  CreateTransferRecordParams,
  Record,
  record_type,
  UpdateRecordParams,
} from "../../../../types/types";
import "react-datepicker/dist/react-datepicker.css";
import TransactionType from "./Inputs/TransactionType";
import NotePad from "./Inputs/NotePad";
import DateInput from "./Inputs/DateInput";
import Calculator from "./Inputs/Calculator";
import AccountsAndCategoryInput from "./Inputs/AccountsAndCategoriesInput/AccountsAndCategoryInput";
import {
  CreateRecordApi,
  CreateTransferRecordApi,
  UpdateToIncomeExpenseRecordApi,
  UpdateToTransferRecordApi,
} from "../../../../api/records";
import { toast } from "react-toastify";

const EditRecord = () => {
  const location = useLocation();
  const [Record, setRecord] = useState<Record>();
  const [type, setType] = useState<record_type>("Expense");
  const [account, setAccount] = useState<number>(0);
  const [category, setCategory] = useState<number>(0);
  const [transferredToAccount, setTransferredToAccount] = useState(0);
  const [notes, setNotes] = useState<string>("");
  const [date, setDate] = useState<Date | null>(new Date());
  const [amountString, setAmountString] = useState<string>("");
  const navigate = useNavigate();

  const constructParamsToSaveRecord = () => {
    let params: CreateIncomeExpenseRecordParams | CreateTransferRecordParams;
    if (type !== "Transfer") {
      params = {
        account_id: account,
        amount: Number(amountString),
        category_id: category,
        type: type,
        notes,
        time: date?.toISOString() || new Date().toISOString(),
      };
    } else {
      params = {
        account_id: account,
        amount: Number(amountString),
        time: date?.toISOString() || new Date().toISOString(),
        transferred_to_account_id: transferredToAccount,
        type: "Transfer",
        notes,
      };
    }
    console.log(params);
    return params;
  };

  const constructParamsToUpdateRecord = (id: number) => {
    let params: UpdateRecordParams;
    if (type !== "Transfer") {
      params = {
        data: {
          account_id: account,
          amount: Number(amountString),
          category_id: category,
          time: date?.toISOString() || new Date().toDateString(),
          transferred_to_account_id: null,
          type: type,
          notes: notes || "",
        },
        id: id,
      };
    } else {
      params = {
        data: {
          account_id: account,
          amount: Number(amountString),
          category_id: null,
          time: date?.toISOString() || new Date().toISOString(),
          transferred_to_account_id: transferredToAccount,
          type: "Transfer",
          notes: notes,
        },
        id: id,
      };
    }
    return params;
  };

  useEffect(() => {
    if (location.state) {
      setRecord(location.state?.record);
      setType(location.state.record.type || "Expense");
      setAccount(Number((location.state.record.account || 0).toString()));
      setCategory(location.state.record.category || 0);
      setTransferredToAccount(location.state.record.transferred_to_account);
      setNotes(location.state.record.notes || "");
      setDate(new Date(location.state.record.time));
      setAmountString(location.state.record.amount || "0");
    } 
  }, []);
  const createRecord = async () => {
    const params = constructParamsToSaveRecord();
    try {
      const response =
        params.type !== "Transfer"
          ? await CreateRecordApi(params)
          : await CreateTransferRecordApi(params);
      if (response.newRecord) {
        toast.success(response.message);
        navigate("/");
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      toast.error("Failed to create record");
    }
  };
  const updateRecord = async (id: number) => {
    const params = constructParamsToUpdateRecord(id);
    try {
      const response =
        params.data.type !== "Transfer"
          ? await UpdateToIncomeExpenseRecordApi(params)
          : await UpdateToTransferRecordApi(params);
      if (response.UpdatedRecord) {
        toast.success(response.message);
        navigate("/");
      } else {
        console.log(response);
        toast.error(response.message || "Something went wrong");
      }
    } catch (error) {
      toast.error("Failed to update record");
    }
  };
  const saveRecord = async () => {
    if (!Number(amountString)) {
      toast.error("Amount can't be zero!");
      return;
    }
    if (location.state?.record && Record) {
      await updateRecord(Record.id);
    } else {
      await createRecord();
    }
  };
  return (
    <div className="flex flex-col min-h-dvh w-full sm:w-[80%] md:w-[60%] xl:w-[40%] mx-auto">
      {/* Cancel Save Button */}
      <div className="flex justify-between px-5 py-1 pt-3 shrink-0">
        <NavLink to={"/"}>&#10005; CANCEL</NavLink>
        <button onClick={saveRecord}>&#10003; SAVE</button>
      </div>

      <TransactionType type={type} setType={setType} />

      <div className="flex flex-col py-3 flex-1">
        <AccountsAndCategoryInput
          record_type={type}
          setAccount={setAccount}
          setCategory={setCategory}
          setTransferredToAccount={setTransferredToAccount}
          account={account}
          category={category}
          transferred_to_account={transferredToAccount}
        />
        <NotePad notes={notes} setNotes={setNotes} />
        <Calculator setAmount={setAmountString} amount={amountString} />
      </div>
      <DateInput date={date} setDate={setDate} />
    </div>
  );
};

export default EditRecord;
