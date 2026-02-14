import { useRef } from "react";
import DatePicker from "react-datepicker";

interface DateInputProps {
  date: Date | null;
  setDate: React.Dispatch<React.SetStateAction<Date | null>>;
}

const DateInput = (props: DateInputProps) => {
  const dateTimeInputRef = useRef<DatePicker | null>(null);
  const handleDateTimeSelectSelect = () => {
    dateTimeInputRef.current?.setOpen(true);
  };
  return (
    <>
      <DatePicker
        selected={props.date}
        onChange={(date: Date | null) => {
          props.setDate(date);
        }}
        showTimeSelect
        timeIntervals={15}
        ref={dateTimeInputRef}
        className="hidden"
      />
      <div className="flex justify-between py-2">
        <input type="time" name="time" id="" hidden />
        <button onClick={handleDateTimeSelectSelect} className="w-1/2 ">
          {props.date?.toDateString()}
        </button>{" "}
        <span>|</span>
        <button
          className="w-1/2 "
          onClick={handleDateTimeSelectSelect}
        >{`${props.date?.toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        })}`}</button>
      </div>
    </>
  );
};

export default DateInput;
