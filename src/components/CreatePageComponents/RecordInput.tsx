import { CiWallet } from "react-icons/ci";
import type { record_type } from "../../types/types";
import { IoPricetagOutline } from "react-icons/io5";
import { PiBackspace } from "react-icons/pi";
import { useState } from "react";
import * as math from "mathjs";
interface RecordInputProps {
  record_type: record_type;
  amount: number;
}

interface CalculatorButton {
  value: string;
  onClick: Function;
}

const RecordInput = (props: RecordInputProps) => {
  const [amountString, setAmountString] = useState<string>("0");
  const NumberClicked = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    console.log("clicked", e.currentTarget.innerText);
    const value = e.currentTarget.innerText;
    setAmountString((prev) => prev + value);
    console.log(amountString);
  };
  const handleBackSpace = () => {
    setAmountString((prev) => prev.slice(0, prev.length - 1));
  };
  const evaluate = () => {
    const result = math.evaluate(amountString);
    console.log(result);
    setAmountString(result);
  };
  const calculator_buttons: CalculatorButton[] = [
    { value: "+", onClick: NumberClicked },
    { value: "7", onClick: NumberClicked },
    { value: "8", onClick: NumberClicked },
    { value: "9", onClick: NumberClicked },
    { value: "-", onClick: NumberClicked },
    { value: "4", onClick: NumberClicked },
    { value: "5", onClick: NumberClicked },
    { value: "6", onClick: NumberClicked },
    { value: "*", onClick: NumberClicked },
    { value: "1", onClick: NumberClicked },
    { value: "2", onClick: NumberClicked },
    { value: "3", onClick: NumberClicked },
    { value: "/", onClick: NumberClicked },
    { value: "0", onClick: NumberClicked },
    { value: ".", onClick: NumberClicked },
    { value: "=", onClick: evaluate },
  ];
  return (
    <div className="flex flex-col py-3 flex-1">
      <>
        <div className="flex justify-around">
          <button className="w-full text-xs font-light">Account</button>
          <button className="w-full text-xs font-light">
            {props.record_type !== "Transfer" ? "Category" : "To"}
          </button>
        </div>
        <div className="flex justify-around px-1 py-2 space-x-1 font-semibold">
          <div className="w-full border flex justify-center rounded py-2 space-x-1">
            <CiWallet className="text-2xl" />
            <span>Account</span>
          </div>
          {props.record_type !== "Transfer" && (
            <div className="w-full border flex justify-center rounded py-2 space-x-1">
              <IoPricetagOutline className="text-2xl" />
              <span>Category</span>
            </div>
          )}
          {props.record_type === "Transfer" && (
            <div className="w-full border flex justify-center rounded py-2 space-x-1">
              <CiWallet className="text-2xl" />
              <span>Account</span>
            </div>
          )}
        </div>
      </>

      <>
        <div className="p-1 flex-1">
          <textarea
            className="rounded border px-1 w-full h-full min-h-5 resize-none focus:border-0"
            placeholder="Add notes"
          />
        </div>
      </>

      <>
        <div className="p-1">
          <div className="flex rounded border px-1 w-full focus:border-0 justify-end gap-2 py-3">
            <span className="font-semibold text-4xl">
              {amountString}
            </span>
            <PiBackspace
              className="text-2xl my-auto"
              onClick={handleBackSpace}
            />
          </div>
        </div>
      </>

      <>
        <div className="p-1 grid grid-cols-4 flex-1 max-h-80">
          {calculator_buttons.map((button) => (
            <button
              className=" rounded border"
              onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                button.onClick(e);
              }}
              key={button.value}
            >
              {button.value}
            </button>
          ))}
        </div>
      </>
    </div>
  );
};

export default RecordInput;
