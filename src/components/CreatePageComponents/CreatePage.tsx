import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import type { record_type } from "../../types/types";
import RecordInput from "./RecordInput";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CreateOrEditTransactioinPage = () => {
  const [date, setDate] = useState<Date | null>(new Date());
  const dateTimeInputRef = useRef<DatePicker | null>(null);
  const [type, setType] = useState<record_type>("Expense");
  const [amount] = useState(0);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setType(event.currentTarget.innerText as record_type);
  };
  const handleDateTimeSelectSelect = () => {
    dateTimeInputRef.current?.setOpen(true);
  };
  return (
    <div className="flex flex-col min-h-dvh w-full sm:w-[80%] md:w-[40%] xl:w-[30%] mx-auto">
      {/* Cancel Save Button */}
      <div className="flex justify-between px-5 py-1 pt-3 shrink-0">
        <NavLink to={"/"}>&#10005; CANCEL</NavLink>
        <button>&#10003; SAVE</button>
      </div>

      <div className="flex justify-center space-x-3 p-3">
        <button
          onClick={handleClick}
          className={`${type === "Income" ? "font-bold" : ""}`}
        >
          Income
        </button>{" "}
        <span>|</span>
        <button
          onClick={handleClick}
          className={`${type === "Expense" ? "font-bold" : ""}`}
        >
          Expense
        </button>{" "}
        <span>|</span>
        <button
          onClick={handleClick}
          className={`${type === "Transfer" ? "font-bold" : ""}`}
        >
          Transfer
        </button>
      </div>
      <RecordInput record_type={type} amount={amount} />
        <DatePicker
          selected={date}
          onChange={(date: Date | null) => {
            setDate(date);
          }}
          showTimeSelect
          timeIntervals={15}
          ref={dateTimeInputRef}
          className="hidden"
        />
      <div className="flex justify-between py-2">
        <input type="time" name="time" id="" hidden />
        <button onClick={handleDateTimeSelectSelect} className="w-1/2 ">
          {date?.toDateString()}
        </button>{" "}
        <span>|</span>
        <button className="w-1/2 "
          onClick={handleDateTimeSelectSelect}
        >{`${date?.toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        })}`}</button>
      </div>
    </div>
  );
};

export default CreateOrEditTransactioinPage;
