import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import type {
  CreateIncomeExpenseRecordParams,
  CreateTransferRecordParams,
  Record,
  record_type,
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
} from "../../../../api/records";
import { toast } from "react-toastify";

interface EditRecordProps {
  Record?: Record;
}

const EditRecord = (props: EditRecordProps) => {
  console.log(props.Record)
  const [type, setType] = useState<record_type>(
    props.Record?.type || "Expense",
  );
  const [account, setAccount] = useState<number>(props.Record?.account || 0);
  const [category, setCategory] = useState<number>(props.Record?.category || 0);
  const [transferredToAccount, setTransferredToAccount] = useState(
    props.Record?.transferred_to_account || 0,
  );
  const [notes, setNotes] = useState<string>(props.Record?.notes || "");
  const [date, setDate] = useState<Date | null>(
    (props.Record?.time && new Date(props.Record.time)) || new Date(),
  );
  const [amountString, setAmountString] = useState<string>(
    props.Record?.amount || "",
  );
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
  const saveRecord = async () => {
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
        />
        <NotePad notes={notes} setNotes={setNotes} />
        <Calculator setAmount={setAmountString} amount={amountString} />
      </div>
      <DateInput date={date} setDate={setDate} />
    </div>
  );
};

export default EditRecord;
