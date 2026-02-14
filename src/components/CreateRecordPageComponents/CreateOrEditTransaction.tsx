import { useState } from "react";
import { NavLink } from "react-router-dom";
import type { record_type } from "../../types/types";
import "react-datepicker/dist/react-datepicker.css";
import { mockCategories } from "../../lib/constants";
import TransactionType from "./TransactionType";
import AccountsAndCategoryInput from "./RecordInput/SubComponents/AccountsAndCategoriesInput/AccountsAndCategoryInput";
import NotePad from "./RecordInput/SubComponents/NotePad";
import Calculator from "./RecordInput/SubComponents/Calculator";
import DateInput from "./DateInput";

const CreateOrEditTransactioinPage = () => {
  const [type, setType] = useState<record_type>("Expense");
  const [account, setAccount] = useState<number>(0);
  const [category, setCategory] = useState<number>(0);
  const [transferredToAccount, setTransferredToAccount] = useState(0);
  const [notes, setNotes] = useState<string>("");
  const [date, setDate] = useState<Date | null>(new Date());
  const [amount, setAmount] = useState(0);

  const saveRecord = () => {
    const record = {
      type: "Expense",
      account_id: account,
      category_id: category,
      transferred_to_account_id: transferredToAccount,
      notes,
      amount,
      time: date?.toLocaleDateString() || "",
    };
    console.log(record);
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
          categories={mockCategories}
          setCategory={setCategory}
          setTransferredToAccount={setTransferredToAccount}
        />
        <NotePad notes={notes} setNotes={setNotes} />
        <Calculator setAmount={setAmount} amount={amount} />
      </div>
      <DateInput date={date} setDate={setDate} />
    </div>
  );
};

export default CreateOrEditTransactioinPage;
